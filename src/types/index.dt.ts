export enum Move {
    X,
    O,
}

export enum AudioCategory {
    INTRO = "intro",
    WINNER_STROKE = "winner_stroke",
    MAKE_MOVE = "make_move",
    GAME_OVER = "game_over",
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
