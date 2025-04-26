import type { Board } from "../types/index.dt";
import CanvasFx from "./CanvasFx";
import SquarePiece from "./SquarePiece";
import styles from "./board.module.css";

const Board = ({ squarePieceRowCount, onMove, historyIndex, moveHistory }: Board) => {

    return (
        <div className={`${styles.Board} margin-center m-v-sm-1`}>
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
                    <SquarePiece key={i} content={m} index={i} />
                ))}
            </div>
            <div className={styles.BoardBlendFilter}></div>
        </div>
    )
}


export default Board;