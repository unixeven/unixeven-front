'use client';

import React from 'react';
import { Button } from '../Button/Button';
import { TitleContactUs } from '../TitleContactUs/TitleContactUs';
import { SocialContactUs } from '../SocialContactUs/SocialContactUs';


export const ContactUs = () => {
  return (
  <section 
  aria-labelledby="section-contact-us"
  className="flex flex-col items-center gap-[104px] md:gap-10 desk:gap-20 py-[148px] px-4 bg-contactUs-light-bg dark:bg-contactUs-bg md:py-[120px] md:px-6 md:bg-contactUs-light-bg-md dark:md:bg-contactUs-bg-md desk:px-[202px] desk:pt-[228px] desk:pb-[68px] desk:bg-contactUs-light-bg-desk dark:desk:bg-contactUs-bg-desk dark:bg-transparent bg-lightBackground bg-cover bg-no-repeat"
    >
    <div className='flex flex-col items-center gap-6 '>
      <TitleContactUs/>
      <Button buttonType="button" className="btn-request" text="Make a request" onClick={() => { }} />
    </div>
    <SocialContactUs/>
  </section>
  )
};
