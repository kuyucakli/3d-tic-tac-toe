
import { useGameInfoContext } from "../context/GameInfoContext.tsx";
import { IconWest } from "./Icons.tsx";

const History = () => {
    const { moveHistory, setHistoryIndex, historyIndex } = useGameInfoContext();

    return (
        <ul className="previous-moves-list">
            {moveHistory.map((_, i) => (
                <li key={i} onClick={() => setHistoryIndex(i)} className="labellarge flex-row-v-center gap-sm-2 " >
                    <span className="label">Go to {i == 0 ? "start" : "#" + i}</span>  {i == historyIndex ? <span className="list-im"><IconWest /> </span> : ""}
                </li>
            ))}
        </ul>
    )
}


export default History;