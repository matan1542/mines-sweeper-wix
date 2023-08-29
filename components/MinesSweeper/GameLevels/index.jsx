import Button from '@/components/UI/Button';
import style from './style.module.scss';
import { G_LEVELS } from '@/constants/GAME_CONSTANTS';

const GameLevels = ({ onLevelChange }) => {
  return (
    <div className={style.gameLevelContainer}>
      <Button text="Easy" onClick={() => {onLevelChange(G_LEVELS[0])}} />
      <Button text="Medium" classname={style.medium} onClick={() => {onLevelChange(G_LEVELS[1]);}} />
      <Button text="Hard" classname={style.hard} onClick={() => {onLevelChange(G_LEVELS[2]);}} />
    </div>
  );
};
 
export default GameLevels;