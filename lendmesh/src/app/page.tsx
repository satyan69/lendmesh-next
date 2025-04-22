import Image from "next/image";
import "./page.scss";

import personalLoan from "./assets/img/offerings/personal_loan.svg";
import vehicleLoan from "./assets/img/offerings/vehicle_loan.svg";
import studentLoan from "./assets/img/offerings/student_loan.svg";
import mortagageLoan from "./assets/img/offerings/mortagage_loan.svg";
import homeEquityLoan from "./assets/img/offerings/home_equity_loan.svg";
import creditCardLoan from "./assets/img/offerings/credit_card_loan.svg";

// Loan Solutions

import Clients from "../components/Clients";
import HomeAbout from "@/components/HomeAbout";
import HomeBlogs from "@/components/HomeBlogs";

export default function Home() {
  return (
    <>
      {/*
       **
       **
       **/}
      {/* About Lendmesh */}
      {/* TODO - BG - from-blue-900 to-blue-700*/}
      <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white home-banner">
        <div className="home-banner-part-1 py-16 px-6">
          <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* <!-- Personal Loan --> */}
              <div className="flex flex-col items-start py-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 pt-30 leading-normal">
                  Find the Right Loan, Effortlessly with LendMesh
                </h2>
                <p className="text-gray-100 hover:text-white mb-5 text-xl">
                  LendMesh makes it simple, transparent and absolutely free,
                  helping you compare the best loan offers from top credit
                  unions and lenders across the USA
                </p>
                <button className="cursor-pointer text-white border-2 border-white px-6 py-2 rounded-[4px] font-semibold hover:bg-white hover:text-blue-900 transition">
                  Get started
                </button>
              </div>

              {/* <!-- Vehicle Loan --> */}
              <div className="flex flex-col items-center text-center p-8"></div>
            </div>
          </div>
        </div>

        {/* <!-- Heading --> */}
        <div className="home-banner-part-2 py-16 px-6">
          <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mt-30 mb-12">
              Our Offerings
            </h2>

            {/* <!-- Container --> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
              {/* <!-- Personal Loan --> */}
              <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-105 transition">
                <Image
                  className="dark:invert"
                  src={personalLoan}
                  alt="Personal Loan"
                  priority
                />
                <h3 className="text-2xl font-bold mb-4">Personal Loan</h3>
                <p className="text-gray-100 hover:text-white">
                  Whether it's home improvements, debt consolidation, or
                  unexpected expenses, we connect you with affordable personal
                  loan options with no hidden fees.
                </p>
              </div>

              {/* <!-- Vehicle Loan --> */}
              <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-105 transition">
                <Image
                  className="dark:invert"
                  src={vehicleLoan}
                  alt="Vehicle Loan"
                  priority
                />
                <h3 className="text-2xl font-bold mb-4">Vehicle Loan</h3>
                <p className="text-gray-100 hover:text-white">
                  New, used, or refinancing, we find you the best auto loan
                  rates from trusted lenders, so you can save more.
                </p>
              </div>

              {/* <!-- Student Loan --> */}
              <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-105 transition">
                <Image
                  className="dark:invert"
                  src={studentLoan}
                  alt="Student Loan"
                  priority
                />
                <h3 className="text-2xl font-bold mb-4">Student Loan</h3>
                <p className="text-gray-100 hover:text-white">
                  Find the best student loan options for college or refinancing,
                  with lower rates and flexible repayment plans.
                </p>
              </div>

              {/* <!-- Mortgage Loan --> */}
              <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-105 transition">
                <Image
                  className="dark:invert"
                  src={mortagageLoan}
                  alt="Mortagage Loan"
                  priority
                />
                <h3 className="text-2xl font-bold mb-4">Mortgage Loan</h3>
                <p className="text-gray-100 hover:text-white">
                  Whether you're a first-time homebuyer or refinancing, we help
                  you find the lowest mortgage rates from top lenders.
                </p>
              </div>

              {/* <!-- Home Equity Loan --> */}
              <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-105 transition">
                <Image
                  className="dark:invert"
                  src={homeEquityLoan}
                  alt="Home Equity Loan"
                  priority
                />
                <h3 className="text-2xl font-bold mb-4">Home Equity Loan</h3>
                <p className="text-gray-100 hover:text-white">
                  Access funds for major expenses or investments with low-rate
                  home equity loans and HELOCs.
                </p>
              </div>

              {/* <!-- Credit Card Loan --> */}
              <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-103 transition">
                <Image
                  className="dark:invert"
                  src={creditCardLoan}
                  alt="Credit Card Loan"
                  priority
                />
                <h3 className="text-2xl font-bold mb-4">Credit Card Loan</h3>
                <p className="text-gray-100 hover:text-white">
                  Enjoy flexible credit options with competitive rates, perfect
                  for your everyday expenses.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner-part-3 py-16 px-6"></div>
      </div>

      {/*
       **
       **
       **/}
      {/* About Lendmesh */}
      <section className="bg-white pt-75 sm:pt-100 pb-16 px-4 md:px-10 lg:px-20 text-center home-about-lendmesh">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <HomeAbout />
        </div>
      </section>
      {/*
       **
       **
       **/}
      {/* Tails with Info */}
      <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Card 1 --> */}
            <div className="border border-[#4296EA] rounded-lg p-8 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold">All inquires are free</h3>
              <p className="mt-4 leading-relaxed">
                No obligations, no charge - that's the Lendmesh way. We strive
                to match homebuyers with top lenders, and you take it from
                there.
              </p>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="border border-[#4296EA] rounded-lg p-8 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold">
                Will Not Affect Your Credit
              </h3>
              <p className="mt-4 leading-relaxed">
                You worked hard to build your credit score, we'll work hard to
                protect it. Your mortgage inquiry here on our platform will not
                affect your rating.
              </p>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="border border-[#4296EA] rounded-lg p-8 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-bold">
                Your Information Is Safe With Us
              </h3>
              <p className="mt-4 leading-relaxed">
                Buying a home is serious business, and we take data security
                just as seriously. Your information is secured every step of the
                way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*
       **
       **
       **
       **
       **/}
      {/*  loan solution! */}
      <section className="bg-white text-center py-12 px-6">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          {/* <!-- Heading --> */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock your potential with the <br /> perfect loan solution!
          </h1>

          <p className="text-lg max-w-3xl mx-auto mb-12">
            Buying a home is a big decision—our Mortgage Calculator and Home
            Affordability Calculator help you plan with confidence.
          </p>

          {/* <!-- Container --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* <!-- Home Affordability --> */}
            <div className="flex flex-col items-center justify-start p-8 bg-gray-50 rounded-lg shadow-md home_affordability">
              <h2 className="text-2xl font-bold mb-8">Home Affordability</h2>
              {/* <Image
              className="dark:invert"
              src={homeAffordability}
              alt="Personal Loan"
              priority
            /> */}
              <a
                href="#"
                className="border-2 border-[#002144] hover:bg-[#6BE3A2] text-[#002144] py-3 px-8 rounded-md transition"
              >
                Calculate
              </a>
            </div>

            {/* <!-- Mortgage Calculator --> */}
            <div className="flex flex-col items-center justify-start p-8 bg-blue-900 text-white rounded-lg shadow-md mortgage_calculator">
              <h2 className="text-2xl font-bold mb-8">Mortgage Calculator</h2>
              {/* <Image
              className="dark:invert"
              src={mortgageCalculator}
              alt="Mortgage Calculator"
              priority
            /> */}
              <a
                href="#"
                className="border-2 border-[#002144] hover:bg-[#6BE3A2] text-[#002144] py-3 px-8 rounded-md transition"
              >
                Calculate
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*
       **
       **
       **
       **
       **/}
      {/* Bank & Credit Union */}
      <section className="py-36 px-4 md:px-10 lg:px-20 home_bank_credit_union">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <h2 className="text-4xl font-bold text-center pb-12">
            Bank & Credit Union
          </h2>
        </div>
      </section>
      {/*
       **
       **
       **
       **
       **/}
      {/* Blogs */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <HomeBlogs />
        </div>
      </section>

      {/* Any Questions? */}
      <section className="bg-white py-16 px-4 md:px-10 lg:px-20 home_any_questions">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* <!-- Left Section --> */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#4296EA]">
                Any Questions?
              </h2>
              <h3 className="text-3xl font-bold">We got you</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <button className="border-2 border-[#002144] text-[#002144] px-6 py-2 rounded-md hover:bg-[#002144] hover:text-white transition cursor-pointer">
                More info
              </button>
            </div>

            {/* <!-- Right Section --> */}
            <div className="space-y-4">
              {/* <!-- FAQ 1 --> */}
              <div className="border-b pb-4">
                <h4 className="text-lg font-bold text-[#4296EA] cursor-pointer flex justify-between">
                  What is LendMesh?
                  <span className="text-xl">-</span>
                </h4>
                <p className="text-gray-700 mt-2">
                  LendMesh is a loan comparison platform that connects borrowers
                  with trusted credit unions and lenders across the USA. We help
                  you find the best loan offers with the lowest interest
                  rates—all in one place, 100% free.
                </p>
              </div>

              {/* <!-- FAQ 2 --> */}
              <div className="border-b pb-4">
                <h4 className="text-lg font-bold text-[#4296EA] cursor-pointer flex justify-between">
                  How does LendMesh work?
                  <span className="text-xl">+</span>
                </h4>
              </div>

              {/* <!-- FAQ 3 --> */}
              <div className="border-b pb-4">
                <h4 className="text-lg font-bold text-[#4296EA] cursor-pointer flex justify-between">
                  Does LendMesh provide loans directly?
                  <span className="text-xl">+</span>
                </h4>
              </div>

              {/* <!-- FAQ 4 --> */}
              <>
                <h4 className="text-lg font-bold text-[#4296EA] cursor-pointer flex justify-between">
                  Is LendMesh free to use?
                  <span className="text-xl">+</span>
                </h4>
              </>
            </div>
          </div>
        </div>
      </section>
      {/*
       **
       **
       **/}
      {/* Our Trusted Clients */}
      <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <Clients />
        </div>
      </section>
    </>
  );
}
