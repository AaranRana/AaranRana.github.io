const Header = () => {
  return (
    <header className="bg-gradient-to-br from-emerald-300 via-teal-400 to-blue-700 text-black w-auto h-20 shadow-md">
      <div className="container h-full mx-auto flex justify-between items-center">
      <button className="group relative min-h-[50px] w-40 py-3 overflow-hidden border rounded-br-3xl rounded-tl-3xl border-emerald-900 bg-white text-emerald-900 transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-emerald-900 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-emerald-600 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
        <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-emerald-800 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-emerald-700 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
        <a href="/" className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white text-xl font-extrabold">Aaran Rana</a>
      </button>
        <nav>
          <ul className="flex space-x-20" >
          <li className="text-black font-semibold hover:text-white no-underline relative py-1 px-3 before:content-[''] before:bg-black before:absolute before:left-0 before:bottom-1 before:w-full before:h-1 before:transition-all before:duration-500 before:hover:bottom-0 before:hover:h-full">
              <a href="/about" className="relative">
                About Me
              </a>
            </li>
            <li className="text-black font-semibold hover:text-white no-underline relative py-1 px-3 before:content-[''] before:bg-black before:absolute before:left-0 before:bottom-1 before:w-full before:h-1 before:transition-all before:duration-500 before:hover:bottom-0 before:hover:h-full">
              <a href="/bread" className="relative">
                Bread Slices
              </a>
            </li>
            <li className="text-black font-semibold hover:text-white no-underline relative py-1 px-3 before:content-[''] before:bg-black before:absolute before:left-0 before:bottom-1 before:w-full before:h-1 before:transition-all before:duration-500 before:hover:bottom-0 before:hover:h-full">
              <a href="/portfolio" className="relative">
                Portfolio
              </a>
            </li>
            <li className="text-black font-semibold hover:text-white no-underline relative py-1 px-3 before:content-[''] before:bg-black before:absolute before:left-0 before:bottom-1 before:w-full before:h-1 before:transition-all before:duration-500 before:hover:bottom-0 before:hover:h-full">
              <a href="/contact" className="relative">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;