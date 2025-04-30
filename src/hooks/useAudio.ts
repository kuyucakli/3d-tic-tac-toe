import { useEffect, useRef, useState } from "react";
import { AudioCategory } from "../types/index.dt";


const audioBuffers: Map<string, AudioBuffer> = new Map();


function useAudio(audioFiles: Record<AudioCategory, string>) {

    const [buffersLoaded, setBuffersLoaded] = useState(false);
    const audioContextRef = useRef<AudioContext>(null);

    useEffect(() => {
        if (!audioContextRef.current) {
            audioContextRef.current = new AudioContext();
        }



        const loadBuffers = () => {
            const promises = Object.entries(audioFiles).map(
                ([key, url]) => new Promise(async (resolve) => {
                    try {
                        const res = await fetch(url);

                        if (!res.ok) {
                            throw new Error(`HTTP error! status: ${res.status}`)
                        };

                        const arrayBuffer = await res.arrayBuffer();
                        const audioBuffer = await audioContextRef.current!.decodeAudioData(arrayBuffer);
                        audioBuffers.set(key, audioBuffer);

                        resolve(true);

                    } catch (err) {
                        if (err instanceof Error) {
                            throw new Error(`Error loading or decoding audio: ${key} ${err.message}`);
                        }
                    }
                })
            );

            Promise.all(promises).then(() => {
                setBuffersLoaded(true);
            }).catch(error => {
                console.error("Error loading one or more audio files:", error);
                // Decide how to handle partial or complete loading failure
                // Maybe set loaded to true anyway, but some sounds won't play
                setBuffersLoaded(true);
            });
        }


        loadBuffers();
    });


    const playSoundInternal = (key: string) => {
        if (!audioContextRef.current || !audioBuffers.has(key)) return; // Double check

        // if (audioContext.state === 'suspended') {
        //     audioContext.resume().then(() => {
        //         console.log("AudioContext resumed successfully");
        //         playSoundInternal(key);
        //     }).catch(e => console.error("Error resuming AudioContext", e));
        // }

        const trackSource = audioContextRef.current.createBufferSource();
        trackSource.buffer = audioBuffers.get(key)!; // Get the stored buffer
        trackSource.connect(audioContextRef.current.destination);
        trackSource.start();
    };


    return buffersLoaded && playSoundInternal;



}


export default useAudio;