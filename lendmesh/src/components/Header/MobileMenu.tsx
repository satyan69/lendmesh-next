"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu(props: any) {
    const { menuData } = props;
      // Mobile Menu
      const [isOpen, setIsOpen] = useState(false);
      const [loanOpen, setLoanOpen] = useState(false);
      const [calculatorOpen, setCalculatorOpen] = useState(false);
      const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
      };
    return (
      <>
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
            {menuData &&
              menuData.map((menuItem: any) => (

                <li
                  className={menuItem.submenu ? "relative group" : ""}
                  key={menuItem.id}
                >
                  {!menuItem.submenu && <Link
                   href={menuItem.path ? menuItem.path : "#"}
                    className="hover:text-blue-400 transition font-semibold px-2 py-1"
                  >
                    {menuItem.title}
                  </Link>}
                  {menuItem.submenu && (
                    <>
                      <button
                        type="button"
                        className={`mobile-dropdown hover:text-blue-400 transition font-semibold w-full px-2 py-1 rounded-sm text-left ${
                          loanOpen ? "opened" : ""
                        }`}
                        onClick={() => setLoanOpen((prev) => !prev)}
                      >
                        <Link
                          href="#"
                          className="hover:text-blue-400 transition font-semibold px-2 py-1"
                        >
                          {menuItem.title}
                        </Link>
                        <span className="float-right">
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
                        </span>
                      </button>
                      <ul
                        className={`${
                          calculatorOpen ? "block" : "hidden"
                        } bg-gray-100 text-[#002144] rounded-lg mt-2 space-y-2 p-4`}
                      >
                        <li>
                          <a
                            href="#"
                            className="block hover:text-blue-400 transition"
                          >
                            EMI Calculator
                          </a>
                        </li>
                      </ul>
                    </>
                  )}
                </li>
              ))}
            {/* Calculator Dropdown */}
            <li>
              <Link
                href="#"
                className="hover:text-blue-400 transition font-semibold px-2 py-1"
              >
                Home
              </Link>
            </li>
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
      </>
    );
}