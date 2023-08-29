import { MINE } from "@/constants/GAME_CONSTANTS";

const TableCell = ({ cell, onClick }) => {

    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    }

    return (
      <td onClick={handleClick}>
        {cell.isMine ? MINE : cell.minesAroundCount}
      </td>
    );
}
 
export default TableCell;