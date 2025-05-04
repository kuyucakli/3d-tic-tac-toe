import { createFileRoute } from '@tanstack/react-router'
import WelcomeScreen from '../components/WelcomeScreen'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (


        <WelcomeScreen />

    )
}