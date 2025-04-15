"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../app/assets/img/logo.svg";
import menuData from "./menuData";
import "./Header.scss";
import { useEffect, useState } from "react";

export default function Header() {
  // Mobile Menu
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

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
          isScrolled ? 'bg-[#4296EA] shadow-md' : 'bg-transparent'
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
      </nav>

      {/* <!-- Mobile Menu --> */}
      <div
        id="mobile-menu"
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
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition font-semibold px-2 py-1"
            >
              About Us
            </a>
          </li>

          {/* Loan Dropdown */}
          <li className="relative group">
            <button
              type="button"
              className={`mobile-dropdown hover:text-blue-400 transition font-semibold w-full px-2 py-1 rounded-sm text-left ${
                loanOpen ? "opened" : ""
              }`}
              onClick={() => setLoanOpen((prev) => !prev)}
            >
              Loans
              <span className="float-right">
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
              </span>
            </button>
            <ul
              className={`${
                loanOpen ? "block" : "hidden"
              } bg-gray-100 text-[#002144] rounded-lg mt-2 space-y-2 p-4`}
            >
              <li>
                <a href="#" className="block hover:text-blue-400 transition">
                  Home Loan
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-400 transition">
                  Car Loan
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-400 transition">
                  Personal Loan
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-400 transition">
                  Education Loan
                </a>
              </li>
            </ul>
          </li>

          {/* Calculator Dropdown */}
          <li className="relative group">
            <button
              type="button"
              className={`mobile-dropdown hover:text-blue-400 transition font-semibold w-full px-2 py-1 rounded-sm text-left ${
                calculatorOpen ? "opened" : ""
              }`}
              onClick={() => setCalculatorOpen((prev) => !prev)}
            >
              Calculator
              <span className="float-right">
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
              </span>
            </button>
            <ul
              className={`${
                calculatorOpen ? "block" : "hidden"
              } bg-gray-100 text-[#002144] rounded-lg mt-2 space-y-2 p-4`}
            >
              <li>
                <a href="#" className="block hover:text-blue-400 transition">
                  EMI Calculator
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-400 transition">
                  Loan Eligibility
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-blue-400 transition">
                  Interest Calculator
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition font-semibold px-2 py-1"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition font-semibold px-2 py-1"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-400 transition font-semibold px-2 py-1"
            >
              Community
            </a>
          </li>
        </ul>

        <p className="p-6 text-center">
          <a
            href="#"
            className="w-full block bg-[#6BE3A2] text-[#002144] px-6 py-2 rounded-lg shadow-lg hover:text-[#002144] transition text-center"
          >
            Sign Up
          </a>
          <small>
            Already a lendmesh member?{" "}
            <a href="#" className="underline">
              Login
            </a>
          </small>
        </p>
      </div>
    </header>
  );
}
