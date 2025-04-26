import React from 'react';
import { Move } from '../types/index.dt.ts';

interface BoardHeaderProps {
    currentMove: Move;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({ currentMove }) => (
    <header className="margin-center">
        <h2 className="headlinesmall">
            Player <span style={{ color: "var(--clr-accent-1" }}><span>{Move[currentMove]}</span></span>
        </h2>
    </header>
);

export default BoardHeader;