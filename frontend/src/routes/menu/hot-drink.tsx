import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu/hot-drink')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/menu/hot-drink"!</div>
}