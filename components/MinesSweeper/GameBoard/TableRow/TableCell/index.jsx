import { MINE } from "@/constants/GAME_CONSTANTS";

const TableCell = ({ cell, onClick }) => {
    return (
      <td onClick={onClick}>
        {cell.isMine ? MINE : cell.minesAroundCount}
      </td>
    );
}
 
export default TableCell;