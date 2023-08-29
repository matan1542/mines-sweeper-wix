import {G_LEVELS} from "@/constants/GAME_CONSTANTS";
import {countNeighbors, getRandomIntInclusive} from "./util.service";


export {createMatrix, generateMines, updateNeighborsCount};
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

function generateMines({board, amount = G_LEVELS[0].MINES, pos}) {
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
