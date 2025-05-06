import { createContext, PropsWithChildren, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { GameInfoContextType, LocalStorageKey, Move } from "../types/index.dt";
import { checkWinner } from "../utils";
import introSound from "../assets/audio/02.mp3";
import winnerStrokeSound from "../assets/audio/03.mp3";
import makeMoveSound from "../assets/audio/01.mp3";
import vocalO from "../assets/audio/female_vocal_o.mp3";
import vocalX from "../assets/audio/female_vocal_x.mp3";

import useAudio from "../hooks/useAudio";

const GameInfoContext = createContext<GameInfoContextType | null>(null);


const GameInfoContextProvider = ({ children }: PropsWithChildren) => {
    const playSound = useAudio({ intro: introSound, make_move: makeMoveSound, winner_stroke: winnerStrokeSound, game_over: introSound, winner_vocal_o: vocalO, winner_vocal_x: vocalX });

    const squarePieceRowCount = 3;
    const { set: setMoveHistory, data: moveHistory } = useLocalStorage<Move[][]>(LocalStorageKey.MOVE_HISTORY, [Array(Math.pow(squarePieceRowCount, 2)).fill(null)]);
    const { set: setHistoryIndex, data: historyIndex } = useLocalStorage(LocalStorageKey.HISTORY_INDEX, 0);

    const [winnerMove, winner] = checkWinner(moveHistory[historyIndex]);
    const tie = !winner && historyIndex == Math.pow(squarePieceRowCount, 2);
    const currentMove = historyIndex % 2 ? Move.O : Move.X;

    const replayGame = () => {
        setMoveHistory([Array(Math.pow(squarePieceRowCount, 2)).fill(null)]);
        setHistoryIndex(0);
    }


    if (!playSound) return;
    return (
        <GameInfoContext value={{ winner, winnerMove, setMoveHistory, moveHistory, setHistoryIndex, historyIndex, playSound, replayGame, tie, currentMove }}>
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