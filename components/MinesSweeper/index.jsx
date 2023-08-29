import { useContext } from "react";
import style from "./style.module.scss";
import BoardContext from "@/store/store";
import GameBoard from "./GameBoard";
import { expandShown, generateMines, updateNeighborsCount, markCell } from "@/services/game.service";

const MinesSweeper = () => {
  const { board, setBoard, isGameOn, setIsGameOn } = useContext(BoardContext);

  const onCellClick = (pos) => {
    let updateBoard = JSON.parse(JSON.stringify(board));
    if (!isGameOn) {
      updateBoard = generateMines({ board, pos });
      updateBoard = updateNeighborsCount(updateBoard);
      setIsGameOn(true);
    }
    updateBoard = expandShown({ board: updateBoard, pos });
    setBoard(updateBoard);
  };

  const onMarkCell = (pos) => {
    const updatedBoard = markCell({ board, pos });
    setBoard(updatedBoard);
  }

  return (
    <div className={style.MinesSweeperContainer}>
      <GameBoard board={board} onCellClick={onCellClick} onMarkCell={onMarkCell} />
    </div>
  );
};

export default MinesSweeper;
