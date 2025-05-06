import React from "react";
import { Metadata } from "next";
import HomeData from "./HomeData";

export const metadata: Metadata = {
  title: "Home Affordability Calculator",
  description: "Assess how much mortgage you can afford with our calculator.",
  keywords: "home affordability, mortgage calculator, financial planning"
};

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
        <HomeData />
      </section>
    </>
  );
}
