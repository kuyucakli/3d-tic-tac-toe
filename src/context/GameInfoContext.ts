import { createContext } from "react";

export const GameInfoContext = createContext<{ winner: number[] | null }>({
    winner: null,
});
