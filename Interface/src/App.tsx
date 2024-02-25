import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import HomePage from "./components/Pages/Home"
import TranslatePage from "./components/Pages/Translate"
function App() {
  const [page, setPage] = useState("")
  return (
    <>
      <Navbar state="HomePage" />
      {page === "translate" ? <TranslatePage /> : <HomePage />}
    </>
  )
}
export default App
