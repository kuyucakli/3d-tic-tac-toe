import { PropsWithChildren } from "react";
import { AudioCategory, Move } from "../types/index.dt";
import { useGameInfoContext } from "../context/GameInfoContext";

const GameOver = ({ children, headline }: PropsWithChildren & { headline: string }) => {
    const { playSound, winnerMove, resetGame } = useGameInfoContext();
    if (playSound) {
        winnerMove == Move.X ? playSound(AudioCategory.WINNER_VOCAL_X) : playSound(AudioCategory.WINNER_VOCAL_O);
    }

    winnerMove && playSound && playSound(AudioCategory.WINNER_VOCAL_O);

    return (
        <div>
            <h1 className="displaylarge HeadlineTextAnim txt-center">{headline} </h1>
            {children}
            <button type="button" onClick={resetGame} className="headlinelarge"
            >Replay</button>
        </div>
    )
}

export default GameOver;