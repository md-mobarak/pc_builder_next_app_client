/* eslint-disable react/jsx-no-comment-textnodes */
// import { useSession } from "next-auth/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

/* eslint-disable @next/next/no-html-link-for-pages */
const Navbar = () => {
  const { data: session } = useSession();
  const route = useRouter();
  // console.log(session);
  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white lg:text-2xl lg:font-semibold">
          Your Logo
        </Link>
        <div className="text-white flex lg:block">
          <button>Contact</button>
          <button className="lg:mx-5 mx-2">Shop</button>
          <button>About</button>
        </div>
        <div className="lg:space-x-4 lg:flex  items-center">
          <Link href="/pcBuilder">
            <button className="bg-yellow-500  text-white px-4 py-2 rounded-full hover:bg-yellow-400">
              PC Builder
            </button>
          </Link>
          {session?.user ? (
            <button
              onClick={() => signOut()}
              className="bg-neutral  text-white px-4 py-2 rounded-full "
            >
              LogOut
            </button>
          ) : (
            <Link href="/login">
              <button className="bg-neutral  text-white px-4 py-2 rounded-full ">
                Login
              </button>
            </Link>
          )}
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
                <Link
                  href="details/CPU"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  CPU / Processor
                </Link>
                <Link
                  href="details/motherboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Motherboard
                </Link>
                <Link
                  href="details/ram"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  RAM
                </Link>
                <Link
                  href="details/Power supply unit"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Power Supply Unit
                </Link>
                <Link
                  href="details/storage"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Storage Device
                </Link>
                <Link
                  href="details/monitor"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Monitor
                </Link>
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
