const Header = () => {
  return (
    <header className="bg-orange-300 text-amber-950 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-extrabold">Aaran Rana</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/bread" className="hover:text-gray-200">
                Slice of Bread
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-gray-200">
                The Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-200">
                Contact Me!
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;