import { createContext } from 'react';

const BoardContext = createContext({
    board: null,
    isGameOver: false,
    isGameWon: false
});


export default BoardContext;