import React from "react";

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#002144] page-banner loans-banner">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center  text-white text-center py-16 px-6">
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold">
            Connect with us!
          </h1>
          <p className="mt-8 text-l sm:text-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </section>
      </div>
      <div className="loans-section-1-wrapper">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full pt-16 px-6 lg:px-0">
          <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* <!-- Contact Form --> */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Get In Touch With Us
              </h2>
              <form className="space-y-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-1/2 px-4 py-2 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-1/2 px-4 py-2 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-2 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* <!-- Contact Info --> */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Contact Details
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>

              <div className="flex items-stretch border border-[#4296EA] rounded-md overflow-hidden mb-6">
                {/* Left colored strip */}
                <div className="bg-[#4296EA] w-3 rounded-l-md"></div>

                {/* Email content */}
                <div className="px-5 py-5">
                  <h3 className="font-bold leading-none mb-1">
                    Email
                  </h3>
                  <p className="text-sm">lendmesh@gmail.com</p>
                </div>
              </div>

              <hr className="mb-4 border-[#4296EA]" />
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-blue-900 font-bold">Social Media</h3>
                <div className="flex gap-4">
                  <span className="h-[40px] w-[40px] rounded-full bg-gray-200"></span>
                  <span className="h-[40px] w-[40px] rounded-full bg-gray-200"></span>
                  <span className="h-[40px] w-[40px] rounded-full bg-gray-200"></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
