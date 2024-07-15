import React from "react";

function Navbar() {
  return (
    <header className="text-gray-500  body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-black p-2 bg-yellow-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Banker OP</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-black hover:cursor-pointer">First Link</a>
          <a className="mr-5 hover:text-black hover:cursor-pointer">Second Link</a>
        </nav>
        <button disabled className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 disabled:hover:bg-gray-200 transition-colors rounded text-base mt-4 md:mt-0">
          Your Balance: 10000
        </button>
      </div>
    </header>
  );
}

export default Navbar;
