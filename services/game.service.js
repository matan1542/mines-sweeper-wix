import { G_LEVELS } from "@/constants/GAME_CONSTANTS";
import { getRandomIntInclusive } from "@/utils/utils";

// Check large condition that checks if there are neighbors that are greater then 0 that are not mines or shown and if there is.. stop recursion
// function expandShown(pos) {
//   var countMines = gBoard[pos.i][pos.j].minesAroundCount;
//   if (
//     !gBoard[pos.i][pos.j].isMine &&
//     !gBoard[pos.i][pos.j].isMarked &&
//     !gBoard[pos.i][pos.j].isShown &&
//     !countMines
//   ) {
//     gBoard[pos.i][pos.j].isShown = true;
//     renderCell(pos.i, pos.j, EMPTY);
//     gGame.shownCount++;
//     findNeighbors(pos.i, pos.j);
//   } else if (countMines > 0 && !gBoard[pos.i][pos.j].isShown) {
//     gBoard[pos.i][pos.j].isShown = true;
//     renderCell(pos.i, pos.j, countMines);
//     gGame.shownCount++;
//   }
// }

// function findNeighbors(cellI, cellJ) {
//   for (var i = cellI - 1; i <= cellI + 1; i++) {
//     if (i < 0 || i >= gBoard.length) continue;
//     for (var j = cellJ - 1; j <= cellJ + 1; j++) {
//       if (i === cellI && j === cellJ) continue;
//       if (j < 0 || j >= gBoard[i].length) continue;
//       if (gBoard[i][j].minesAroundCount >= 0 && !gBoard[i][j].isShown) {
//         var pos = { i: i, j: j };
//         expandShown(pos);
//       }
//     }
//   }
// }

function createMatrix(gLevel = G_LEVELS[0]) {
  var mat = [];
  for (var i = 0; i < gLevel.SIZE; i++) {
    mat[i] = [];
    for (var j = 0; j < gLevel.SIZE; j++) {
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

function placeMines(board, amount = G_LEVELS[0].MINES) {
  for (var i = 0; i < amount; i++) {
    var randI = getRandomIntInclusive(0, board.length - 1);
    var randJ = getRandomIntInclusive(0, board.length - 1);
    if (!gBoard[randI][randJ].isMine && !gBoard[randI][randJ].isShown) {
      board[randI][randJ].isMine = true;
    } else {
      i--;
    }
  }
}
