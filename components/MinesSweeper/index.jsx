import { useContext, useState } from "react";
import style from "./style.module.scss";
import BoardContext from "@/store/store";
import { createMatrix } from "@/services/game.service";
import GameBoard from "./GameBoard";

const MinesSweeper = () => {
  const [board, setBoard] = useState(createMatrix()); // [board, setBoard

  const context = useContext(BoardContext);

  const onCellClick = () => {};

  return (
    <div className={style.MinesSweeperContainer}>
      <GameBoard board={board} onCellClick={onCellClick} />
    </div>
  );
};

export default MinesSweeper;
