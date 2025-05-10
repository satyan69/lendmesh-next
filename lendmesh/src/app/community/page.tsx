import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./community.scss";

export default function CommunityPage() {
  return (
    <>
      <div className="bg-[#002144] page-banner-2 h-[73px]"></div>
      <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center text-center py-16 px-5">
        <div className="border-b border-[#e3dfdf] pb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold">
            Chartway Federal Credit Union
          </h2>
          <p className="mt-8 text-l sm:text-xl mx-auto">
            Chartway Federal Credit Union is a not-for-profit financial
            institution that has been providing financial services to its
            members since 1959. Headquartered in Virginia Beach, Virginia,
            Chartway Credit Union has more than 50 branches and over 600,000
            members nationwide. Chartway Credit Union is committed to helping
            its members achieve their financial goals by offering a range of
            financial products and services, including savings accounts,
            checking accounts, credit cards, loans, and more.
          </p>
        </div>
      </section>
      {/* Type of Loan Offerings */}
      <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col pb-16 px-5">
        <h3 className="text-xl md:text-3xl lg:text-3xl font-bold">Type of Loan Offerings</h3>
        <h4 className="text-xl md:text-3xl lg:text-3xl font-bold">Type of Loan Offerings</h4>
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <div className="bg-white rounded-lg pt-6 pb-2 loans-table-wrapper">
            <div className="w-full">
              {/* Header */}
              <div className="flex font-semibold bg-[#6BE3A2] text-[#002144] py-3 px-4 rounded-tl-[8px] rounded-tr-[8px]">
                <div className="w-[25%] pr-2">Lending Partner</div>
                <div className="w-[15%] pr-2">APR</div>
                <div className="w-[20%] pr-2">Term</div>
                <div className="w-[20%] pr-2">Amount</div>
                <div className="w-[15%] pr-2">Link</div>
                <div className="w-[5%] flex justify-center items-center">
                  Info
                </div>
              </div>

              {/* Rows */}
              <div className="border-b border-gray px-4 py-3 flex items-center text-sm font-medium">
                <div className="w-[25%] pr-2">University Credit Union 1</div>
                <div className="w-[15%] pr-2">10.23% - 18%</div>
                <div className="w-[20%] pr-2">2.1yrs - 7yrs</div>
                <div className="w-[20%] pr-2">$25,000</div>
                <div className="w-[15%] pr-2">∞</div>
                <div className="w-[5%] flex justify-center items-center cursor-pointer">
                  <svg
                    className="size-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="px-4 py-3 flex items-center text-sm font-medium">
                <div className="w-[25%] pr-2">University Credit Union 2</div>
                <div className="w-[15%] pr-2">10.23% - 18%</div>
                <div className="w-[20%] pr-2">2.1yrs - 7yrs</div>
                <div className="w-[20%] pr-2">$25,000</div>
                <div className="w-[15%] pr-2">∞</div>
                <div className="w-[5%] flex justify-center items-center cursor-pointer">
                  <svg
                    className="size-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table */}
      </section>

      {/*  */}
      {/*  */}

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
      <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center text-center py-16 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {/* Card (Subscribed) */}
          <div className="community-tile rounded-[8px] p-6 text-center flex flex-col h-full">
            <div className="flex justify-center mb-4">
              <div className="rounded">
                <Link scroll={false} href="/loans/personal_loans">
                  <Image
                    className="dark:invert"
                    src={"/images/offerings/personal_loan.svg"}
                    alt="Personal Loan"
                    width={100}
                    height={100}
                    priority
                  />
                </Link>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Personal Loan</h3>
            <div className="flex justify-center">
              <div className="relative">
                <button className="bg-[#4296EA] text-white text-sm px-6 py-2 rounded-full pr-10 cursor-pointer shadow">
                  Subscribed
                </button>
                <span className="absolute right-[2px] top-[2px] w-8 h-8 bg-white border-2 border-[#4296EA] rounded-full flex items-center justify-center">
                  <Image
                    src={"/images/icons/subscribed.svg"}
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

          {/* Card (Unsubscribed) */}
          <div className="community-tile rounded-[8px] p-6 text-center flex flex-col h-full">
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded">
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

          {/* Repeat similar blocks for other cards */}
          <div className="community-tile rounded-[8px] p-6 text-center flex flex-col h-full">
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded">
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

          {/* Mortgage Loan */}
          <div className="community-tile rounded-[8px] p-6 text-center flex flex-col h-full">
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded">
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

          {/* Home Equity Loan */}
          <div className="community-tile rounded-[8px] p-6 text-center flex flex-col h-full">
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded">
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
      </section>
    </>
  );
}
