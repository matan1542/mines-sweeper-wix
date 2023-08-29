import TableRow from "./TableRow";

const GameBoard = ({ board, onCellClick }) => {
    return <table>
        <tbody>
            {board.map((row, rowIndex) => {
                return <TableRow key={rowIndex} row={row} rowIndex={rowIndex} onCellClick={onCellClick} />;
             })}
        </tbody>
  </table>;
};

export default GameBoard;