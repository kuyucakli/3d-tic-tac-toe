export enum Move {
    X,
    O,
}

export enum LocalStorageKey {
    MOVE_HISTORY = "moveHistory",
    HISTORY_INDEX = "historyIndex",
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
    moves: Move[]
}

type SquarePiece = { content: Move, index: number, className: string }

type HistoryProps = { moveHistory: Move[][], onHistoryChange: (index: number) => void }

type GameInfoContextType = {
    winner: number[] | null;
    setMoveHistory: (val: Move[][]) => void;
    moveHistory: Move[][];
    setHistoryIndex: (index: number) => void;
    historyIndex: number;
};

export type { Board, SquarePiece, HistoryProps, GameInfoContextType };
