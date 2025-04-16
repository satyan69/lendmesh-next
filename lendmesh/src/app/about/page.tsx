import { Metadata } from "next";
import step_1 from "./../assets/img/about/about_1.svg";
import step_2 from "./../assets/img/about/about_2.svg";
import step_3 from "./../assets/img/about/about_3.svg";

export const metadata: Metadata = {
  title: "About LendMesh | Your Trusted Loan Aggregator Partner",
  description:
    "At LendMesh, we simplify borrowing by connecting you with trusted lenders, including banks and credit unions. As your loan aggregator partner, we help you compare the best loan options—securely, quickly, and free of charge.",
  keywords:
    "loan aggregator, LendMesh, trusted loan partner, loan comparison, personal loans, mortgage loans, auto loans, student loans, credit unions, banks, secure loans, loan options, borrowing made easy",
  // other metadata
};
const AboutPage = () => {
  return (
    <>
      <div className="bg-[#002144] page-banner loans-banner">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center  text-white text-center py-16 px-6">
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold">
            Welcome to LendMesh
          </h1>
          <p className="mt-8 text-l sm:text-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </section>
      </div>
      <div className="loans-section-1-wrapper">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full pt-16">
          <div className="bg-white rounded-lg px-6 py-6 lg:px-10 mb-4">
            <div className="bg-white py-16 px-4 md:px-10 lg:px-20 text-center">
              {/* <!-- Title Section --> */}
              <h2 className="text-4xl font-bold">About Lendmesh</h2>

              <p className="text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
                At LendMesh, we believe finding the right loan should be simple,
                transparent, and stress-free. Our platform connects you with top
                lenders and credit unions across the USA, offering real-time
                rates and tailored loan options, all in one place.
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
              {/* <div className="mt-10">
                <button typeof="button" className="border-2 border-[#002144] text-[#002144] px-6 py-2 rounded-md hover:bg-[#002144] hover:text-white transition cursor-pointer">
                  Know more
                </button>
              </div> */}
            </div>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}
          <div className="bg-white py-16 px-5 text-center">
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
                  protect it. Your mortgage inquiry here on our platform will
                  not affect your rating.
                </p>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="border border-[#4296EA] rounded-lg p-8 text-center shadow-sm hover:shadow-md transition">
                <h3 className="text-2xl font-bold">
                  Your Information Is Safe With Us
                </h3>
                <p className="mt-4 leading-relaxed">
                  Buying a home is serious business, and we take data security
                  just as seriously. Your information is secured every step of
                  the way.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="px-5">
            <div className="border-2 border-blue-400 flex rounded overflow-hidden shadow-md my-16">
              {/* <!-- Left dark section (can be an image or solid color) --> */}
              <div className="w-1/3 bg-[#001B45]">
                {/* <!-- Optional: Add image here --> */}
              </div>

              <div className="w-2/3 p-6 bg-white">
                <h2 className="text-2xl font-bold text-[#001B45]">
                  Jithendra Mane
                </h2>
                <p className="text-blue-500 text-sm mb-4">Founder</p>
                <p className="text-gray-700 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <section className="bg-[#001B45] py-16">
            <div className="container mx-auto px-5 md:px-10 lg:px-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
                How It All Started
              </h2>
              <div className="grid grid-cols-3 gap-12">
                <div className="mb-4">
                  <span className="text-[#4296EA] font-bold text-xl">01</span>
                  <h6 className="text-white text-lg font-bold mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h6>
                  <p className="text-white text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="col-span-2">
                  <Image
                    className="dark:invert"
                    src={step_1}
                    alt="Personal Loan"
                    priority
                  />
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-2 gap-12 justify-items-end items-end">
                  <Image
                    className="dark:invert"
                    src={step_2}
                    alt="Personal Loan"
                    priority
                  />
                </div>
                <div className="mb-4">
                  <span className="text-[#4296EA] font-bold text-xl">02</span>
                  <h6 className="text-white text-lg font-bold mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h6>
                  <p className="text-white text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-12 text-center justify-items-center items-center">
                <div className="mb-4">
                  <Image
                    className="dark:invert"
                    src={step_3}
                    alt="Personal Loan"
                    priority
                  />
                </div>
                <div className="mb-4">
                  <span className="text-[#4296EA] font-bold text-xl">03</span>
                  <h6 className="text-white text-lg font-bold mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h6>
                  <p className="text-white text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
export default AboutPage;
