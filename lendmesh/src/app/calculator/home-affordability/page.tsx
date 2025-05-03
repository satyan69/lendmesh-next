import React from "react";
export default function HomeAffordabilityCalculator() {
  return (
    <>
      <div className="bg-[#002144] page-banner-1">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center  text-white text-center py-16 px-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold">
            Home Affordability
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
                Home Affordability
                <span className="text-gray-400 cursor-help" title="Help text">
                  &#9432;
                </span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
                <div className="flex flex-col justify-between">
                  <label htmlFor="netMonthlyPay" className="block font-medium">
                    Net Monthly Pay (Gross Income)
                  </label>
                  <input
                    id="netMonthlyPay"
                    type="number"
                    value="8751"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="totalMonthlyDebts"
                    className="block font-medium"
                  >
                    Total Monthly Debts
                  </label>
                  <input
                    id="totalMonthlyDebts"
                    type="number"
                    value="4"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="totalHousingExpense"
                    className="block font-medium"
                  >
                    Total Housing Expense without Rent
                  </label>
                  <input
                    id="totalHousingExpense"
                    type="number"
                    value="3199"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="newHomeExpenses"
                    className="block font-medium"
                  >
                    New Home Expenses
                  </label>
                  <input
                    id="newHomeExpenses"
                    type="number"
                    value="717"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="totalClosingCost"
                    className="block font-medium"
                  >
                    Total Closing Cost
                  </label>
                  <input
                    id="totalClosingCost"
                    type="number"
                    value="10000"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="annualInterestRate"
                    className="block font-medium"
                  >
                    Annual Interest Rate %
                  </label>
                  <input
                    id="annualInterestRate"
                    type="number"
                    value="6.25"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="termOfMortgage" className="block font-medium">
                    Term of Mortgage (years)
                  </label>
                  <input
                    id="termOfMortgage"
                    type="number"
                    value="30"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="availableFunds" className="block font-medium">
                    Available Funds
                  </label>
                  <input
                    id="availableFunds"
                    type="number"
                    value="92000"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Right Main Content --> */}
            <div className="space-y-6">
              {/* <!-- Charts Section --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <!-- Home Affordability --> */}
                <div className="bg-white p-6 rounded-lg shadow text-center border-gray">
                  <h3 className="text-xl font-bold mb-4">Home Affordability</h3>
                  <div className="w-40 h-40 mx-auto bg-yellow-300 rounded-full mb-4 flex items-center justify-center">
                    [Pie]
                  </div>
                  <div className="flex justify-center items-center gap-2 bg-gray-100 rounded p-1">
                    <span>
                      Max Loan Amount <strong>$460,834</strong>
                    </span>{" "}
                    +
                    <span>
                      Down Payment <strong>$92,000</strong>
                    </span>{" "}
                    =
                    <span className="px-3 py-1 bg-[#002144] font-semibold text-white rounded">
                      Total $552,834
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center mt-4 text-xs gap-4">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>{" "}
                      Max Loan
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>{" "}
                      Down Payment
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>{" "}
                      Term: 30 yrs
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-sky-500 inline-block"></span>{" "}
                      Interest: 6.25%
                    </span>
                  </div>
                </div>

                {/* <!-- Income vs Expense --> */}
                <div className="bg-white p-6 rounded-lg shadow text-center border-gray">
                  <h3 className="text-xl font-bold mb-4">Income vs Expense</h3>
                  <div className="w-40 h-40 mx-auto bg-blue-400 rounded-full mb-4 flex items-center justify-center text-white">
                    [Pie]
                  </div>
                  <div className="flex justify-center items-center gap-2 bg-gray-100 rounded p-1">
                    <span>
                      Gross Income <strong>$8,751</strong>
                    </span>{" "}
                    -
                    <span>
                      Debts <strong>$4</strong>
                    </span>{" "}
                    =
                    <span className="px-3 py-1 rounded font-semibold bg-[#002144] font-semibold text-white rounded">
                      Net Pay $8,747
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center mt-4 text-xs gap-4">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>{" "}
                      Mortgage $2,899
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span>{" "}
                      Housing $3,199
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>{" "}
                      Expense $717
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-lime-500 inline-block"></span>{" "}
                      Leftover $1,932
                    </span>
                  </div>
                </div>
              </div>

              {/* <!-- Best Loan Options Table --> */}
              <div className="bg-white p-6 rounded-lg shadow border-gray">
                <h3 className="text-xl font-bold mb-4">Best Loan Options</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="font-semibold bg-[#6BE3A2] py-3 px-4 rounded-tl-[8px]">
                        <th className="px-4 py-2 rounded-tl-[8px]">Leftover</th>
                        <th className="px-4 py-2">Max Loan Value</th>
                        <th className="px-4 py-2">Max Loan Amount</th>
                        <th className="px-4 py-2">Down Payment %</th>
                        <th className="px-4 py-2">Monthly Mortgage</th>
                        <th className="px-4 py-2">Leftover</th>
                        <th className="px-4 py-2 text-center rounded-tr-[8px]">
                          Ambivalence
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-100 hover:bg-gray-100">
                        <td className="px-4 py-2">50%</td>
                        <td className="px-4 py-2">$474,388</td>
                        <td className="px-4 py-2">$382,388</td>
                        <td className="px-4 py-2">19.39%</td>
                        <td className="px-4 py-2">$2,416</td>
                        <td className="px-4 py-2">$2,415</td>
                        <td className="px-4 py-2 text-center">
                          <span className="inline-block w-[75px] text-center bg-green-500 text-white text-xs px-2 py-1 rounded">
                            BEST
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-4 py-2">40%</td>
                        <td className="px-4 py-2">$552,834</td>
                        <td className="px-4 py-2">$460,834</td>
                        <td className="px-4 py-2">16.64%</td>
                        <td className="px-4 py-2">$2,899</td>
                        <td className="px-4 py-2">$1,932</td>
                        <td className="px-4 py-2 text-center">
                          <span className="inline-block w-[75px] text-center bg-green-400 text-white text-xs px-2 py-1 rounded">
                            GOOD
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-blue-50 hover:bg-gray-50">
                        <td className="px-4 py-2">30%</td>
                        <td className="px-4 py-2">$631,279</td>
                        <td className="px-4 py-2">$539,279</td>
                        <td className="px-4 py-2">14.57%</td>
                        <td className="px-4 py-2">$3,382</td>
                        <td className="px-4 py-2">$1,449</td>
                        <td className="px-4 py-2 text-center">
                          <span className="inline-block w-[75px] text-center bg-blue-400 width-[75px] text-white text-xs px-2 py-1 rounded">
                            NORMAL
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-orange-50 hover:bg-gray-50">
                        <td className="px-4 py-2">10%</td>
                        <td className="px-4 py-2">$788,169</td>
                        <td className="px-4 py-2">$696,169</td>
                        <td className="px-4 py-2">11.67%</td>
                        <td className="px-4 py-2">$4,348</td>
                        <td className="px-4 py-2">$483</td>
                        <td className="px-4 py-2 text-center">
                          <span className="inline-block w-[75px] text-center bg-orange-400 text-white text-xs px-2 py-1 rounded">
                            BAD
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-red-50 hover:bg-gray-50">
                        <td className="px-4 py-2 rounded-bl-[8px]">0%</td>
                        <td className="px-4 py-2">$866,614</td>
                        <td className="px-4 py-2">$774,614</td>
                        <td className="px-4 py-2">10.62%</td>
                        <td className="px-4 py-2">$4,831</td>
                        <td className="px-4 py-2">$0</td>
                        <td className="px-4 py-2 text-center rounded-br-[8px]">
                          <span className="inline-block w-[75px] text-center bg-red-500 text-white text-xs px-2 py-1 rounded">
                            WORST
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
