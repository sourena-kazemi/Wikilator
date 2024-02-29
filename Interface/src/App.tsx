import { useContext, useState } from "react"
import PageContext from "./contexts/PageContext"
import Navbar from "./components/Navbar"
import HomePage from "./components/Pages/Home"
import TranslatePage from "./components/Pages/Translate"

function App() {
  const [page, setPage] = useState<"home" | "translate">("home")
  return (
    <>
      <PageContext.Provider value={{ page, setPage }}>
        <Navbar state="HomePage" />
        {page === "translate" ? <TranslatePage /> : <HomePage />}
      </PageContext.Provider>
    </>
  )
}
export default App
