function Navbar({ state }: { state: "HomePage" | "TranslatePage" }) {
  return (
    <nav className="flex justify-between px-4 items-center pt-6 font-bold md:text-lg lg:px-6 lg:pt-8">
      <div className="flex items-center">
        <img src="wikilator.svg" alt="wikilator logo" className="w-8 md:w-10" />
        <a className="font-bold">Wikilator</a>
      </div>
      <div className="flex items-center gap-x-2 sm:gap-x-4 md:gap-x-8">
        <a href="https://github.com/sourena-kazemi/Wikilator"></a>
        <a href="">
          <img src="github.svg" alt="github logo" className="w-6 sm:hidden" />
        </a>
        <a href="https://github.com/sourena-kazemi/Wikilator">About</a>
        <a
          href="https://github.com/sourena-kazemi/Wikilator"
          className="hidden sm:block"
        >
          GitHub
        </a>
        {state === "HomePage" ? (
          <a className="underline cursor-pointer">Translate</a>
        ) : (
          <a className="cursor-pointer">Home</a>
        )}
      </div>
    </nav>
  )
}
export default Navbar
