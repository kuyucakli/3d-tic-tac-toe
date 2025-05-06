import { useEffect, useRef, useState } from "react";
import styles from "./WelcomeScreen.module.css"
import { useNavigate } from "@tanstack/react-router";
import { useGameInfoContext } from "../context/GameInfoContext";


const WelcomeScreen = () => {

    const elRef = useRef(null);
    const [scene, setScene] = useState("In");
    const navigate = useNavigate();
    const { resetGame, winner, tie } = useGameInfoContext();

    useEffect(() => {
        if (winner || tie) resetGame();

    }, [])

    return (
        <div ref={elRef} id="welcome-screen" className={`${styles.WelcomeScreen} full-screen ${styles["WelcomeScreen" + scene]}`} >
            <div className={styles.WelcomeScreenCurtain} onAnimationEnd={(e) => {
                const animName = e.animationName;


                if (animName == styles["screen-out"]) {
                    navigate({ to: "/game/$sceneId", params: { sceneId: "play" } });
                }
            }}></div>
            <h1 className="displaylarge">Tictactoe</h1>
            <button type="button" onClick={() => {
                setScene("Out");
            }}>Play with sound</button>
        </div>
    )
}

export default WelcomeScreen;