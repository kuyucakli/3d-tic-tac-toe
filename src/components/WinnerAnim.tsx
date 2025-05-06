import { PropsWithChildren } from "react";
import { AudioCategory, Move } from "../types/index.dt";
import { useGameInfoContext } from "../context/GameInfoContext";

const WinnerAnim = ({ children }: PropsWithChildren) => {
    const { playSound, winnerMove } = useGameInfoContext();
    if (playSound) {
        winnerMove == Move.X ? playSound(AudioCategory.WINNER_VOCAL_X) : playSound(AudioCategory.WINNER_VOCAL_O);
    }

    winnerMove && playSound && playSound(AudioCategory.WINNER_VOCAL_O);

    return (
        <div className="WinnerAnim">
            <h1 className="displaylarge">Winner </h1>
            {children}
        </div>
    )
}

export default WinnerAnim;