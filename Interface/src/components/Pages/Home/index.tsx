function HomePage() {
  const handleClick = (page: "translate" | "home") => {
    let queryParams = new URLSearchParams(window.location.search)
    queryParams.set("p", page)
    let newPath = window.location.pathname + "?" + queryParams.toString()
    history.pushState(null, "", newPath)
  }
  return (
    <>
      <main className="font-bold mt-24 sm:mt-32 md:mt-40 lg:mt-48 max-w-screen-lg mx-auto">
        <h1 className="text-3xl text-center leading-[60px] md:text-4xl md:leading-[60px] lg:text-5xl lg:leading-[60px]">
          A translator for all{" "}
          <span className="inline-block">
            <img
              src="portrait1.jpg"
              alt="portrait of a woman smiling"
              className="w-10 rounded-full aspect-square object-cover inline lg:w-14"
            />
            <img
              src="portrait2.jpg"
              alt="portrait of a man smiling"
              className="w-10 rounded-full aspect-square object-cover -ml-3 inline lg:w-14"
            />
            <img
              src="portrait3.jpg"
              alt="portrait of a man smiling"
              className="w-10 rounded-full aspect-square object-cover -ml-3 inline lg:w-14"
            />
          </span>{" "}
          the learners <br /> Powered by{" "}
          <img
            src="wikipedia.png"
            alt="wikipedia logo"
            className="w-10 inline lg:w-14"
          />{" "}
          <span className="relative inline-block before:absolute before:w-full before:h-2 before:bg-purple before:bottom-[15px] before:left-0 before:-z-10">
            Wikipedia
          </span>
        </h1>
        <div className="flex flex-col items-center text-xl mt-12 space-y-4">
          <button
            className="bg-purple px-6 py-2 rounded-[20px] text-white lg:px-8 lg:py-2"
            onClick={() => handleClick("translate")}
          >
            Start Now
          </button>
          <a
            href="https://github.com/sourena-kazemi/Wikilator"
            className="underline"
          >
            We are open-source
          </a>
        </div>
      </main>
      {/* <Rings /> */}
    </>
  )
}
function Rings() {
  let basicStyle =
    "border-4 border-purple/5 rounded-full aspect-square absolute left-1/2 -translate-x-1/2 -z-20"
  return (
    <>
      <div
        className={`${basicStyle} -bottom-1/3 md:-bottom:1/4 w-[600px] md:w-[650px]`}
      ></div>
      <div
        className={`${basicStyle} -bottom-1/3 md:-bottom:1/4 w-[700px] md:w-[750px]`}
      ></div>
      <div
        className={`${basicStyle} -bottom-1/3 md:-bottom:1/4 w-[800px] md:w-[850px]`}
      ></div>
      <div
        className={`${basicStyle} -bottom-1/3 md:-bottom:1/4 w-[900px] md:w-[950px]`}
      ></div>
    </>
  )
}
export default HomePage
