import {FLAG, MINE} from "@/constants/GAME_CONSTANTS";
import style from "./style.module.scss";

const TableCell = ({ cell, onClick, onMarkCell }) => {
  const { isShown, isMine, isMarked } = cell;

  const cellContent = () => {
    if (!isShown) {
      return isMarked ? FLAG : null;
    }

    if (isMine) {
      return MINE;
    }

    return cell.minesAroundCount === 0 ? null : cell.minesAroundCount;
  };

  const handleOnContextMenu = (e) => {
    e.preventDefault();
    onMarkCell();
  }

  return (
    <td onClick={onClick} onContextMenu={handleOnContextMenu} className={!isShown ? style.cellIsNotShown : null}>
      {cellContent()}
    </td>
  );
};

export default TableCell;
