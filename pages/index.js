import MinesSweeper from "@/components/MinesSweeper";
import { useState } from "react";
import BoardContext from "@/store/store";
import { createMatrix } from "@/services/game.service";
import { G_LEVELS } from "@/constants/GAME_CONSTANTS";

export default function Home() {
  const [board, setBoard] = useState(createMatrix());
  const [isGameOn, setIsGameOn] = useState(false);
  const [gameLevel, setGameLevel] = useState(G_LEVELS[0]);
  const [isGameWon, setIsGameWon] = useState(false);

  const contextValue = {
    board,
    setBoard,
    isGameOn,
    setIsGameOn,
    gameLevel,
    setGameLevel,
    isGameWon,
    setIsGameWon,
  };

  return (
    <>
      <BoardContext.Provider value={contextValue}>
        <MinesSweeper />
      </BoardContext.Provider>
    </>
  );
}
