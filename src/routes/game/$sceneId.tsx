import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Dialog from '../../components/Dialog'
import History from '../../components/History';


export const Route = createFileRoute('/game/$sceneId')({
    component: RouteComponent,
    notFoundComponent: () => {
        return <p>This page doesn't exist!</p>
    },
})

function RouteComponent() {
    const { sceneId } = Route.useParams();
    const navigate = useNavigate();

    const handleDialogClose = () => {
        navigate({ to: "/game/$sceneId", params: { sceneId: "play" } });
    }


    return (

        <Dialog isOpen={sceneId != "play" ? true : false} onClose={handleDialogClose}>
            {sceneId == "info" && "Info"}
            {sceneId == "settings" && "Settings"}
            {sceneId == "history" && <History />}
        </Dialog>

    )
}
