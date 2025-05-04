import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import NavSecondary from '../components/NavSecondary'
import TicTacToe from '../App'
import { GameInfoContextProvider } from '../context/GameInfoContext'


export const Route = createRootRoute({
    component: () => {

        return (
            <GameInfoContextProvider >
                <NavSecondary />
                <Outlet />
                <TicTacToe />
                <TanStackRouterDevtools />
            </GameInfoContextProvider>
        )
    },


    notFoundComponent: () => {
        return <p>This page doesn't exist!</p>
    },
})
