import { useContext } from "react";
import type { Board } from "../types/index.dt";
import CanvasFx from "./CanvasFx";
import SquarePiece from "./SquarePiece";
import styles from "./board.module.css";
import { GameInfoContext } from "../context/GameInfoContext";

const Board = ({ squarePieceRowCount, onMove, historyIndex, moveHistory }: Board) => {

    const winner = useContext(GameInfoContext).winner;

    return (
        <div className={`${styles.Board} margin-center m-v-sm-1 ${winner ? styles.WinnerBoard : ""}`}>
            <CanvasFx />
            <div
                className={`${styles.BoardSurface}`}
                style={{ gridTemplateColumns: `repeat(${squarePieceRowCount}, 1fr)` }}
                onClick={(e) => {

                    if (!(e.target instanceof HTMLDivElement)) {
                        return;
                    }

                    const index = Number(e.target.dataset.index);

                    onMove(index);
                }}
            >
                {moveHistory[historyIndex].map((m, i) => (
                    <SquarePiece key={i} content={m} index={i} className={`${winner?.includes(i) ? styles.Winner : styles.NotWinner}`} />
                ))}
            </div>
            <div className={styles.BoardBlendFilter}></div>
        </div>
    )
}


export default Board;