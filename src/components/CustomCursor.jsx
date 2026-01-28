import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBgRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const bgPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports mouse
    const isTouchDevice = window.matchMedia('(max-width: 768px)').matches;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const cursorBg = cursorBgRef.current;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Update cursor position
      cursorPos.current.x = mousePos.current.x;
      cursorPos.current.y = mousePos.current.y;

      if (cursor) {
        cursor.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%)`;
      }

      // Update background cursor with smooth follow
      bgPos.current.x += (mousePos.current.x - bgPos.current.x) * 0.1;
      bgPos.current.y += (mousePos.current.y - bgPos.current.y) * 0.1;

      if (cursorBg) {
        cursorBg.style.transform = `translate(${bgPos.current.x}px, ${bgPos.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseDown = () => {
      cursor?.classList.add('clicked');
      cursorBg?.classList.add('clicked');
    };

    const handleMouseUp = () => {
      cursor?.classList.remove('clicked');
      cursorBg?.classList.remove('clicked');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className="cursor-background" ref={cursorBgRef}></div>
      <div className="cursor" ref={cursorRef}></div>
    </>
  );
};

export default CustomCursor;
