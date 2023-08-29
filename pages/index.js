import MinesSweeper from '@/components/MinesSweeper'
import {useState} from 'react'
import BoardContext from '@/store/store'

export default function Home() {
  const [board, setBoard] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  
  const contextValue = {
    board,
    setBoard,
    isGameOver,
    setIsGameOver
  }

  return (
    <>
      <BoardContext.Provider value={contextValue}>
        <MinesSweeper />
      </BoardContext.Provider>
    </>
  );
}
