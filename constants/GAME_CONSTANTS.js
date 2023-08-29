export { MINE, FLAG, LIVE, EMPTY, NORMAL, DEAD, WIN, G_LEVELS, BOARD_INITAL };

const MINE = "💣";
const FLAG = "🚩";
const LIVE = "❤️";
const EMPTY = " ";
const NORMAL = "😃";
const DEAD = "🤯";
const WIN = "😎";

const G_LEVELS = [
  { SIZE: 4, MINES: 2 },
  { SIZE: 8, MINES: 12 },
  { SIZE: 12, MINES: 30 },
];

const BOARD_INITAL = {
  board: null,
  isGameOver: false,
  isGameWon: false,
};
