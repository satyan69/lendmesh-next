'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "./../../app/assets/img/logo.svg";
import menuData from "./menuData";
import "./Header.scss";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  // Mobile Menu
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed z-10 w-full">
      <nav
        className={`w-full sm:px-3 px-6 transition-colors duration-300 ease-in-out ${
          isScrolled ? 'bg-[#002144] shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="lg:container md:mx-auto md:mx-0 w-full md:max-w-full flex justify-between items-center">
          {/* <!-- Logo --> */}
          <Link
            href="/"
            className="flex items-center space-x-2 py-4 lm-nav-brand"
          >
            <Image
              className="dark:invert"
              src={logo}
              alt="lendmesh logo"
              priority
            />
          </Link>

          {/* <!-- Desktop Navigation Links --> */}
          <ul className="hidden md:flex space-x-1 lg:space-x-8 text-white nav-items-wrap">
            {/* <!-- Menu with Submenu --> */}
            {menuData &&
              menuData.map((menuItem) => (
                <li
                  className={menuItem.submenu ? "relative group" : ""}
                  key={menuItem.id}
                >
                  <Link
                    href={menuItem.path ? menuItem.path : "#"}
                    className="py-6 px-2 hover:text-green-400 transition inline-flex w-full justify-center gap-x-1.5 items-center text-base md:text-sm lg:text-base"
                  >
                    {menuItem.title}
                    {menuItem.submenu && (
                      <svg
                        className="-mr-1 size-5"
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
            <button
              type="button"
              className="bg-[#6BE3A2] text-white px-6 sm:px-3 py-1 sm:py-1 md:py-2 xs:text-xs text-sm rounded-lg shadow-lg hover:bg-blue-600 transition whitespace-nowrap"
            >
              Sign Up
            </button>
          </div>

          {/* <!-- Hamburger Button for Mobile --> */}
          
        </div>
      </nav>

      {/* <!-- Mobile Menu --> */}
      <MobileMenu menuData={menuData} />
      
      
    </header>
  );
}
