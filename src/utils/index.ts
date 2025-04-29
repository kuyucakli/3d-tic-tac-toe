import { Move } from "../types/index.dt";


const checkWinner = (moves: Move[]) => {
    const winnerMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]

    for (const indexes of winnerMoves) {
        const [a, b, c] = indexes;



        if (moves[a] != null && moves[a] == moves[b] && moves[a] == moves[c]) {
            return indexes;
        }
    }

    return null;


}

// Linear interpolation helper
function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t
};

function drawBezierSplit(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, t0: number, t1: number) {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();

    if (t0 === 0 && t1 === 1) {
        ctx.moveTo(x0, y0);
        ctx.quadraticCurveTo(x1, y1, x2, y2);
    } else if (t0 !== t1) {
        // Helper to compute a point on the curve at a given t
        const getPoint = (t: number) => {
            const mt = 1 - t;
            const mt2 = mt * mt;
            const t2 = t * t;
            const a = mt2;
            const b = 2 * mt * t;
            const c = t2;
            return [
                a * x0 + b * x1 + c * x2,
                a * y0 + b * y1 + c * y2
            ];
        };

        const [nx0, ny0] = getPoint(t0);
        const [nx2, ny2] = getPoint(t1);


        // Intermediate control point
        const nx1 = lerp(lerp(x0, x1, t0), lerp(x1, x2, t0), (t1 - t0) / (1 - t0));
        const ny1 = lerp(lerp(y0, y1, t0), lerp(y1, y2, t0), (t1 - t0) / (1 - t0));

        ctx.moveTo(nx0, ny0);
        ctx.quadraticCurveTo(nx1, ny1, nx2, ny2);
    }

    ctx.stroke();
    //ctx.closePath();
}

function drawWinnerStroke(ctx: CanvasRenderingContext2D, points: { x: number, y: number }[]) {

    let reqId: number;
    let lastStepTime = 0;
    let segmentStart = 0;
    let incrementBy = 0.20;
    let segmentIndex = 0;
    const fps = 160;

    points.reverse();
    const alteredPoints = points.map((point, index) => {

        const nextPoint = points[index + 1];

        if (!nextPoint) return null;

        const randomCpMiddle = nextPoint && { x: (point.x + nextPoint.x) / 2, y: nextPoint.y + 20 };

        return { p1x: point.x, p1y: point.y, p2x: randomCpMiddle.x, p2y: randomCpMiddle.y, p3x: nextPoint.x, p3y: nextPoint.y };
    }
    )



    if (!ctx) return;

    const gradient = ctx.createLinearGradient(20, 100, 200, 200);
    gradient.addColorStop(0, '#F69BA5');
    gradient.addColorStop(.3, '#FD1A1E');
    gradient.addColorStop(.5, '#FAFBCF');
    gradient.addColorStop(.7, '#FF1F62');
    gradient.addColorStop(1.0, '#FF1F62');
    ctx.shadowColor = "red";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 10;
    ctx.filter = "blur(4px)";
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 20;
    ctx.lineCap = "round";

    const step = (t: number) => {
        const duration = t - lastStepTime;

        if (duration > 1000 / fps) {
            animate();
            lastStepTime = t;
        }


        reqId = requestAnimationFrame(step);
    }



    const animate = () => {
        const currentSegment = alteredPoints[segmentIndex];

        if (currentSegment) {

            drawBezierSplit(ctx, currentSegment.p1x, currentSegment.p1y, currentSegment.p2x, currentSegment.p2y, currentSegment.p3x, currentSegment.p3y, segmentStart, segmentStart + incrementBy);


            segmentStart += incrementBy;
            segmentStart = parseFloat(segmentStart.toFixed(1));


            if (segmentStart >= 1) {
                segmentStart = 0;
                segmentIndex += 1
            }

        } else {

            cancelAnimationFrame(reqId);
        }



    }

    reqId = requestAnimationFrame(step);



}


export { checkWinner, drawBezierSplit, drawWinnerStroke };