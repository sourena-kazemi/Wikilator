import Link from "../../Link"
function HomePage() {
  return (
    <>
      <main className="font-bold mt-24 sm:mt-32 md:mt-40 lg:mt-48 mx-auto">
        <h1 className="text-3xl text-center leading-[60px] md:text-4xl md:leading-[70px] lg:text-5xl lg:leading-[80px] xl:text-6xl xl:leading-[90px] mx-2">
          A translator for all{" "}
          <span className="inline-block">
            <img
              src="portrait1.jpg"
              alt="portrait of a woman smiling"
              className="w-12 rounded-full aspect-square object-cover inline lg:w-16"
            />
            <img
              src="portrait2.jpg"
              alt="portrait of a man smiling"
              className="w-12 rounded-full aspect-square object-cover -ml-3 inline lg:w-16"
            />
            <img
              src="portrait3.jpg"
              alt="portrait of a man smiling"
              className="w-12 rounded-full aspect-square object-cover -ml-3 inline lg:w-16 "
            />
          </span>{" "}
          the learners <br /> Powered by{" "}
          <img
            src="wikipedia.png"
            alt="wikipedia logo"
            className="w-12 inline lg:w-16"
          />{" "}
          <span className="relative inline-block before:absolute before:w-full before:h-2 before:bg-purple before:bottom-[15px] before:left-0 before:-z-10">
            Wikipedia
          </span>
        </h1>
        <div className="flex flex-col items-center text-xl mt-12 space-y-4 xl:text-2xl xl:space-y-6">
          <Link
            className="bg-purple px-6 py-2 rounded-[20px] text-white lg:px-8 lg:py-2"
            page="translate"
          >
            Start Now
          </Link>
          <a
            href="https://github.com/sourena-kazemi/Wikilator"
            className="underline"
          >
            We are open-source
          </a>
        </div>
      </main>
    </>
  )
}
export default HomePage
