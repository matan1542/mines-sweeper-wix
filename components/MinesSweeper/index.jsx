import { useContext } from "react";
import style from "./style.module.scss";
import BoardContext from "@/store/store";
import GameBoard from "./GameBoard";
import { expandShown, generateMines, updateNeighborsCount, markCell, createMatrix } from "@/services/game.service";
import GameLevels from "./GameLevels";

const MinesSweeper = () => {
  const { board, setBoard, isGameOn, setIsGameOn, gameLevel, setGameLevel } =
    useContext(BoardContext);

  const resetGame = ({ level }) => {
    console.log('level', level);
    setIsGameOn(false);
    setBoard(createMatrix(level));
  };

  const onCellClick = (pos) => {
    let updateBoard = JSON.parse(JSON.stringify(board));

    if (!isGameOn) {
      updateBoard = generateMines({ board, amount: gameLevel.amount, pos });
      updateBoard = updateNeighborsCount(updateBoard);
      setIsGameOn(true);
    }
    updateBoard = expandShown({ board: updateBoard, pos });
    setBoard(updateBoard);
  };

  const onLevelChange = (level) => {
    setGameLevel(level);
    resetGame({ level });
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
