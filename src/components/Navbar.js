/* eslint-disable react/jsx-no-comment-textnodes */

/* eslint-disable @next/next/no-html-link-for-pages */
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white lg:text-2xl lg:font-semibold">
          Your Logo
        </a>
        <div className="text-white flex lg:block">
          <button>Contact</button>
          <button className="lg:mx-5 mx-2">Shop</button>
          <button>About</button>
        </div>
        <div className="space-x-4 flex lg:block">
          <button className="bg-yellow-500  text-white px-4 py-2 rounded-full hover:bg-yellow-400">
            PC Builder
          </button>

          <div className="relative inline-block text-left group">
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-400">
              Categories
            </button>
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 transform scale-0 group-hover:opacity-100 group-hover:scale-100 transition-transform duration-300 ease-in-out">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  CPU / Processor
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Motherboard
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  RAM
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Power Supply Unit
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Storage Device
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Monitor
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Others
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
