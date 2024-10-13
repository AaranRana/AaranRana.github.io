import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved by Aaran Rana, but is this even needed?
        </p>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="/" className="hover:text-gray-400">
                What do people even put in a footer?
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;