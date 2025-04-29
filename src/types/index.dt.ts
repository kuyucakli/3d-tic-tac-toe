export enum Move {
    X,
    O,
}

type Board = {
    squarePieceRowCount?: number
    onMove: (index: number) => void
    historyIndex: number
    moveHistory: Move[][]
}

type SquarePiece = { content: Move, index: number, className: string }

type HistoryProps = { moveHistory: Move[][], onHistoryChange: (index: number) => void }

export type { Board, SquarePiece, HistoryProps };
