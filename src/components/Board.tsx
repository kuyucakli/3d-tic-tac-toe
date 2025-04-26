import type { Board } from "../types/index.dt";
import CanvasFx from "./CanvasFx";
import SquarePiece from "./SquarePiece";

const Board = ({ squarePieceRowCount, onMove, historyIndex, moveHistory }: Board) => {

    return (
        <div id="board" className="margin-center m-v-sm-1">
            <CanvasFx />
            <div
                id="board-surface"
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
            <div id="board-blend-filter"></div>
        </div>
    )
}


export default Board;