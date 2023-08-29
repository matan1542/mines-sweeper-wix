import TableCell from "./TableCell";

const TableRow = ({ row, rowIndex, onCellClick }) => {
  return (
    <tr>
      {row.map((cell, cellIndex) => {
        return (
          <TableCell
            key={`${rowIndex}-${cellIndex}`}
            cell={cell}
            i={rowIndex}
            j={cellIndex}
            onClick={() => onCellClick({ i: rowIndex, j: cellIndex })}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
