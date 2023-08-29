import {useContext} from "react";
import style from "./style.module.scss";
import BoardContext from "@/store/store";
import GameBoard from "./GameBoard";
import {generateMines, updateNeighborsCount} from "@/services/game.service";

const MinesSweeper = () => {

    const {board, setBoard, isGameOn} = useContext(BoardContext);

    const onCellClick = (pos) => {
        if (!isGameOn) {
            let updateBoard = generateMines({board, pos})
            updateBoard = updateNeighborsCount(updateBoard)
            setBoard(updateBoard);
        }
    };

    return (
        <div className={style.MinesSweeperContainer}>
            <GameBoard board={board} onCellClick={onCellClick}/>
        </div>
    );
};

export default MinesSweeper;
