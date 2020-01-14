import { Platform } from "react-native"
import * as LANGUAGES from './languages';

export { default as QURAN } from './quran/quran.json';
export { default as SURAH } from './quran/surah.json';
export { default as TRANSLATIONS } from './quran/translations.json';
export { default as HIJAIYAH } from './hijaiyah.js';
export { default as ImagesPath } from './img.js';
export { default as SoundsPath } from './sounds.js';
export const Languages  = LANGUAGES 
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export const HEADER_HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;