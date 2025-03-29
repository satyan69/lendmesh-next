import "./Footer.scss";
import Image from "next/image";
import facebook from "./../../app/assets/img/icons/facebook_icon.svg";
import twitter from "./../../app/assets/img/icons/twitter_icon.svg";
import instagram from "./../../app/assets/img/icons/instagram_icon.svg";
export default function Footer() {
  return (
    <>
      <footer className="bg-blue-500 text-white py-12 px-6 footer">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          {/* <!-- Left Section: Text Block --> */}
          <div className="space-y-4">
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </p>
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
                  <a href="#" className="hover:text-blue-300 transition">
                    Personal Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Vehicle Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Student Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Mortgage Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
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
                  <a href="#" className="hover:text-blue-300 transition">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
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
                  <a href="#" className="hover:text-blue-300 transition">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition">
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
