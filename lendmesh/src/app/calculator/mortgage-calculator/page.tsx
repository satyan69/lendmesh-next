import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MortgageCalculator() {
  return (
    <>
      <div className="bg-[#002144] page-banner-1">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center  text-white text-center py-16 px-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold">
            Mortgage Calculator
          </h2>
          <p className="mt-8 text-l sm:text-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </section>
      </div>
      <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col py-16 px-5">
        <div className="min-h-screen bg-[#F9FAFB]">
          <div className="grid grid-cols-1 gap-6">
            {/* <!-- Left Sidebar Inputs --> */}
            <div className="bg-white p-6 rounded-[8px] shadow col-span-1 space-y-4 border-gray">
              <h3 className="text-xl font-bold mb-4">
                Mortgage Calculator &nbsp;
                <span className="text-gray-400 cursor-help" title="Help text">
                  &#9432;
                </span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div className="flex flex-col justify-between">
                  <label htmlFor="loanAmount" className="block font-medium">
                    Loan Amount
                  </label>
                  <input
                    id="loanAmount"
                    type="number"
                    value="8751"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="downPayment" className="block font-medium">
                    Down Payment
                  </label>
                  <input
                    id="downPayment"
                    type="number"
                    value="4"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="percentage" className="block font-medium">
                    Percentage
                  </label>
                  <input
                    id="percentage"
                    type="number"
                    value="3199"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="loanTerm" className="block font-medium">
                    Loan Term (Years)
                  </label>
                  <select
                    id="loanTerm"
                    className="w-full border rounded px-3 py-2 mt-1"
                  >
                    <option>20 years</option>
                    <option>20 years</option>
                    <option>20 years</option>
                  </select>
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="interestRate" className="block font-medium">
                    Interest Rate %
                  </label>
                  <input
                    id="interestRate"
                    type="number"
                    value="10000"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="firstPaymentDate"
                    className="block font-medium"
                  >
                    First Payment Date
                  </label>
                  <input
                    id="firstPaymentDate"
                    type="number"
                    value="6.25"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="extraPayment" className="block font-medium">
                    Extra Payment
                  </label>
                  <input
                    id="extraPayment"
                    type="number"
                    value="30"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Right Main Content --> */}
            <div className="space-y-6 rounded-lg shadow text-center border-gray p-5">
              {/* <!-- Charts Section --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <!-- Home Affordability --> */}
                <button className="bg-[#002144] text-white  px-2 py-3 rounded-lg shadow text-center border-[#002144] cursor-pointer">
                  Monthly Breakup
                </button>

                {/* <!-- Income vs Expense --> */}
                <button className="bg-white px-2 py-3 rounded-lg shadow text-center border-gray cursor-pointer">
                  Amortization &nbsp;{" "}
                  <span className="text-gray-400 cursor-help" title="Help text">
                    &#9432;
                  </span>
                </button>
              </div>
              {/*  */}
              {/* <!-- Monthly Breakup --> */}
              {/*  */}
              <div className="bg-white p-6 rounded-lg shadow border-gray">
                <h3 className="text-xl font-bold mb-4">Best Loan Options</h3>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* <!-- Left Chart Section --> */}
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold mb-4">
                      Monthly Payment Distribution
                    </h2>
                    <div className="relative w-64 h-64">
                      {/* <!-- Outer Donut Circle --> */}
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        {/* <!-- Full circle base --> */}
                        <path
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3.8"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* <!-- Segments --> */}
                        <path
                          fill="none"
                          stroke="#06b6d4"
                          strokeWidth="3.8"
                          strokeDasharray="13,87"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="3.8"
                          strokeDasharray="10,90"
                          strokeDashoffset="-13"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          fill="none"
                          stroke="#a855f7"
                          strokeWidth="3.8"
                          strokeDasharray="7,93"
                          strokeDashoffset="-23"
                          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        {/* <!-- Add more segments as needed --> */}
                      </svg>
                      {/* <!-- Inner Circle --> */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <p className="text-gray-500">Total monthly payment</p>
                        <p className="text-2xl font-bold">$16,362</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right Breakdown Section --> */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        Total monthly payment =
                      </span>
                      <span className="text-2xl font-bold">$16,362</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                        <span>Principal & interest</span>
                      </div>
                      <span className="font-semibold">$2,244</span>
                    </div>
                    <div className="space-y-3 border-t border-gray-500 pt-3">
                      {/* <!-- Item --> */}
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="propertyTax"
                          className="flex items-center gap-2"
                        >
                          <span className="w-3 h-3 rounded-full bg-green-400"></span>
                          <span>Property tax</span>
                        </label>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">+</span>
                          <input
                            id="propertyTax"
                            type="number"
                            value="268"
                            className="w-20 text-right border border-gray-300 rounded px-2 py-1"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="homeInsurance"
                          className="flex items-center gap-2"
                        >
                          <span className="w-3 h-3 rounded-full bg-purple-400"></span>
                          <span>Homeowner's insurance</span>
                        </label>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">+</span>
                          <input
                            id="homeInsurance"
                            type="number"
                            value="150"
                            className="w-20 text-right border border-gray-300 rounded px-2 py-1"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="pmi"
                          className="flex items-center gap-2"
                        >
                          <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                          <span>PMI</span>
                        </label>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">+</span>
                          <input
                            id="pmi"
                            type="number"
                            value="13600"
                            className="w-20 text-right border border-gray-300 rounded px-2 py-1"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="hoaFees"
                          className="flex items-center gap-2"
                        >
                          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                          <span>HOA fees</span>
                        </label>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">+</span>
                          <input
                            id="hoaFees"
                            type="number"
                            value="100"
                            className="w-20 text-right border border-gray-300 rounded px-2 py-1"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="others"
                          className="flex items-center gap-2"
                        >
                          <span className="w-3 h-3 rounded-full bg-blue-300"></span>
                          <span>Others</span>
                        </label>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">+</span>
                          <input
                            id="others"
                            type="number"
                            value="0"
                            className="w-20 text-right border border-gray-300 rounded px-2 py-1"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="extraPayment"
                          className="flex items-center gap-2"
                        >
                          <span className="w-3 h-3 rounded-full bg-pink-400"></span>
                          <span>Extra Payment</span>
                        </label>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-400">+</span>
                          <input
                            id="extraPayment"
                            type="number"
                            value="0"
                            className="w-20 text-right border border-gray-300 rounded px-2 py-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              {/* <!-- Amortization --> */}
              {/*  */}
              <div className="bg-white p-6 rounded-lg shadow border-gray">
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
                  <div>
                    <p>Loan amount</p>
                    <p className="text-xl font-bold">$340,000</p>
                  </div>
                  <div>
                    <p>Total interest paid</p>
                    <p className="text-xl font-bold">$198,524</p>
                  </div>
                  <div>
                    <p>Total cost of loan</p>
                    <p className="text-xl font-bold">$538,524</p>
                  </div>
                  <div>
                    <p>Payoff date</p>
                    <p className="text-xl font-bold">Oct 2044</p>
                  </div>
                </div>
                <h1 className="text-3xl font-bold">Line Graph Comes here</h1>
                {/*  */}
                {/*  */}
                <br />
                <hr />
                <br />
                {/*  */}
                <h1 className="text-3xl font-bold">
                  Use the same that used in Loans Page
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
