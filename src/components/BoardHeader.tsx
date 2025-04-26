import React from 'react';
import { Move } from '../types/index.dt.ts';
import styles from './Board.module.css';

interface BoardHeaderProps {
    currentMove: Move;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({ currentMove }) => (
    <header className="margin-center">
        <h2 className="headlinesmall">
            Player

            <span className={styles.CurrentPlayerDisplay}>
                <span className={styles.CurrentPlayerDisplayActive}>{Move[currentMove]}
                </span>
                <ul key={Math.random()}>
                    <li>🔥</li>
                    <li>💀</li>
                    <li>🚀</li>
                    <li>🎉</li>
                    <li>😬</li>
                </ul>
            </span>
        </h2>
    </header>
);

export default BoardHeader;