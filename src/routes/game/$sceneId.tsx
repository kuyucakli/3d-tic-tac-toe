import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Dialog from '../../components/Dialog'
import History from '../../components/History';
import { useGameInfoContext } from '../../context/GameInfoContext';
import WinnerAnim from '../../components/WinnerAnim';
import { AudioCategory } from '../../types/index.dt';
import { useEffect } from 'react';



export const Route = createFileRoute('/game/$sceneId')({
    component: RouteComponent,
    notFoundComponent: () => {
        return <p>This page doesn't exist!</p>
    },
})

function RouteComponent() {
    const { resetGame, tie, winner, playSound } = useGameInfoContext();
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
                {sceneId == "info" && <><h2 className="titlelarge">Info</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, amet!</p></>}
                {sceneId == "settings" && <><h2 className="titlelarge">Settings</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, amet!</p></>}
                {sceneId == "history" && <><h2 className="titlelarge">Move History</h2><History /></>}
            </Dialog>

            {
                tie
                &&
                <Dialog isOpen isModal hasCloseButton={false}>
                    <div>
                        <h1 className="displaylarge HeadlineTextAnim txt-center">Tie!</h1>
                        <button type="button" className="headlinelarge" onClick={resetGame}>Replay</button>
                    </div>
                </Dialog>
            }

            {
                winner
                &&
                <Dialog isOpen isModal hasCloseButton={false} >
                    <WinnerAnim >
                        <button type="button" onClick={resetGame} className="headlinelarge"
                        >Replay</button>
                    </WinnerAnim>
                </Dialog>
            }

        </>
    )
}
