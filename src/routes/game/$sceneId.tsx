import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Dialog from '../../components/Dialog'
import History from '../../components/History';
import { useGameInfoContext } from '../../context/GameInfoContext';
import { AudioCategory } from '../../types/index.dt';
import { useEffect } from 'react';
import GameOver from '../../components/GameOver';
import { FrmSettings } from '../../components/FrmSettings';



export const Route = createFileRoute('/game/$sceneId')({
    component: RouteComponent,
    notFoundComponent: () => {
        return <p>This page doesn't exist!</p>
    },
})

function RouteComponent() {
    const { tie, winner, playSound } = useGameInfoContext();
    const { sceneId } = Route.useParams();
    const navigate = useNavigate();

    useEffect(() => {
        sceneId == "play" ? playSound && playSound(AudioCategory.INTRO) : ""
    }, [sceneId]);

    const handleDialogClose = () => {
        navigate({ to: "/game/$sceneId", params: { sceneId: "play" } });
    }


    return (

        <>

            <Dialog isOpen={sceneId != "play" ? true : false} onClose={handleDialogClose}>
                {sceneId == "info" && <><h2 className="titlelarge">Info</h2>🎮 About This Project


                    <p>This is a modern, responsive take on the classic Tic-Tac-Toe game — built from scratch with a focus on clean architecture, smooth user experience, and engaging interactions.</p>

                    <h2>🛠 Tech Stack</h2>
                    •	React + TypeScript: Built using the Vite React-TS template for lightning-fast development and modern tooling.
                    •	TanStack Router: Handles seamless routing without the bloat — making the app feel snappy and modular.
                    •	Figma: UI and UX were designed in Figma, prioritizing clarity, accessibility, and fun.
                    •	ElevenLabs: Audio feedback is powered by AI-generated voice clips using ElevenLabs.io, adding personality and polish to the gameplay.

                    ✨ Features
                    •	Playful yet minimalistic design
                    •	Voice feedback for key interactions (start, win, draw, etc.)
                    •	Mobile-friendly layout
                    •	Clean codebase for easy customization</>}
                {sceneId == "settings" && <><h2 className="titlelarge">Settings</h2>
                    <FrmSettings />
                </>}
                {sceneId == "history" && <><h2 className="titlelarge">Pevious Moves</h2><History /></>}
            </Dialog>

            {
                tie
                &&
                <Dialog isOpen isModal hasCloseButton={false}>
                    <div>
                        <GameOver headline="Tail!" />
                    </div>
                </Dialog>
            }

            {
                winner
                &&
                <Dialog isOpen isModal hasCloseButton={false} >
                    <GameOver headline="Winner" />
                </Dialog>
            }

        </>
    )
}
