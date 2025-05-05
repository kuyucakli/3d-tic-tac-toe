import { useEffect, useRef } from "react";
import { useGameInfoContext } from "../context/GameInfoContext";

import { drawWinnerStroke } from "../utils";
import { AudioCategory } from "../types/index.dt";



const CanvasFx = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctx = useRef<CanvasRenderingContext2D | null>(null);
    const winner = useGameInfoContext().winner;
    const { playSound } = useGameInfoContext();

    useEffect(() => {

        if (winner && ctx.current) {
            const [a, b, c] = winner;
            const centerA = squarePieceCenter(a);
            const centerB = squarePieceCenter(b);
            const centerC = squarePieceCenter(c);

            playSound && playSound(AudioCategory.WINNER_STROKE);
            drawWinnerStroke(ctx.current, [centerA, centerB, centerC]);

        }
    }, [winner]);



    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = 480;
            canvas.height = 480;
            ctx.current = canvas.getContext("2d");



        }
    }
        , []);


    return (
        <canvas id="canvas-fx" ref={canvasRef} />
    );
}


function squarePieceCenter(index: number) {
    const row = Math.floor(index / 3);
    const col = index % 3;

    const x = col * 160 + 80;
    const y = row * 160 + 80;

    return { x, y };
}

export default CanvasFx;