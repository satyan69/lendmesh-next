import React from "react";

interface LoginPopupProps {
  hideLogin: (value: boolean) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ hideLogin }) => {
  const close = () => {
    hideLogin(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
        <div className="flex max-w-4xl w-[98%] bg-white rounded-xl shadow-lg relative">
          {/* Close button */}
          <button
            className="absolute top-[-11px] right-[-11px] w-10 text-3xl h-10 cursor-pointer rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-[#002144] hover:shadow-lg transition duration-300 ease-in-out"
            aria-label="Close"
            onClick={close}
          >
            &times;
          </button>

          {/* Left image panel */}
          <div
            className="w-1/2 bg-cover bg-center hidden md:flex items-center justify-center text-white text-center"
            style={{ backgroundImage: `url('/your-image.jpg')` }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-tl-[8px] rounded-bl-[8px] h-full w-full flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold">
                Hello
                <br />
                Loan Seeker!
              </h2>
              <p className="mt-2 text-sm">
                Your easy loan journey starts right here
              </p>
            </div>
          </div>

          {/* Right form panel */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              Welcome Back
            </h2>
            <p className="text-sm  mb-6 text-center">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-semibold text-[#4296EA] hover:underline"
              >
                Sign up for free
              </a>
            </p>

            {/* Email input */}
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email Id
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Id*"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password input */}
            <div className="mb-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-[8px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-center mb-4">
              <a href="#" className="text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Sign in button */}
            <button className="w-full bg-[#6BE3A2] px-4 lg:px-6 py-2 text-sm rounded-[8px] shadow-lg hover:bg-[#6BE3A2] transition whitespace-nowrap cursor-pointer">
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-2 text-gray-400 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Google Sign In */}
            <button className="w-full border border-gray-300 flex items-center justify-center py-2 rounded hover:bg-gray-50 cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>

      {/* {
// 
// Sign Up Popup - remove Hidden class to show this popup
// 
// } */}
      <div className="hidden fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
        <div className="flex max-w-4xl w-[98%] bg-white rounded-xl shadow-lg relative">
          {/* Close button */}
          <button
            className="absolute top-[-11px] right-[-11px] w-10 text-3xl h-10 cursor-pointer rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-[#002144] hover:shadow-lg transition duration-300 ease-in-out"
            aria-label="Close"
            onClick={close}
          >
            &times;
          </button>

          {/* Left image panel */}
          <div
            className="w-1/2 bg-cover bg-center hidden md:flex items-center justify-center text-white text-center"
            style={{ backgroundImage: `url('/your-image.jpg')` }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-tl-[8px] rounded-bl-[8px] h-full w-full flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold">
                Hello
                <br />
                Loan Seeker!
              </h2>
              <p className="mt-2 text-sm">
                Your easy loan journey starts right here
              </p>
            </div>
          </div>

          {/* Right form panel */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
              Create an Account
            </h2>
            <p className="text-sm  mb-6 text-center">
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold text-[#4296EA] hover:underline"
              >
                login
              </a>
            </p>

            {/* Email input */}
            <div className="mb-4">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name *"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name *"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Last Name
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email *"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password input */}
            <div className="mb-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-[8px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-center mb-4">
              <a href="#" className="text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Sign in button */}
            <button className="w-full bg-[#6BE3A2] px-4 lg:px-6 py-2 text-sm rounded-[8px] shadow-lg hover:bg-[#6BE3A2] transition whitespace-nowrap cursor-pointer">
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-2 text-gray-400 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Google Sign In */}
            <button className="w-full border border-gray-300 flex items-center justify-center py-2 rounded hover:bg-gray-50">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
