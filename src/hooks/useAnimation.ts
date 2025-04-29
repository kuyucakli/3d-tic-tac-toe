import { useEffect, useRef } from "react"

export const useAnimationFrame = (animationHandler: (deltaTime: number) => unknown, fps = 24, run = true) => {
    const animationId = useRef(0);
    const lastFrameTime = useRef(0);

    const animate = (currentTime: number) => {
        const deltaTime = currentTime - lastFrameTime.current;
        if (deltaTime > 1000 / fps) {
            animationHandler(deltaTime);
            lastFrameTime.current = currentTime;
        }
        animationId.current = requestAnimationFrame(animate);
    }



    useEffect(() => {
        if (!run) {
            cancelAnimationFrame(animationId.current);
            return;
        }

        animationId.current = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationId.current);
        }
    }, [run])


}