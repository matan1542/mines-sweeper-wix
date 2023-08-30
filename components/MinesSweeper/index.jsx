import { useContext, useState } from "react";
import style from "./style.module.scss";
import BoardContext from "@/store/store";
import GameBoard from "./GameBoard";
import {
  expandShown,
  generateMines,
  updateNeighborsCount,
  markCell,
  createMatrix,
  checkWin,
} from "@/services/game.service";
import GameLevels from "./GameLevels";
import Modal from "../UI/Modal";

const MinesSweeper = () => {
  const [isModalOpen, setIsModalOpen] = useState();
  const { board, setBoard, isGameOn, isGameWon,setIsGameWon, setIsGameOn, gameLevel, setGameLevel } =
    useContext(BoardContext);

  const resetGame = ({ level }) => {
    setIsGameOn(false);
    setBoard(createMatrix(level));
  };

  const onCellClick = (pos) => {
    let updateBoard = JSON.parse(JSON.stringify(board));
    const currCell = board[pos.i][pos.j];

    if (currCell.isMine) {
      alert("Game Over");
      resetGame({ level: gameLevel });
      return;
    }

    if (!isGameOn) {
      updateBoard = generateMines({ board, amount: gameLevel.MINES, pos });
      updateBoard = updateNeighborsCount(updateBoard);
      setIsGameOn(true);
    }
    updateBoard = expandShown({ board: updateBoard, pos });
    setBoard(updateBoard);
    confirmWinGame({ board: updateBoard, gameLevel });
  };

  const onLevelChange = (level) => {
    setGameLevel(level);
    resetGame({ level });
  };

  const onMarkCell = (pos) => {
    const updatedBoard = markCell({ board, pos });
    confirmWinGame({ board: updatedBoard, gameLevel });
    setBoard(updatedBoard);
  };

  const confirmWinGame = ({ board, gameLevel }) => {
    if (checkWin({ board, gameLevel })) {
      resetGame({ level: gameLevel });
      setIsModalOpen(true);
    }
  };

  const changeOpenView = (ev) => {
    ev.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className={style.MinesSweeperContainer}>
      <GameLevels onLevelChange={onLevelChange} />
      <GameBoard
        board={board}
        onCellClick={onCellClick}
        onMarkCell={onMarkCell}
      />
      {isModalOpen && (
        <Modal changeOpenView={changeOpenView} classname={style.successMessage}>
          <h1>Game won!</h1>
        </Modal>
      )}
    </div>
  );
};

export default MinesSweeper;
