import { useEffect, useRef } from "react";

const CanvasFx = () => {


    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctx = useRef<CanvasRenderingContext2D | null>(null);


    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = 480;
            canvas.height = 480;
            ctx.current = canvas.getContext("2d");

            if (ctx.current) {
                ctx.current.beginPath();
                ctx.current.moveTo(10, 100);
                ctx.current.quadraticCurveTo(250, 170, 230, 20);
                ctx.current.stroke();
            }
        }
    }
        , []);


    return (
        <canvas id="canvas-fx" ref={canvasRef} />
    );
}

export default CanvasFx;