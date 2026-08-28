import React, { useEffect, useRef, useState } from 'react';
import { sfx } from '../utils/sfx';

export function DoodleCanvas() {
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState<'red' | 'blue'>('red');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const clearCanvas = () => {
    sfx.playSnap();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const toggleDoodle = () => {
    sfx.playClick();
    setIsActive((prev) => !prev);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isActive) return;
    isDrawing.current = true;
    const pos = getPos(e);
    lastPos.current = pos;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isActive || !isDrawing.current || !lastPos.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const currentPos = getPos(e);

    ctx.strokeStyle = color === 'red' ? '#dc2626' : '#2563eb';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(currentPos.x, currentPos.y);
    ctx.stroke();

    lastPos.current = currentPos;
  };

  const stopDrawing = () => {
    isDrawing.current = false;
    lastPos.current = null;
  };

  const getPos = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ('touches' in e && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left + window.scrollX,
        y: e.touches[0].clientY - rect.top + window.scrollY,
      };
    } else if ('clientX' in e) {
      return {
        x: e.clientX - rect.left + window.scrollX,
        y: e.clientY - rect.top + window.scrollY,
      };
    }
    return { x: 0, y: 0 };
  };

  return (
    <>
      {/* Red Editorial Margin Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-10 top-0 z-0 hidden w-[2px] bg-red-600/25 xl:block"
      />

      {/* Floating Doodle Pencil Button on Margin Line */}
      <div className="fixed left-10 z-[250] hidden -translate-x-1/2 flex-col items-center gap-2 xl:flex" style={{ top: '8vh' }}>
        <button
          type="button"
          onClick={toggleDoodle}
          aria-pressed={isActive}
          aria-label={isActive ? 'Disable doodle mode' : 'Doodle on the page'}
          title={isActive ? 'Stop doodling' : 'Click to doodle on the page!'}
          className={`flex h-9 w-9 items-center justify-center text-xl transition-all duration-300 ${
            isActive ? 'scale-125 rotate-12 text-red-600 bg-paper border-2 border-ink rounded-full shadow-print-sm' : 'text-red-600 hover:scale-125'
          }`}
        >
          ✎
        </button>

        {isActive && (
          <div className="flex flex-col items-center gap-1.5 p-1.5 bg-paper border-2 border-ink shadow-print-sm rounded-lg animate-in fade-in zoom-in-95">
            <button
              onClick={() => { sfx.playClick(); setColor('red'); }}
              title="Red pen"
              className={`w-5 h-5 rounded-full bg-red-600 border border-ink ${color === 'red' ? 'ring-2 ring-ink ring-offset-1' : ''}`}
            />
            <button
              onClick={() => { sfx.playClick(); setColor('blue'); }}
              title="Blue pen"
              className={`w-5 h-5 rounded-full bg-blue-600 border border-ink ${color === 'blue' ? 'ring-2 ring-ink ring-offset-1' : ''}`}
            />
            <button
              onClick={clearCanvas}
              title="Clear all doodles"
              className="text-[10px] font-mono uppercase px-1 py-0.5 border border-ink bg-paper hover:bg-neutral-200 mt-1"
            >
              CLR
            </button>
          </div>
        )}
      </div>

      {/* Full Page Doodle Canvas */}
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        className={`absolute left-0 top-0 z-[240] ${
          isActive ? 'pointer-events-auto cursor-crosshair' : 'pointer-events-none'
        }`}
        style={{ width: '100%', height: '100%' }}
      />
    </>
  );
}
