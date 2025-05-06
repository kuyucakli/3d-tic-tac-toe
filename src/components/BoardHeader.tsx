import React from 'react';
import { Move } from '../types/index.dt.ts';
import styles from './Board.module.css';
import { useGameInfoContext } from '../context/GameInfoContext.tsx';

interface BoardHeaderProps {
    currentMove: Move;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({ currentMove }) => {
    const { winner, tie } = useGameInfoContext();
    return (

        <header className={`${styles.BoardHeader} margin-center`}>
            {
                winner || tie
                    ?

                    null

                    :
                    (
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
                    )
            }
        </header>
    )
};

export default BoardHeader;