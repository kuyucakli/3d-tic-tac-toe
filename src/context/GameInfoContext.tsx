import { createContext, PropsWithChildren, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { GameInfoContextType, LocalStorageKey, Move } from "../types/index.dt";
import { checkWinner } from "../utils";

const GameInfoContext = createContext<GameInfoContextType | null>(null);


const GameInfoContextProvider = ({ children }: PropsWithChildren) => {
    const squarePieceRowCount = 3;
    const { set: setMoveHistory, data: moveHistory } = useLocalStorage<Move[][]>(LocalStorageKey.MOVE_HISTORY, [Array(Math.pow(squarePieceRowCount, 2)).fill(null)]);
    const { set: setHistoryIndex, data: historyIndex } = useLocalStorage(LocalStorageKey.HISTORY_INDEX, 0);

    const winner = checkWinner(moveHistory[historyIndex]);
    return (
        <GameInfoContext value={{ winner, setMoveHistory, moveHistory, setHistoryIndex, historyIndex }}>
            {children}
        </GameInfoContext>
    )
}


const useGameInfoContext = (): GameInfoContextType => {
    const context = useContext(GameInfoContext);
    if (!context) {
        throw new Error("useGameInfoContext must be used within a GameInfoContextProvider");
    }
    return context;
};


export { GameInfoContext, GameInfoContextProvider, useGameInfoContext }