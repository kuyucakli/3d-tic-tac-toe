export enum Move {
    X,
    O,
}

type Board = {
    squarePieceRowCount: number
    onMove: () => null
}

type SquarePiece = { content: Move, index: number }




export type { Board, SquarePiece };
