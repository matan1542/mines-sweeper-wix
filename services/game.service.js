import { G_LEVELS } from "@/constants/GAME_CONSTANTS";
import { countNeighbors, getRandomIntInclusive } from "./util.service";

export {
  createMatrix,
  generateMines,
  updateNeighborsCount,
  updateCellDisplay,
  expandShown,
};
  
// Check large condition that checks if there are neighbors that are greater then 0 that are not mines or shown and if there is.. stop recursion
function expandShown({ board, pos }) {
  let copyBoard = JSON.parse(JSON.stringify(board));
  let countMines = copyBoard[pos.i][pos.j].minesAroundCount;
  if (
    !copyBoard[pos.i][pos.j].isMine &&
    !copyBoard[pos.i][pos.j].isMarked &&
    !copyBoard[pos.i][pos.j].isShown &&
    !countMines
  ) {
    copyBoard[pos.i][pos.j].isShown = true;
    // gGame.shownCount++;
   copyBoard = findNeighbors({ board: copyBoard, cellI: pos.i, cellJ: pos.j });
  } else if (countMines > 0 && !copyBoard[pos.i][pos.j].isShown) {
    copyBoard[pos.i][pos.j].isShown = true;
    // gGame.shownCount++;
  }
  return copyBoard;
}

function findNeighbors({ board, cellI, cellJ }) {
  let copyBoard = JSON.parse(JSON.stringify(board));
  for (let i = cellI - 1; i <= cellI + 1; i++) {
    if (i < 0 || i >= copyBoard.length) continue;
    for (let j = cellJ - 1; j <= cellJ + 1; j++) {
      if (i === cellI && j === cellJ) continue;
      if (j < 0 || j >= copyBoard[i].length) continue;
      if (copyBoard[i][j].minesAroundCount >= 0 && !copyBoard[i][j].isShown) {
        let pos = { i: i, j: j };
        copyBoard = expandShown({ board: copyBoard, pos});
      }
    }
  }
  return copyBoard;
}

function createMatrix(gLevel = G_LEVELS[2]) {
  let mat = [];
  for (let i = 0; i < gLevel.SIZE; i++) {
    mat[i] = [];
    for (let j = 0; j < gLevel.SIZE; j++) {
      mat[i][j] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: false,
        isMarked: false,
      };
    }
  }
  return mat;
}

function updateCellDisplay(board, pos) {
  let copyBoard = JSON.parse(JSON.stringify(board));
  copyBoard[pos.i][pos.j].isShown = true;
  return copyBoard;
}

function updateNeighborsCount(board) {
  let copyBoard = JSON.parse(JSON.stringify(board));
  for (let i = 0; i < copyBoard.length; i++) {
    for (let j = 0; j < copyBoard[i].length; j++) {
      const neighborsCount = countNeighbors(i, j, copyBoard);
      copyBoard[i][j].minesAroundCount = neighborsCount;
    }
  }
  return copyBoard;
}

function generateMines({ board, amount = G_LEVELS[2].MINES, pos }) {
  let copyBoard = JSON.parse(JSON.stringify(board));
  for (let i = 0; i < amount; i++) {
    const randI = getRandomIntInclusive(0, copyBoard.length - 1);
    const randJ = getRandomIntInclusive(0, copyBoard.length - 1);
    if (
      copyBoard[randI][randJ].isMine ||
      (pos.i === randI && pos.j === randJ)
    ) {
      i--;
    } else {
      copyBoard[randI][randJ].isMine = true;
    }
  }
  return copyBoard;
}
