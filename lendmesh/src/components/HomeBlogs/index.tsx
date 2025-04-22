import Image from "next/image";
import blog1 from "../../app/assets/img/blog/blog_3.png";
import blog2 from "../../app/assets/img/blog/blog_2.png";
import blog3 from "../../app/assets/img/blog/blog_1.png";

export default function HomeBlogs() {
    return (
        <>
        <h2 className="text-4xl font-bold text-center mb-12">Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 blogs">
          {/* <!-- Blog 1 --> */}
          <div className="bg-[#FAFAFA] rounded-[2px] hover:shadow-lg transition border border-gray-200 p-5">
            <Image
              className="w-full object-cover"
              src={blog1}
              alt="Credit Card Loan"
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
              src={blog2}
              alt="Credit Card Loan"
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
              src={blog3}
              alt="Credit Card Loan"
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
    )
}