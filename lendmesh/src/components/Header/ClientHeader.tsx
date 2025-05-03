"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Header.scss";

export default function ClientHeader({ menuData }: { menuData: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (id: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <nav
      className={`w-full sm:px-3 px-6 transition-colors duration-300 ease-in-out ${
        isScrolled ? "bg-[#002144] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="lg:container md:mx-auto md:mx-0 w-full md:max-w-full flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 py-4 lm-nav-brand"
        >
          <Image
            className="dark:invert"
            src={"/images/logo.svg"}
            width={150}
            height={30}
            alt="Lendmesh"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-1 lg:space-x-8 text-white nav-items-wrap">
          {menuData.map((menuItem) => (
            <li
              key={menuItem.id}
              className={menuItem.submenu ? "relative group" : ""}
            >
              <Link
                href={menuItem.path ?? "#"}
                className="py-6 px-2 hover:text-green-400 transition inline-flex w-full justify-center gap-x-1.5 items-center text-base md:text-sm lg:text-base"
              >
                {menuItem.title}
                {menuItem.submenu && (
                  <svg
                    className="-mr-1 size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06Z"
                    />
                  </svg>
                )}
              </Link>
              {menuItem.submenu && (
                <div className="absolute hidden group-hover:block bg-white text-black rounded-lg shadow-md w-48 top-full left-0 space-y-2 py-2">
                  {menuItem.submenu.map((subItem: any) => (
                    <Link
                      key={subItem.id}
                      href={subItem.path ?? "#"}
                      className="block px-4 py-2 hover:bg-[#002144] hover:text-white"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Sign up btn */}
        <div className="hidden md:block">
          <button className="bg-[#6BE3A2] text-white px-4 lg:px-6 py-2 text-sm rounded-[8px] shadow-lg hover:bg-[#6BE3A2] transition whitespace-nowrap cursor-pointer">
            Sign Up
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white text-[#002144] fixed inset-0 z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-5xl text-[#002144] hover:text-[#002144] transition cursor-pointer"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-6">
          {menuData.map((menuItem) => (
            <li key={menuItem.id}>
              {!menuItem.submenu ? (
                <Link
                  href={menuItem.path ?? "#"}
                  className="hover:text-blue-400 transition font-semibold px-2 py-1 block"
                  onClick={() => setIsOpen(false)}
                >
                  {menuItem.title}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleSubmenu(menuItem.id)}
                    className="hover:text-blue-400 transition font-semibold w-full px-2 py-1 flex justify-between items-center"
                  >
                    {menuItem.title}
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06Z"
                      />
                    </svg>
                  </button>
                  <ul
                    className={`mt-2 space-y-2 p-4 bg-gray-100 text-[#002144] rounded-lg ${
                      openSubmenus[menuItem.id] ? "block" : "hidden"
                    }`}
                  >
                    {menuItem.submenu.map((subItem: any) => (
                      <li key={subItem.id}>
                        <Link
                          href={subItem.path ?? "#"}
                          className="block hover:text-blue-400 transition"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        <div className="p-6 text-center">
          <a
            href="#"
            className="w-full block bg-[#6BE3A2] text-[#002144] px-6 py-2 rounded-lg shadow-lg hover:text-[#002144]"
          >
            Sign Up
          </a>
          <small>
            Already a lendmesh member?{" "}
            <a href="#" className="underline">
              Login
            </a>
          </small>
        </div>
      </div>
    </nav>
  );
}
