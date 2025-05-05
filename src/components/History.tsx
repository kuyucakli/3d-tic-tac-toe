
import { useGameInfoContext } from "../context/GameInfoContext.tsx";
import { IconWest } from "./Icons.tsx";

const History = () => {
    const { moveHistory, setHistoryIndex, historyIndex } = useGameInfoContext();

    return (
        <ul>
            {moveHistory.map((_, i) => (
                <li key={i} onClick={() => setHistoryIndex(i)} className="labellarge flex-row-v-center gap-sm-2 ">
                    Go to {i == 0 ? "start" : "#" + i} {i == historyIndex ? <IconWest /> : ""}
                </li>
            ))}
        </ul>
    )
}


export default History;