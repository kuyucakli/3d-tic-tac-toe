import React from 'react';
import { Move } from './App';

interface BoardHeaderProps {
    currentMove: Move;
}

const BoardHeader: React.FC<BoardHeaderProps> = ({ currentMove }) => (
    <header className="margin-center">
        <h2 className="displaysmall">
            Player <span style={{ color: "var(--clr-accent-1" }}>{Move[currentMove]}</span>
        </h2>
    </header>
);

export default BoardHeader;