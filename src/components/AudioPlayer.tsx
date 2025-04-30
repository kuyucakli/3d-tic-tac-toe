import { useRef } from "react"
import useAudio from "../hooks/useAudio";


export default function AudioPlayer() {
    const audioElementRef = useRef<HTMLAudioElement>(null);
    const playSound = useAudio({ intro: "../assets/audio/01.mp3", make_move: "../assets/audio/02.mp3", winner_stroke: "../assets/audio/03.mp3", game_over: "../assets/audio/04.mp3" });


    return (
        <>
            <audio ref={audioElementRef} />
        </>
    )
}