import { createContext } from "react"
import { PageContextType } from "../@types/context"
const PageContext = createContext<PageContextType | null>(null)
export default PageContext
