import { useState } from "react"
import List from "../../List"
function TranslatePage() {
  const [sourceLanguage, setSourceLanguage] = useState<string>("en")
  const [translationLanguage, setTranslationLanguage] = useState<string>("fr")
  const [visibleList, setVisibleList] = useState<"source" | "translation" | "">(
    ""
  )
  const capitalize = (input: string) =>
    input.charAt(0).toUpperCase() + input.slice(1)
  return (
    <>
      <main className="font-bold mt-24 sm:mt-32 md:mt-40 lg:mt-48 mx-auto">
        <div className="flex justify-center gap-6 lg:text-lg text-center">
          <p
            className="text-black/50 w-24 cursor-pointer"
            onClick={() => setVisibleList("source")}
          >
            From
            <span className="ml-2">{capitalize(sourceLanguage)}</span>
          </p>
          <img
            src="arrow-left-right.svg"
            alt="swap language"
            className="cursor-pointer"
          />
          <p
            className="text-black/50 w-24 cursor-pointer"
            onClick={() => setVisibleList("translation")}
          >
            To
            <span className="ml-2">{capitalize(translationLanguage)}</span>
          </p>
          {visibleList === "source" ? (
            <>
              <div
                className="absolute z-40 top-0 left-0 w-full h-full"
                onClick={() => setVisibleList("")}
              ></div>
              <List setLanguage={setSourceLanguage} setList={setVisibleList} />
            </>
          ) : visibleList === "translation" ? (
            <>
              <div
                className="absolute z-40 top-0 left-0 w-full h-full"
                onClick={() => setVisibleList("")}
              ></div>
              <List
                setLanguage={setTranslationLanguage}
                setList={setVisibleList}
              />
            </>
          ) : null}
        </div>
        <div className="text-2xl mx-2 mt-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:w-3/4 lg:mx-auto lg:text-3xl">
          <textarea className="resize-none max-w-lg w-full h-40 rounded-[20px] shadow-[0_0_10px_0] shadow-black/30 p-4 md:max-w-xl lg:h-60 lg:p-8 outline-none lg:max-w-none"></textarea>
          <textarea
            className="resize-none max-w-lg w-full h-40 rounded-[20px] shadow-[0_0_10px_0] shadow-black/30 p-4 bg-black/5 placeholder:text-black md:max-w-xl lg:h-60 lg:p-8 outline-none lg:max-w-none"
            placeholder="Translation"
            disabled
          ></textarea>
        </div>
      </main>
    </>
  )
}
export default TranslatePage
