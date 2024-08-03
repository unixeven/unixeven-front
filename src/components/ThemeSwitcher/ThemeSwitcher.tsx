'use client';

import React, { useEffect, useState } from 'react';

import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = window.localStorage.getItem('theme');
      return savedTheme ?? 'dark';
    }
    return 'dark';
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('theme', theme);
    }
    setIsMounted(true);
  }, [theme]);

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.checked ? 'light' : 'dark';
    setTheme(newTheme);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeSwitch
      checked={theme === 'light'}
      onChange={toggleTheme}
      aria-label="Toggle theme"
    />
  );
};
