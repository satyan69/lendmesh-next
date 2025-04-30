import "./page.scss";
// Loan Solutions

import Clients from "../components/Clients";
import HomeAbout from "@/components/HomeAbout";
import HomeBlogs from "@/components/HomeBlogs";
import HomeOfferings from "@/components/HomeOfferings";
import Link from "next/link";
import AboutLendMesh from "@/components/AboutLendMesh";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/*
       **
       **
       **/}
      {/* TODO - BG - from-blue-900 to-blue-700*/}
      <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white home-banner">
        <div className="home-banner-part-1 py-16 px-6">
          <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* <!-- Personal Loan --> */}
              <div className="flex flex-col items-start py-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-normal">
                  Find the Right Loan, Effortlessly with LendMesh
                </h2>
                <p className="text-gray-100 hover:text-white mb-5 text-l md:text-xl">
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
        <HomeOfferings />
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
              <figure className="mb-6 flex justify-center">
                <Image
                  className="dark:invert"
                  src={"/images/about/gift.svg"}
                  alt="Credit Card Loan"
                  width={51}
                  height={51}
                  priority
                />
              </figure>
              <h3 className="text-xl md:text-2xl font-bold">All inquires are free</h3>
              <p className="mt-4 leading-relaxed">
                No obligations, no charge - that&apos;s the Lendmesh way. We
                strive to match homebuyers with top lenders, and you take it
                from there.
              </p>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="border border-[#4296EA] rounded-lg p-8 text-center shadow-sm hover:shadow-md transition">
              <figure className="mb-6 flex justify-center">
                <Image
                  className="dark:invert"
                  src={"/images/about/rating-circled.svg"}
                  alt="Credit Card Loan"
                  width={51}
                  height={51}
                  priority
                />
              </figure>
              <h3 className="text-xl md:text-2xl font-bold">
                Will Not Affect Your Credit
              </h3>
              <p className="mt-4 leading-relaxed">
                You worked hard to build your credit score, we&apos;ll work hard
                to protect it. Your mortgage inquiry here on our platform will
                not affect your rating.
              </p>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="border border-[#4296EA] rounded-lg p-8 text-center shadow-sm hover:shadow-md transition">
              <figure className="mb-6 flex justify-center">
                <Image
                  className="dark:invert"
                  src={"/images/about/lock.svg"}
                  alt="Credit Card Loan"
                  width={51}
                  height={51}
                  priority
                />
              </figure>
              <h3 className="text-xl md:text-2xl font-bold">
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
      <section className="bg-white text-center pt-12 px-4">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          {/* <!-- Heading --> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Unlock your potential with the perfect loan solution!
          </h2>

          <p className="text-lg max-w-3xl mx-auto mb-12">
            Buying a home is a big decision—our Mortgage Calculator and Home
            Affordability Calculator help you plan with confidence.
          </p>

          {/* <!-- Container --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* <!-- Home Affordability --> */}
            <div className="flex flex-col items-center justify-start p-8 bg-gray-50 rounded-lg shadow-md home_affordability">
              <h2 className="text-2xl font-bold mb-8">Home Affordability</h2>
              <Link
                href="/calculator/home-affordability"
                className="border-2 border-[#002144] hover:bg-[#6BE3A2] text-[#002144] py-3 px-8 rounded-md transition"
              >
                Calculate
              </Link>
            </div>

            {/* <!-- Mortgage Calculator --> */}
            <div className="flex flex-col items-center justify-start p-8 bg-blue-900 text-white rounded-lg shadow-md mortgage_calculator">
              <h2 className="text-2xl font-bold mb-8">Mortgage Calculator</h2>

              <Link
                href="/calculator/mortgage-calculator"
                className="border-2 border-[#002144] hover:bg-[#6BE3A2] text-[#002144] py-3 px-8 rounded-md transition"
              >
                Calculate
              </Link>
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
      {/* Bank & Credit Union - Blogs */}
      <section className="pb-36 px-4 md:px-10 lg:px-20 home_bank_credit_union">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-12 blogs-title-one">
            Bank & Credit Union
          </h2>
          <HomeBlogs />
        </div>
      </section>
      {/*
       **
       **
       **
       **
       **/}

      {/* Any Questions? */}
      <section className="py-16 px-4 md:px-10 lg:px-20 home_any_questions">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* <!-- Left Section --> */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4296EA]">
                Any Questions?
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">We got you</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <button className="border-2 border-[#002144] text-[#002144] px-6 py-2 rounded-md hover:bg-[#002144] hover:text-white transition cursor-pointer">
                More info
              </button>
            </div>

            {/* <!-- Right Section --> */}
            <AboutLendMesh />
          </div>
        </div>
      </section>
      {/*
       **
       **
       **/}

      <section className="pb-16 px-4 md:px-10 lg:px-20 home-clients">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <Clients />
        </div>
      </section>
    </>
  );
}
