import { useEffect, useRef, useState } from 'react';

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'project'>('default');
  const [isTouch, setIsTouch] = useState(false);
  const [label, setLabel] = useState('');
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    // Check reduced motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setIsTouch(true); // Disable custom cursor for reduced motion
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('[data-cursor]');
      if (el) {
        const type = el.getAttribute('data-cursor');
        if (type === 'project') {
          setCursorState('project');
          setLabel('VIEW\nPROJECT ↗');
        } else if (type === 'pointer') {
          setCursorState('pointer');
          setLabel('');
        } else {
          setCursorState('default');
          setLabel('');
        }
      } else {
        // Check if hovering a link or button
        const interactive = (e.target as HTMLElement).closest('a, button');
        if (interactive) {
          setCursorState('pointer');
          setLabel('');
        } else {
          setCursorState('default');
          setLabel('');
        }
      }
    };

    // Smooth interpolation loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.15);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.15);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - dotRef.current.offsetWidth / 2}px, ${pos.current.y - dotRef.current.offsetHeight / 2}px)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${pos.current.x - 50}px, ${pos.current.y - 16}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('resize', checkTouch);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor ${
          cursorState === 'pointer' ? 'expanded' : ''
        } ${
          cursorState === 'project' ? 'project-hover' : ''
        }`}
        aria-hidden="true"
      />
      {label && (
        <div
          ref={labelRef}
          className="cursor-label"
          aria-hidden="true"
          style={{ width: '100px' }}
        >
          {label.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </div>
      )}
    </>
  );
}
