import Image from "next/image";
import Link from "next/link";
import logo from "./../../app/assets/img/logo.svg";
import menuData from "./menuData";
import "./Header.scss";
export default function Header() {
  return (
    <header className="fixed w-full">
      <nav className="w-full px-6 bg-gradient-to-r from-[#002244] to-[#003366]">
        <div className="container mx-auto flex justify-between items-center">
          {/* <!-- Logo --> */}
          <Link href="/" className="flex items-center space-x-2 py-4">
            <Image
              className="dark:invert"
              src={logo}
              alt="lendmesh logo"
              width={180}
              height={38}
              priority
            />
          </Link>

          {/* <!-- Desktop Navigation Links --> */}
          <ul className="hidden md:flex space-x-1 lg:space-x-8 text-white">
            {/* <!-- Menu with Submenu --> */}
            {menuData &&
              menuData.map((menuItem) => (
                <li
                  className={menuItem.submenu ? "relative group" : ""}
                  key={menuItem.id}
                >
                  <Link
                    href={menuItem.path ? menuItem.path : "#"}
                    className="py-6 px-2 hover:text-green-400 transition inline-flex w-full justify-center gap-x-1.5 items-center"
                  >
                    {menuItem.title}
                    {menuItem.submenu && (
                      <svg
                        className="-mr-1 size-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </Link>

                  <div className="absolute hidden group-hover:block bg-white text-black rounded-lg shadow-md w-48 top-full left-0 space-y-2 py-2">
                    {menuItem?.submenu &&
                      menuItem?.submenu.map((subMenuItem) => (
                        <Link
                          href={subMenuItem.path ? subMenuItem.path : "#"}
                          className="block px-4 py-2 hover:bg-[#002144] hover:text-white"
                          key={subMenuItem.id}
                        >
                          {subMenuItem.title}
                        </Link>
                      ))}
                  </div>
                </li>
              ))}
          </ul>

          {/* <!-- Sign Up Button for Desktop --> */}
          <div className="hidden md:block">
            <a
              href="#"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </a>
          </div>

          {/* <!-- Hamburger Button for Mobile --> */}
          <button className="md:hidden text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* <!-- Mobile Menu --> */}
      <div
        id="mobile-menu"
        className="md:hidden hidden bg-[#003366] text-white"
      >
        <ul className="flex flex-col space-y-4 p-6">
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Loan
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Calculator
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              Community
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}