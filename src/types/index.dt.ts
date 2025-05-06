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
    WINNER_VOCAL_O = "winner_vocal_o",
    WINNER_VOCAL_X = "winner_vocal_x",
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
    winnerMove: Move | null;
    setMoveHistory: (val: Move[][]) => void;
    moveHistory: Move[][];
    setHistoryIndex: (index: number) => void;
    historyIndex: number;
    playSound?: (key: AudioCategory) => void
    resetGame: () => void
    tie: boolean
    currentMove: Move
};

export type { Board, SquarePiece, HistoryProps, GameInfoContextType };
