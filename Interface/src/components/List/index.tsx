import languages from "../../lib/languages"
type promptType = {
  setLanguage: React.Dispatch<React.SetStateAction<string>>
  setList: React.Dispatch<React.SetStateAction<"" | "source" | "translation">>
}
function List({ setLanguage, setList }: promptType) {
  return (
    <ul className="absolute z-50 bg-white rounded-[20px] shadow-[0_0_10px_0] shadow-black/30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll overflow-x-hidden w-[90%] max-w-96 max-h-[80%]">
      {languages.map((language) => (
        <li
          className="m-4 hover:text-purple hover:scale-105"
          onClick={() => {
            setLanguage(language.code)
            setList("")
          }}
        >
          {language.name}
        </li>
      ))}
    </ul>
  )
}
export default List
