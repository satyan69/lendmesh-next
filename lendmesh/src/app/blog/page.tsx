import React from "react";
import Image from "next/image";

export default function BlogPage() {
  return (
    <>
      <div className="bg-[#002144] page-banner-1">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center  text-white text-center py-16 px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold">Blogs</h2>
          <p className="mt-8 text-l sm:text-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </section>
      </div>
      <div className="loans-section-1-wrapper">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full pt-16 px-5 lg:px-0">
          <div className="flex flex-wrap gap-4 mb-6 pl-0 lg:pl-3">
            <button className="px-4 py-2 rounded-[8px] bg-blue-900 text-white font-medium">
              All
            </button>
            <button className="px-4 py-2 rounded-[8px] border border-blue-900 cursor-pointer">
              Personal
            </button>
            <button className="px-4 py-2 rounded-[8px] border border-blue-900 cursor-pointer">
              Vehicle
            </button>
            <button className="px-4 py-2 rounded-[8px] border border-blue-900 cursor-pointer">
              Student
            </button>
            <button className="px-4 py-2 rounded-[8px] border border-blue-900 cursor-pointer">
              Mortgage
            </button>
            <button className="px-4 py-2 rounded-[8px] border border-blue-900 cursor-pointer">
              Home Equity
            </button>
            <button className="px-4 py-2 rounded-[8px] border border-blue-900 cursor-pointer">
              Credit Card
            </button>
          </div>

          <div className="bg-gray-100 rounded-lg overflow-hidden flex flex-col md:flex-row">
            {/* <!-- Left content --> */}
            <div className="p-6 flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Lorem ipsum dolor sit amet, elit
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, elit do eiusmod tempor
              </p>
              <p className="text-gray-800 font-medium">February 2025</p>
            </div>

            {/* <!-- Right image --> */}
            <div className="flex-1">
              {/* <img
                src="/path-to-your-image.jpg"
                alt="money"
                className="h-full w-full object-cover"
              /> */}
              {/* <Image
                className="dark:invert h-full w-full object-cover"
                src={blog}
                alt="Personal Loan"
                priority
              /> */}
            </div>
          </div>
        </section>
      </div>

      <div className="loans-section-1-wrapper">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full pt-16 px-5 lg:px-0">
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* <!-- Newsletter Section --> */}
            <div className="pl-0 lg:pl-3">
              <h2 className="text-xl font-bold mb-4">
                Subscribe to our Newsletter for daily Personal Loan insights
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email Id"
                  className="px-4 py-2 border border-blue-900 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-200 w-full sm:w-auto"
                />
                <button className="bg-blue-900 text-white px-6 py-2 rounded-[8px] font-semibold hover:bg-blue-800 transition">
                  Subscribe now
                </button>
              </div>
            </div>

            {/* <!-- Social Icons Section --> */}
            <div className="text-center md:text-center">
              <h3 className="text-lg font-bold mb-4">
                Follow us on
              </h3>
              <div className="flex justify-center md:justify-center gap-4">
                {/* <!-- Replace these with actual icons or SVGs --> */}
                <span className="h-[40px] w-[40px] rounded-full bg-gray-200"></span>
                <span className="h-[40px] w-[40px] rounded-full bg-gray-200"></span>
                <span className="h-[40px] w-[40px] rounded-full bg-gray-200"></span>
                <span className="h-[40px] w-[40px] rounded-full bg-gray-200"></span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="loans-section-1-wrapper">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full pt-16 px-5 lg:px-0 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 blogs">
            {/* <!-- Blog 1 --> */}
            <div className="bg-[#FAFAFA] rounded-[2px] hover:shadow-lg transition border border-gray-200 p-5">
              <Image
                className="w-full object-cover"
                src={'/images/blog/blog_1.png'}
                alt="Credit Card Loan"
                priority
                width={100}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">
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
            <div className="bg-[#FAFAFA] rounded-[2px] hover:shadow-lg transition border border-gray-200 p-5">
              <Image
                className="w-full object-cover"
                src={'/images/blog/blog_2.png'}
                alt="Credit Card Loan"
                priority
                width={100}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">
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
            <div className="bg-[#FAFAFA] rounded-[2px] hover:shadow-lg transition border border-gray-200 p-5">
              <Image
                className="w-full object-cover"
                src={'/images/blog/blog_3.png'}
                alt="Credit Card Loan"
                priority
                width={100}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">
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

             {/* <!-- Blog 4 --> */}
             <div className="bg-[#FAFAFA] rounded-[2px] hover:shadow-lg transition border border-gray-200 p-5">
              <Image
                className="w-full object-cover"
                src={'/images/blog/blog_3.png'}
                alt="Credit Card Loan"
                priority
                width={100}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">
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

        {/* Blog Details */}
        </section>
      </div>
    </>
  );
}
