import Image from "next/image";

export default function HomeBlogs() {
  return (
    <>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center blogs-title-two">Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 blogs">
        {/* <!-- Blog 1 --> */}
        <div className="bg-[#FAFAFA] rounded-[2px] hover:shadow-lg transition border border-gray-200 p-5">
          <Image
            className="w-full object-cover"
            src={"/images/blog/blog_1.png"}
            alt="Credit Card Loan"
            width={100}
            height={100}
            priority
          />
          <div className="py-6">
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
              <span className="ml-1 text-[#4296EA] transition-transform hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>

        {/* <!-- Blog 2 --> */}
        <div className="bg-[#FAFAFA] rounded-[2px] hover:shadow-lg transition border border-gray-200 p-5">
          <Image
            className="w-full object-cover"
            src={"/images/blog/blog_2.png"}
            alt="Credit Card Loan"
            width={100}
            height={100}
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
              <span className="ml-1 text-[#4296EA] transition-transform hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>

        {/* <!-- Blog 3 --> */}
        <div className="bg-[#FAFAFA] rounded-[2px] hover:shadow-lg transition border border-gray-200 p-5">
          <Image
            className="w-full object-cover"
            src={"/images/blog/blog_3.png"}
            alt="Credit Card Loan"
            width={100}
            height={100}
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
              <span className="ml-1 text-[#4296EA] transition-transform hover:translate-x-2">
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
    </>
  );
}
