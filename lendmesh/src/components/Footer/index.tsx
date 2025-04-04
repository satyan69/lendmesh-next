import "./Footer.scss";
import Image from "next/image";
import facebook from "./../../app/assets/img/icons/facebook_icon.svg";
import twitter from "./../../app/assets/img/icons/twitter_icon.svg";
import instagram from "./../../app/assets/img/icons/instagram_icon.svg";
export default function Footer() {
  return (
    <>
      {/*
       **
       **
       **/}
      {/* Join Our Community */}
      <div className="relative bg-cover bg-center h-screen lm-join-now">
        {/* <!-- Overlay --> */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

        {/* <!-- Content --> */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Community
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </p>

          <a
            href="#"
            className="bg-green-400 hover:bg-green-500 text-black font-semibold py-3 px-8 rounded-lg shadow-lg transition"
          >
            Join now
          </a>
        </div>
      </div>
      <footer className="bg-blue-500 text-white py-12 px-6 footer">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* <!-- Left Section: Text Block --> */}
          <div className="space-y-4">
            {/* <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </p> */}
            <div className="text-white p-4 flex flex-col items-center sm:items-start space-y-3 w-full max-w-sm mx-auto">
              <p className="text-lg font-semibold text-center sm:text-left">
                Sign up for daily updates
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-2 w-full">
                <input
                  type="email"
                  placeholder="Email Id"
                  className="border border-white bg-transparent px-4 py-2 rounded-md text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white w-full"
                />
                <button
                  type="button"
                  className="bg-white text-blue-500 px-5 py-2 rounded-md font-semibold hover:bg-gray-100 mt-2 sm:mt-0 w-full sm:w-auto"
                >
                  Sign up
                </button>
              </div>
            </div>

            <div className="flex items-center justify-start space-x-8">
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/people/LendMesh/100077588715363/#"
                  target="_blank"
                  rel="no"
                  className="w-16 h-16 bg-[rgba(217,217,217,0.33)] hover:bg-[#6BE3A2] bg-opacity-33 rounded-full text-white flex items-center justify-center"
                >
                  <Image
                    className="dark:invert w-[70%] hover:text-white"
                    src={facebook}
                    alt="Facebook"
                    priority
                  />
                </a>
              </div>

              <div className="flex items-center">
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2FLendMesh"
                  target="_blank"
                  className="w-16 h-16 bg-[rgba(217,217,217,0.33)] hover:bg-[#6BE3A2] bg-opacity-33 rounded-full text-white flex items-center justify-center"
                >
                  <Image
                    className="dark:invert w-[40%] hover:text-white"
                    src={twitter}
                    alt="twitter"
                    priority
                  />
                </a>
              </div>

              <div className="flex items-center">
                <a
                  href="https://www.instagram.com/lendmesh/"
                  target="_blank"
                  className="w-16 h-16 bg-[rgba(217,217,217,0.33)] hover:bg-[#6BE3A2] bg-opacity-33 rounded-full text-white flex items-center justify-center"
                >
                  <Image
                    className="dark:invert w-[60%] hover:text-white"
                    src={instagram}
                    alt="instagram"
                    priority
                  />
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Middle Section: Links (Loans, Discover, Security) --> */}
          <div className="grid grid-cols-3 gap-12">
            {/* <!-- Loans Section --> */}
            <div>
              <h3 className="font-bold text-xl">Loans</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    Personal Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    Vehicle Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    Student Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    Mortgage Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    Home Equity Loans
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Discover Section --> */}
            <div>
              <h3 className="font-bold text-xl">Discover</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Security & Protection Section --> */}
            <div>
              <h3 className="font-bold text-xl">Security & Protection</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#6BE3A2] transition">
                    Student
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Right Section: Logo and Social Media --> */}
        <div className="flex flex-col items-center justify-center space-y-4 footer-logo"></div>
      </footer>
    </>
  );
}
