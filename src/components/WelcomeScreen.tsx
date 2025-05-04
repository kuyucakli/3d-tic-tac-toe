import { useRef, useState } from "react";
import styles from "./WelcomeScreen.module.css"
import useAudio from "../hooks/useAudio";
import { Navigate, useNavigate } from "@tanstack/react-router";


const WelcomeScreen = () => {
    const elRef = useRef(null);
    const [scene, setScene] = useState("In");
    const navigate = useNavigate();

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

                setScene("Out")
            }}>Play with sound</button>
        </div>
    )
}

export default WelcomeScreen;