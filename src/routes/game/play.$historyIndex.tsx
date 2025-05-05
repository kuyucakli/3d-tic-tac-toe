import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/game/play/$historyIndex')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/game/play/$historyIndex"!</div>
}
