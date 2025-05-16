import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./community.scss";

export default function CommunityPage() {
  return (
    <>
      <div className="bg-[#002144] page-banner-1">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center  text-white text-center py-16 px-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold">
            Subscription
          </h2>
          <p className="mt-8 text-l sm:text-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </section>
      </div>

      <section className="lg:container md:mx-auto w-full h-full md:max-w-full flex flex-col items-center justify-center text-center py-16 px-5">
        <div className="flex flex-wrap justify-center items-stretch gap-6 w-full">
          {/* Card */}
          <div className="community-tile flex flex-col w-full sm:w-[48%] md:w-[30%] p-6 text-center rounded-[8px] border shadow h-full">
            <div className="flex flex-col flex-1 justify-between">
              <div className="flex justify-center mb-4">
                <Link scroll={false} href="/loans/personal_loans">
                  <Image
                    className="dark:invert"
                    src="/images/offerings/personal_loan.svg"
                    alt="Personal Loan"
                    width={100}
                    height={100}
                    priority
                  />
                </Link>
              </div>
              <h3 className="text-xl font-bold mb-4">Personal Loan</h3>
              <div className="flex justify-center mt-auto">
                <div className="relative">
                  <button className="bg-[#4296EA] text-white text-sm px-6 py-2 rounded-full pr-10 cursor-pointer shadow">
                    Subscribed
                  </button>
                  <span className="absolute right-[2px] top-[2px] w-8 h-8 bg-white border-2 border-[#4296EA] rounded-full flex items-center justify-center">
                    <Image
                      src="/images/icons/subscribed.svg"
                      alt="Subscribed"
                      className="h-4 w-4"
                      width={100}
                      height={100}
                      priority
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="community-tile flex flex-col w-full sm:w-[48%] md:w-[30%] p-6 text-center rounded-[8px] border shadow h-full">
            <div className="flex flex-col flex-1 justify-between">
              <div className="flex justify-center mb-4">
                <Link scroll={false} href="/loans/vehicle_loans">
                  <Image
                    className="dark:invert"
                    src={"/images/offerings/vehicle_loan.svg"}
                    alt="Vehicle Loan"
                    width={100}
                    height={100}
                    priority
                  />
                </Link>
              </div>
              <h3 className="text-lg font-bold mb-4">Vehicle Loan</h3>
              <div className="flex justify-center items-center space-x-2">
                <div className="relative">
                  <button className="bg-gray-100 text-[#6B7280] text-sm px-6 py-2 rounded-full pl-10 shadow">
                    Unsubscribed
                  </button>
                  <span className="absolute left-[2px] top-[2px] w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow">
                    <Image
                      src={"/images/icons/unsubscribed.svg"}
                      alt="Unsubscribed"
                      className="h-4 w-4"
                      width={100}
                      height={100}
                      priority
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="community-tile flex flex-col w-full sm:w-[48%] md:w-[30%] p-6 text-center rounded-[8px] border shadow h-full">
            <div className="flex flex-col flex-1 justify-between">
              <div className="flex justify-center mb-4">
                <Link scroll={false} href="/loans/student_loans">
                  <Image
                    className="dark:invert"
                    src={"/images/offerings/student_loan.svg"}
                    alt="Student Loan"
                    width={100}
                    height={100}
                    priority
                  />
                </Link>
              </div>
              <h3 className="text-lg font-bold mb-4">Student Loan</h3>
              <div className="flex justify-center items-center space-x-2">
                <div className="relative">
                  <button className="bg-gray-100 text-[#6B7280] text-sm px-6 py-2 rounded-full pl-10 shadow">
                    Unsubscribed
                  </button>
                  <span className="absolute left-[2px] top-[2px] w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow">
                    <Image
                      src={"/images/icons/unsubscribed.svg"}
                      alt="Unsubscribed"
                      className="h-4 w-4"
                      width={100}
                      height={100}
                      priority
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="community-tile flex flex-col w-full sm:w-[48%] md:w-[30%] p-6 text-center rounded-[8px] border shadow h-full">
            <div className="flex flex-col flex-1 justify-between">
              <div className="flex justify-center mb-4">
                <Link scroll={false} href="/loans/mortgage_loans">
                  <Image
                    className="dark:invert"
                    src={"/images/offerings/mortagage_loan.svg"}
                    alt="Mortgage Loan"
                    width={100}
                    height={100}
                    priority
                  />
                </Link>
              </div>
              <h3 className="text-lg font-bold mb-4">Mortgage Loan</h3>
              <div className="flex justify-center items-center space-x-2">
                <div className="relative">
                  <button className="bg-gray-100 text-[#6B7280] text-sm px-6 py-2 rounded-full pl-10 shadow">
                    Unsubscribed
                  </button>
                  <span className="absolute left-[2px] top-[2px] w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow">
                    <Image
                      src={"/images/icons/unsubscribed.svg"}
                      alt="Unsubscribed"
                      className="h-4 w-4"
                      width={100}
                      height={100}
                      priority
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="community-tile flex flex-col w-full sm:w-[48%] md:w-[30%] p-6 text-center rounded-[8px] border shadow h-full">
            <div className="flex flex-col flex-1 justify-between">
              <div className="flex justify-center mb-4">
                <Link scroll={false} href="/loans/home_equity_loans">
                  <Image
                    className="dark:invert"
                    src={"/images/offerings/home_equity_loan.png"}
                    alt="Home Equity Loan"
                    width={100}
                    height={100}
                    priority
                  />
                </Link>
              </div>
              <h3 className="text-lg font-bold mb-4">Home Equity Loan</h3>
              <div className="flex justify-center items-center space-x-2">
                <div className="relative">
                  <button className="bg-gray-100 text-[#6B7280] text-sm px-6 py-2 rounded-full pl-10 shadow">
                    Unsubscribed
                  </button>
                  <span className="absolute left-[2px] top-[2px] w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow">
                    <Image
                      src={"/images/icons/unsubscribed.svg"}
                      alt="Unsubscribed"
                      className="h-4 w-4"
                      width={100}
                      height={100}
                      priority
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat the same structure for other cards with the same flex and width classes */}
        </div>
      </section>

      <h1 className="text-6xl mt-10 font-bold text-center">
        Personal Community page 1
      </h1>
      {/* Personal Community page 1 */}
      <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center text-center py-16 px-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold">
          Personal Community page
        </h2>
        <p className="mt-8 text-l sm:text-xl mx-auto mb-10 md:mb-15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-[1%] md:px-[8%] lg:px-[15%] w-full">
          <div className="border-2 border-[#4296EA] shadow-md rounded-lg items-center justify-center hover:border-[#4296EA] transition p-10">
            <figure className="mb-6 flex justify-center">
              <Image
                className="dark:invert"
                src={"/images/community/secured.svg"}
                alt="Secured Loan"
                width={51}
                height={51}
                priority
              />
            </figure>
            <p className="text-lg font-bold text-[#0D2240]">Secured Loan</p>
          </div>

          {/* <!-- Unselected Card --> */}
          <div className="border border-gray rounded-lg items-center justify-center hover:border-blue-400 transition p-10">
            <figure className="mb-6 flex justify-center">
              <Image
                className="dark:invert"
                src={"/images/community/unsecured.svg"}
                alt="Secured Loan"
                width={51}
                height={51}
                priority
              />
            </figure>
            <p className="text-lg font-bold text-[#0D2240]">Unsecured Loan</p>
          </div>
        </div>
      </section>

      <h1 className="text-6xl mt-10 font-bold text-center">
        Personal Unsecured Loan
      </h1>
      {/* Personal Community page 1 */}
      <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center text-center py-16 px-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold">
          Personal Community page
        </h2>
        <p className="mt-8 text-l sm:text-xl mx-auto mb-10 md:mb-15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </section>
      <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full py-16 px-5">
        <div className="mb-10">
          <h2 className="font-semibold text-lg mb-2">Purpose Of The Loan</h2>
          <div className="flex flex-wrap gap-10 md:gap-15">
            <label htmlFor="personal_loan">
              <input id="personal_loans" type="checkbox" className="mr-2" />{" "}
              Personal loan
            </label>
            <label htmlFor="vacation">
              <input id="vacation" type="checkbox" className="mr-2" /> Vacation
            </label>
            <label htmlFor="marriage">
              <input id="marriage" type="checkbox" className="mr-2" /> Marriage
            </label>
            <label htmlFor="consolidated">
              <input id="consolidated" type="checkbox" className="mr-2" />{" "}
              Consolidated
            </label>
            <label htmlFor="mortgage">
              <input id="mortgage" type="checkbox" className="mr-2" /> Mortgage
            </label>
            <div className="flex items-center gap-2 col-span-full">
              <label htmlFor="other">
                <input id="other" type="checkbox" className="mr-2" /> Other
              </label>
              <input
                type="text"
                placeholder="Other Option"
                className="border border-gray- rounded px-3 py-1"
              />
            </div>
          </div>
        </div>
        {/* <!-- Credit Score --> */}
        <div className="mb-10">
          <h2 className="font-semibold text-lg mb-2">Credit Score</h2>
          <div className="flex flex-wrap gap-10 md:gap-15">
            <label>
              <input type="radio" name="credit" className="mr-1" /> Bad
            </label>
            <label>
              <input type="radio" name="credit" className="mr-1" /> Average
            </label>
            <label>
              <input type="radio" name="credit" className="mr-1" checked /> Good
            </label>
            <label>
              <input type="radio" name="credit" className="mr-1" /> Very Good
            </label>
            <label>
              <input type="radio" name="credit" className="mr-1" /> Excellent
            </label>
          </div>
        </div>
        {/* <!-- Loan Amount --> */}
        <div className="mb-10">
          <h2 className="font-semibold text-lg mb-2">Loan Amount</h2>
          <input
            type="text"
            placeholder="$ Add amount"
            className="border border-gray rounded px-3 py-2 w-full"
          />
        </div>

        {/* <!-- Other types of loans --> */}
        <div className="mb-10">
          <h2 className="font-semibold text-lg mb-2">
            Other types of loans invested & amt paid per month
          </h2>
          <div className="flex flex-wrap gap-[4%] md:gap-10">
            <div className="w-[48%] sm:w-[200px] mb-5 sm:mb-0">
              <label>
                <input type="checkbox" className="mr-2" /> Mortgage
              </label>
              <input
                type="text"
                placeholder="$ Add amount"
                className="mt-1 border border-gray rounded px-3 py-2 w-full"
              />
            </div>
            <div className="w-[48%] sm:w-[200px] mb-5 sm:mb-0">
              <label>
                <input type="checkbox" className="mr-2" checked /> Home
              </label>
              <input
                type="text"
                placeholder="$ Add amount"
                className="mt-1 border border-gray rounded px-3 py-2 w-full"
              />
            </div>
            <div className="w-[48%] sm:w-[200px] mb-5 sm:mb-0">
              <label>
                <input type="checkbox" className="mr-2" /> Student
              </label>
              <input
                type="text"
                placeholder="$ Add amount"
                className="mt-1 border border-gray rounded px-3 py-2 w-full"
              />
            </div>
            <div className="w-[48%] sm:w-[200px] mb-5 sm:mb-0">
              <label>
                <input type="checkbox" className="mr-2" /> Vehicle
              </label>
              <input
                type="text"
                placeholder="$ Add amount"
                className="mt-1 border border-gray rounded px-3 py-2 w-full"
              />
            </div>
            <div className="w-[48%] sm:w-[200px] mb-5 sm:mb-0">
              <label>
                <input type="checkbox" className="mr-2" /> None
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Monthly income & Interest Rate --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <h2 className="font-semibold text-lg mb-2">Monthly income</h2>
            <input
              type="text"
              placeholder="$ Add amount"
              className="border border-gray rounded px-3 py-2 w-[48%] sm:w-[300px] min-w-[200px]"
            />
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-2">
              Minimum Interest Rate Desired
            </h2>
            <div className="flex items-center gap-2">
              <input

                type="text"
                placeholder="Add interest rate"
                className="border border-gray rounded px-3 py-2 w-[48%] sm:w-[300px] min-w-[200px]"
              />
              <span>%</span>
            </div>
          </div>
        </div>
        {/* <!-- Minimum Amount Desired Slider --> */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Minimum Amount Desired</h2>
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>$ 1,000</span>
            <span>$ 50,000</span>
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            value="20000"
            className="w-full accent-blue-500"
          />
          <p className="text-center font-medium mt-2">$ 20,000</p>
        </div>

        {/* <!-- Submit Button --> */}
        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
            Next
          </button>
        </div>
      </section>
    </>
  );
}
