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
                ctx.current.fillStyle = "white";
                ctx.current.font = "30px Arial";
                ctx.current.fillText("Hello World", 10, 50);
            }
        }
    }
        , []);


    return (
        <canvas id="canvas-fx" ref={canvasRef} />
    );
}

export default CanvasFx;