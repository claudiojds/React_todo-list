import { useSaveTodos } from "./hook/useSaveTodos"

const App = () => {
  // Monitorando all Changes on todos and save in localStorage
  useSaveTodos()

  return (
    <div>

    </div>
  )
}

export default App
