import Image from "next/image";
import "./page.scss";

import personalLoan from "./assets/img/offerings/personal_loan.svg";
import vehicleLoan from "./assets/img/offerings/vehicle_loan.svg";
import studentLoan from "./assets/img/offerings/student_loan.svg";
import mortagageLoan from "./assets/img/offerings/mortagage_loan.svg";
import homeEquityLoan from "./assets/img/offerings/home_equity_loan.svg";
import creditCardLoan from "./assets/img/offerings/credit_card_loan.svg";

// Loan Solutions
import blog1 from "./assets/img/blog/blog_3.png";
import blog2 from "./assets/img/blog/blog_2.png";
import blog3 from "./assets/img/blog/blog_1.png";

export default function Home() {
  return (
    <>
      {/*
       **
       **
       **/}
      {/* About Lendmesh */}
      {/* TODO - BG - from-blue-900 to-blue-700*/}
      <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-16 px-6">
        {/* <!-- Heading --> */}
        <h2 className="text-4xl font-bold text-center mt-12 mb-12">
          Our Offerings
        </h2>

        {/* <!-- Container --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
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
              Whether it's home improvements, debt consolidation, or unexpected
              expenses, we connect you with affordable personal loan options
              with no hidden fees.
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
              New, used, or refinancing, we find you the best auto loan rates
              from trusted lenders, so you can save more.
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
              Whether you're a first-time homebuyer or refinancing, we help you
              find the lowest mortgage rates from top lenders.
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
              Access funds for major expenses or investments with low-rate home
              equity loans and HELOCs.
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
              Enjoy flexible credit options with competitive rates, perfect for
              your everyday expenses.
            </p>
          </div>
        </div>
      </div>

      {/*
       **
       **
       **/}
      {/* About Lendmesh */}

      <div className="bg-white py-16 px-4 md:px-10 lg:px-20 text-center">
        {/* <!-- Title Section --> */}
        <h2 className="text-4xl font-bold">About Lendmesh</h2>

        <p className="text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          At LendMesh, we believe finding the right loan should be simple,
          transparent, and stress-free. Our platform connects you with top
          lenders and credit unions across the USA, offering real-time rates and
          tailored loan options, all in one place.
        </p>

        {/* <!-- Stats Section (2x2 Grid on Mobile) --> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4296EA]">100+</h3>
            <p>clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4296EA]">100+</h3>
            <p>clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4296EA]">100+</h3>
            <p>clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-[#4296EA]">100+</h3>
            <p>clients</p>
          </div>
        </div>

        {/* <!-- Button Section --> */}
        <div className="mt-10">
          <button className="border-2 border-[#002144] text-[#002144] px-6 py-2 rounded-md hover:bg-[#002144] hover:text-white transition cursor-pointer">
            Know more
          </button>
        </div>
      </div>
      {/*
       **
       **
       **/}
      {/* Tails with Info */}
      <div className="bg-white py-16 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Card 1 --> */}
          <div className="border border-[#4296EA] rounded-lg p-8 text-center shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-bold">
              All inquires are free
            </h3>
            <p className="mt-4 leading-relaxed">
              No obligations, no charge - that's the Lendmesh way. We strive to
              match homebuyers with top lenders, and you take it from there.
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
              Buying a home is serious business, and we take data security just
              as seriously. Your information is secured every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/*
       **
       **
       **
       **
       **/}
      {/*  loan solution! */}
      <div className="bg-white text-center py-12 px-6">
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
      {/*
       **
       **
       **
       **
       **/}
      {/* Bank & Credit Union */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Bank & Credit Union
      </h2>
      {/*
       **
       **
       **
       **
       **/}
      {/* Blogs */}
      <div className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 blogs">
          {/* <!-- Blog 1 --> */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
            <Image
              className="w-full object-cover"
              src={blog1}
              alt="Credit Card Loan"
              priority
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900">
                Lorem ipsum dolor sit amet, elit
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, elit do eiusmod tempor
              </p>
              <a
                href="#"
                className="text-green-500 mt-4 inline-flex items-center hover:text-green-600"
              >
                Read more{" "}
                <span className="ml-1 transition-transform hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* <!-- Blog 2 --> */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
            <Image
              className="w-full object-cover"
              src={blog2}
              alt="Credit Card Loan"
              priority
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900">
                Lorem ipsum dolor sit amet, elit
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, elit do eiusmod tempor
              </p>
              <a
                href="#"
                className="text-green-500 mt-4 inline-flex items-center hover:text-green-600"
              >
                Read more{" "}
                <span className="ml-1 transition-transform hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* <!-- Blog 3 --> */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-200">
            <Image
              className="w-full object-cover"
              src={blog3}
              alt="Credit Card Loan"
              priority
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900">
                Lorem ipsum dolor sit amet, elit
              </h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, elit do eiusmod tempor
              </p>
              <a
                href="#"
                className="text-[#6BE3A2] mt-4 inline-flex items-center hover:text-[#6BE3A2]"
              >
                Read more{" "}
                <span className="ml-1 transition-transform hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-[#6BE3A2] text-[#002144] px-6 py-3 rounded-md shadow hover:bg-green-500 transition">
            More Blogs
          </button>
        </div>
      </div>
      {/*
       **
       **
       **/}
      {/* Any Questions? */}
      <div className="bg-white py-16 px-4 md:px-10 lg:px-20">
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
                you find the best loan offers with the lowest interest rates—all
                in one place, 100% free.
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
            <div>
              <h4 className="text-lg font-bold text-[#4296EA] cursor-pointer flex justify-between">
                Is LendMesh free to use?
                <span className="text-xl">+</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/*
       **
       **
       **/}
      {/* Our Trusted Clients */}

      <div className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Trusted Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Card 1 --> */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <span className="text-[#4296EA] text-2xl">★ ★ ★ ★ ★</span>
            </div>
            <p className="text-lg mb-6">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut amet, consectetur”
            </p>
            <h4 className="font-bold">Lorem ipsum</h4>
            <p className="text-[#4296EA]">IT Employee</p>
          </div>

          {/* <!-- Active Card --> */}
          <div className="bg-blue-500 shadow-lg rounded-lg p-8 transform scale-105 transition">
            <div className="flex justify-center mb-4">
              <span className="text-[#6BE3A2] text-2xl">★ ★ ★ ★ ★</span>
            </div>
            <p className="text-white text-lg mb-6">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut amet, consectetur”
            </p>
            <h4 className="text-[#6BE3A2] font-bold">Lorem ipsum</h4>
            <p className="text-white">IT Employee</p>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <span className="text-[#4296EA] text-2xl">★ ★ ★ ★ ★</span>
            </div>
            <p className="text-lg mb-6">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut amet, consectetur”
            </p>
            <h4 className="font-bold">Lorem ipsum</h4>
            <p className="text-[#4296EA]">IT Employee</p>
          </div>
        </div>
      </div>
    </>
  );
}
