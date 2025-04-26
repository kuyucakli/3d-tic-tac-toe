import { Move } from '../types/index.dt.ts';
import PieceX from "../assets/img/piece-x.svg";
import PieceO from "../assets/img/piece-o.svg";
import type { SquarePiece } from "../types/index.dt";

const SquarePiece = ({ content, index }: SquarePiece) => (
    <div className="square-piece" data-index={index}>
        {Move[content] === "X" && <img src={PieceX} alt="X" />}
        {Move[content] === "O" && <img src={PieceO} alt="O" />}
    </div>
)



export default SquarePiece;