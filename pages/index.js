import MinesSweeper from '@/components/MinesSweeper'
import {useState} from 'react'
import BoardContext from '@/store/store'
import { createMatrix } from "@/services/game.service";

export default function Home() {
    const [board, setBoard] = useState(createMatrix());
    const [isGameOn, setIsGameOn] = useState(false);

    const contextValue = {
        board,
        setBoard,
        isGameOn,
        setIsGameOn
    }

    return (
        <>
            <BoardContext.Provider value={contextValue}>
                <MinesSweeper/>
            </BoardContext.Provider>
        </>
    );
}
