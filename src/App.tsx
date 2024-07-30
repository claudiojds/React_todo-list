import { Header } from "./components/header/index"
import { useSaveTodos } from "./hook/useSaveTodos"
import styles from './style/App.module.css'

const App = () => {
  // Monitorando all Changes on todos and save in localStorage
  useSaveTodos()

  return (
    <div className={styles.container}>
      <header>
        <Header/>
      </header>
    </div>
  )
}

export default App
