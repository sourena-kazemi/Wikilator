import { useContext, useState, useEffect } from "react"
import PageContext from "./contexts/PageContext"
import Navbar from "./components/Navbar"
import HomePage from "./components/Pages/Home"
import TranslatePage from "./components/Pages/Translate"

function App() {
  const [page, setPage] = useState<"home" | "translate">("home")
  const changeQueryParams = (page: "translate" | "home") => {
    let queryParams = new URLSearchParams(window.location.search)
    queryParams.set("p", page)
    let newPath = window.location.pathname + "?" + queryParams.toString()
    history.pushState(null, "", newPath)
  }

  useEffect(() => {
    changeQueryParams(page)
  }, [page])

  return (
    <>
      <PageContext.Provider value={{ page, setPage }}>
        <Navbar />
        {page === "translate" ? <TranslatePage /> : <HomePage />}
      </PageContext.Provider>
    </>
  )
}
export default App
