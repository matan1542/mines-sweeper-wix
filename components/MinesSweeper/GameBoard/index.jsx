import TableRow from "./TableRow";
import style from "./style.module.scss";

const GameBoard = ({ board, onCellClick }) => {
    return <table className={style.gameBoardContainer}>
        <tbody>
            {board.map((row, rowIndex) => {
                return <TableRow key={rowIndex} row={row} rowIndex={rowIndex} onCellClick={onCellClick} />;
             })}
        </tbody>
  </table>;
};

export default GameBoard;