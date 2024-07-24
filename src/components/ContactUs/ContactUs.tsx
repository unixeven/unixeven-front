'use client';

import React from 'react';
import { Button } from '../Button/Button';
import { TitleContactUs } from '../TitleContactUs/TitleContactUs';


export const ContactUs = () => {
  return (
  <section 
  aria-labelledby="section-contact-us"
  className="flex flex-col items-center px-4 py-[148px] gap-6 bg-contactUs-bg md:py-[120px] md:px-6 md:bg-contactUs-bg-md desk:h-[630px] desk:px-[202px] desk:pt-[228px] desk:pb-[68px] desk:bg-contactUs-bg-desk bg-cover bg-no-repeat"
    >
    <TitleContactUs/>
    <Button buttonType="button" className="btn-request" text="Make a request" onClick={() => {}}/>
  </section>
  )
};
