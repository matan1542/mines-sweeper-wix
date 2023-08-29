import TableCell from "./TableCell";

const TableRow = ({ row, rowIndex, onCellClick }) => {
    return <tr>
        {row.map((cell, cellIndex) => {
            return <TableCell
                key={`${rowIndex}-${cellIndex}`}
                cell={cell}
                onClick={() => onCellClick(rowIndex, cellIndex)}
            />;
        })}
    </tr>;
}

export default TableRow;