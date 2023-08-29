import { useContext } from "react";
import style from "./style.module.scss";
import BoardContext from "@/store/store";
import { createMatrix } from "@/services/game.service";

const MinesSweeper = () => {
    const [board, setBoard] = useState(createMatrix()); // [board, setBoard
  const context = useContext(BoardContext);

  console.log("context", context);
  return <div className={style.MinesSweeperContainer}></div>;
};

export default MinesSweeper;
