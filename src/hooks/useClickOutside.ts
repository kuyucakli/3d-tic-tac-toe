import { RefObject, useEffect } from "react"

const useClickOutside = (ref: RefObject<HTMLElement | null>, callback: () => void) => {


    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, []);
}


export { useClickOutside };