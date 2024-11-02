// components/SmoothScroll.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollInstanceRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollInstanceRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
      console.log('Locomotive Scroll initialized'); // Debug log

      // Cleanup on component unmount
      return () => {
        scrollInstanceRef.current?.destroy();
      };
    }
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
