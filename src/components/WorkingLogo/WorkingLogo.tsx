import React, { FC, useEffect, useRef } from 'react';
import { Logo } from '../Logo/Logo';
import { gsap } from 'gsap';

export const WorkingLogo: FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.5, rotationY: 0 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 360,
          duration: 1,
          ease: 'power2.out',
          delay: 1.5,
        }
      );
    }
  }, []);

  return (
    <div
      ref={logoRef}
      className="hidden logo-container md:flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <Logo width={203}  />
    </div>
  );
};
