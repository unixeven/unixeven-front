'use client';

import React, { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';
import { MdLanguage } from 'react-icons/md';

import { useParams, useRouter } from 'next/navigation';

export const LanguageSwitcher = () => {
  const [isSelected, setIsSelected] = useState(true);

  const router = useRouter();
  const searchParams = useParams();

  useEffect(() => {
    if (searchParams.lang === 'uk') {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  }, [searchParams, setIsSelected]);

  const switchLang = () => {
    const lang = isSelected ? 'uk' : 'en';
    router.push(`/${lang}`);
    setIsSelected(pre => !pre);
  };

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={switchLang}
      className="btn  "
      classNames={{
        base: ' h-full ',
        wrapper: 'bg-transparent hover:bg-red-700 focus:bg-red-700',
        thumb: 'bg-transparent border shadow-none border-red-700 border-none',
        thumbIcon: 'dark:fill-white fill-cobalt',
        label: 'hover:bg-default-200 ',
        startContent: 'font-montserrat dark:text-lightWhite text-cobalt',
        endContent: 'font-montserrat dark:text-lightWhite text-cobalt',
      }}
      thumbIcon={<MdLanguage size={16} />}
      defaultSelected
      size="lg"
      color="danger"
      startContent={<span>EN</span>}
      endContent={<span>UA</span>}
      aria-label="Switch language"
    ></Switch>
  );
};
