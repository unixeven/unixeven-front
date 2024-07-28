'use client';

import React from 'react';
import { Button } from '../Button/Button';

export const Hero = () => {
  return (
    <section className="w-full pt-[276px] pb-[297px] md:pt-[380px] md:pb-[450px] xl:pt-[320px] xl:pb-[277px]">
      <h1 className="text-center text-[120px] gradient-text mb-10 font-bold">
        Unixeven
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
