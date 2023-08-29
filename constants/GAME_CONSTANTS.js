
export { MINE, FLAG, LIVE, EMPTY, NORMAL, DEAD, WIN, G_LEVELS };


const MINE = '💣';
const FLAG = '🚩';
const LIVE = '❤️';
const EMPTY = ' ';
const NORMAL = '😃';
const DEAD = '🤯';
const WIN = '😎';

const G_LEVELS = [
  { SIZE: 4, MINES: 2, LIVES: 1 },
  { SIZE: 8, MINES: 12, LIVES: 2 },
  { SIZE: 12, MINES: 30, LIVES: 3 },
];