'use client';

import React, { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';
import { MdLanguage } from 'react-icons/md';

import { useParams, useRouter } from 'next/navigation';

export const LanguageSwitcher = () => {
  const [isSelected, setIsSelected] = useState(true);

  const router = useRouter();
  const searchParams = useParams();
  console.log(searchParams);

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
      className="btn "
      classNames={{
        base: '',
        wrapper: 'bg-transparent',
        thumb: 'bg-transparent border shadow-none border-red-700 border-none',
        thumbIcon: 'dark:fill-white fill-cobalt',
        label: ' ',
        startContent: 'font-montserrat dark:text-lightWhite text-cobalt',
        endContent: 'font-montserrat dark:text-lightWhite text-cobalt',
      }}
      thumbIcon={<MdLanguage size={16} />}
      defaultSelected
      size="lg"
      color="danger"
      startContent={<span>EN</span>}
      endContent={<span>UA</span>}
    ></Switch>
  );
};
