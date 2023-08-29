import { MINE } from "@/constants/GAME_CONSTANTS";
import style from "./style.module.scss";

const TableCell = ({ cell, onClick }) => {
  const { isShown, isMine } = cell;

  const cellContent = () => {
    if (isShown) {
      if (isMine) {
        return MINE;
      } else {
        if (cell.minesAroundCount === 0) return "";
        return cell.minesAroundCount;
      }
    }
    return null;
  };

  return (
    <td onClick={onClick} className={!isShown ? style.cellIsNotShown : null}>
      {cellContent()}
    </td>
  );
};

export default TableCell;
