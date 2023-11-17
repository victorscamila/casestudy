import { useState } from "react"
import ListAllCards from "./components/ListAllCards"
import NewCardForm from "./components/NewCardForm"

enum Screens {
  home = 'home',
  list = 'list',
  create = 'create',
  single = 'single'
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screens>(Screens.home)
  return (
    <>
      <main>
        {currentScreen === Screens.home ? (
          <>
            <h1> tipo black storys</h1>
            <nav>
              <button onClick={() => setCurrentScreen(Screens.create)}>Criar nova carta</button>
              <button>Puxar carta aleatoria</button>
              <button onClick={() => setCurrentScreen(Screens.list)}>lista</button>
            </nav>
          </>
        ) : currentScreen === Screens.list ? (
          <>
            <ListAllCards />
            <button onClick={() => setCurrentScreen(Screens.home)}>voltar pra home</button>
          </>
        ) : currentScreen === Screens.create ? (
          <>
            <h1> Criar nova carta</h1>
            <NewCardForm />
            <button onClick={() => setCurrentScreen(Screens.home)}>voltar pra home</button>
          </>
        ) : <></>}
      </main>
    </>
  )
}

export default App
