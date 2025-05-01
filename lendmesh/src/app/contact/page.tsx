import React from "react";
import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | LendMesh",
  description: "This is Contact Page for LendMesh",
  // other metadata
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#002144] page-banner-1">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center  text-white text-center py-16 px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold">
            Connect with us!
          </h2>
          <p className="mt-8 text-l sm:text-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </section>
      </div>
      <div className="loans-section-1-wrapper">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full pt-16 px-5 lg:px-0">
          <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* <!-- Contact Form --> */}
            <Contact />

            {/* <!-- Contact Info --> */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
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
                <h3 className="font-bold">Social Media</h3>
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
