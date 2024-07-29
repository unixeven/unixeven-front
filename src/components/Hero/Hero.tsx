'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '../Button/Button';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const letters = titleRef.current.querySelectorAll('.letter');
      gsap.fromTo(
        letters,
        { opacity: 0, y: 50, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 3,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <section className="  w-full pt-[276px] pb-[297px] md:pt-[380px] md:pb-[450px] xl:pt-[320px] xl:pb-[277px]">
      <h1 ref={titleRef} className="text-center mb-10 font-cinzelDecorative">
        {'UNIXEVEN'.split('').map((letter, index) => (
          <span
            key={index}
            className="letter inline-block gradient-text font-cinzelDecorative text-[56px]/[40px] lg:text-[120px]/[85px] font-bold tracking-[0.5px]"
          >
            {letter}
          </span>
        ))}
      </h1>
      <Button
        buttonType="button"
        className="btn-request mx-auto"
        text="Make a request"
        onClick={() => {}}
      />
    </section>
  );
};
