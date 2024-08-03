import { Dictionary } from '@/types/definitions';
import 'server-only';

export type Locale = keyof typeof dictionaries;

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  uk: () => import('./dictionaries/uk.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
