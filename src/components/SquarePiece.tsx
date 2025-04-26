import { Move } from '../types/index.dt.ts';
import PieceX from "../assets/img/piece-x.svg";
import PieceO from "../assets/img/piece-o.svg";
import type { SquarePiece } from "../types/index.dt";
import styles from "./Board.module.css";

const SquarePiece = ({ content, index }: SquarePiece) => (
    <div className={styles.SquarePiece} data-index={index}>
        {Move[content] === "X" && <img src={PieceX} alt="X" />}
        {Move[content] === "O" && <img src={PieceO} alt="O" />}
    </div>
)



export default SquarePiece;