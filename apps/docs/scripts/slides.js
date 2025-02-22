import { initTheme } from './utils.js';

const introduction = [
  '00-introduction',
  [
    '01-presentation',

    '02-speaker-qdujardin',

    '03-introduce-yourself',
    '04-repository',
  ],
];

const fundamentals = [
  '01-fundamentals',
  [
    '01-presentation',
    '02-definition',
    '03-example',
    '04-components',
    '05-jsx',
    '09-exercice'
  ],
];

const slidesPerDirectory = [
  introduction,
  fundamentals,
];

initTheme(slidesPerDirectory);