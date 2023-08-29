import { useContext } from "react";
import style from "./style.module.scss";
import BoardContext from "@/store/store";
import GameBoard from "./GameBoard";
import {
  expandShown,
  generateMines,
  updateNeighborsCount,
  markCell,
  createMatrix,
  checkWin
} from "@/services/game.service";
import GameLevels from "./GameLevels";

const MinesSweeper = () => {
  const { board, setBoard, isGameOn, setIsGameOn, gameLevel, setGameLevel } =
    useContext(BoardContext);

  const resetGame = ({level}) => {
    setIsGameOn(false);
    setBoard(createMatrix(level));
  };

  const onCellClick = (pos) => {
    let updateBoard = JSON.parse(JSON.stringify(board));
    const currCell = board[pos.i][pos.j];

    if (currCell.isMine) {
      alert('Game Over');
      resetGame({level: gameLevel});
      return;
    }

    if (!isGameOn) {
      updateBoard = generateMines({ board, amount: gameLevel.MINES, pos });
      updateBoard = updateNeighborsCount(updateBoard);
      setIsGameOn(true);
    }

    updateBoard = expandShown({ board: updateBoard, pos });
    setBoard(updateBoard);

    if (checkWin({board: updateBoard})) {
      alert('You Won!');
      resetGame({level: gameLevel});
    }
  };

  const onLevelChange = (level) => {
    setGameLevel(level);
    resetGame({level});
  };

  const onMarkCell = (pos) => {
    const updatedBoard = markCell({ board, pos });
    setBoard(updatedBoard);
  }

  return (
    <div className={style.MinesSweeperContainer}>
      <GameLevels onLevelChange={onLevelChange} />
      <GameBoard board={board} onCellClick={onCellClick} onMarkCell={onMarkCell} />
    </div>
  );
};

export default MinesSweeper;
