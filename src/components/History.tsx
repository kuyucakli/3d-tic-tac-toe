
import { useGameInfoContext } from "../context/GameInfoContext.tsx";

const History = () => {
    const { moveHistory, setHistoryIndex } = useGameInfoContext();

    return (
        <ul>
            {moveHistory.map((_, i) => (
                <li key={i} onClick={() => setHistoryIndex(i)}>
                    Go to {i == 0 ? "start" : "#" + i}
                </li>
            ))}
        </ul>
    )
}


export default History;