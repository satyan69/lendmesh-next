import type { Metadata } from "next";
import { redirect } from "next/navigation";
import "./loans.scss"; // Import your CSS file here

type Props = {
  params: Promise<{ type: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { type } = await params;
  const meta = loanMetaData[type as keyof typeof loanMetaData] || {
    title: "Default Loan Page",
    description: "Explore various loan options tailored for your needs.",
    keywords: "loans, finance, lending",
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}
const loanMetaData = {
  vehicle_loans: {
    title:
      "Find the Best Auto Loan Rates | Trusted Banks & Credit Unions – LendMesh",
    description:
      "Looking for the best vehicle loan? LendMesh connects you with top banks and credit unions offering competitive auto loan rates and terms for all budgets.",
    keywords:
      "car loans, vehicle financing, auto loan comparison tool, best car loan offers, bank vs credit union car loans, competitive car loan rates, RV loan rates, boat loan offers, motorcycle loan comparison, RV loan comparison, boat loans for new and used boats, motorcycle financing options",
  },
  mortgage_loans: {
    title: "Find Your Best Mortgage Loan | Compare Rates & Terms – LendMesh",
    description:
      "Looking for the best mortgage loan? LendMesh connects you to top banks and credit unions with low-interest rates, flexible terms, and reliable comparison tools.",
    keywords:
      "mortgage loan offers, best interest rates, fixed-term home loans, variable-rate mortgages, compare home loans, competitive mortgage terms, secure online mortgage tools, compare mortgage loans, top mortgage lenders",
  },
  student_loans: {
    title:
      "Student Loan Comparison Made Easy | Low-Interest Loans for Education",
    description:
      "Looking for the best student loan? LendMesh connects you with top lenders offering competitive rates and terms tailored for students and parents",
    keywords:
      "Compare student loans, top lenders for education loans, best education loan rates, student loan options, federal vs private loans, affordable student loans, flexible loan terms",
  },
  home_equity_loans: {
    title:
      "Find the Best Home Equity Loans | Flexible Rates & Terms – LendMesh",
    description:
      "Explore LendMesh's home equity loan comparison tool to find the best rates and terms from leading banks and credit unions, ensuring a secure and informed decision.",
    keywords:
      "home equity loan comparison, best home equity loan rates, fixed-rate home equity loans, variable-rate home equity loans, bank home equity loans, home equity lines of credit (HELOC), credit union home equity loans, low-interest home equity loans, home financing options",
  },
  personal_loans: {
    title:
      "Compare Personal Loan Rates from Top Banks & Credit Unions | LendMesh",
    description:
      "Easily compare personal loan offers from leading banks and credit unions nationwide with LendMesh. Find competitive interest rates and terms tailored to your financial needs, ensuring a secure and informed borrowing experience.",
    keywords:
      "personal loan comparison, best personal loan rates, bank personal loans, credit union personal loans, low-interest personal loans, unsecured personal loans, loan terms, interest rates, LendMesh",
  },
};
export default async function LoansPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  if (!type) {
    redirect("/");
  }
  return (
    <>
      {/* Banner Section */}
      <div className="bg-[#002144] page-banner loans-banner">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center  text-white text-center py-16 px-6">
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold">Personal Loan</h1>
          <p className="mt-8 text-l sm:text-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </section>
      </div>

      {/* Main Content Section */}
      <div className="loans-section-1-wrapper">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full pt-16">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[150px]">
                <label className="block text-sm font-semibold">Zip code</label>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="flex-1 min-w-[150px] select-wrapper">
                <label className="block text-sm font-semibold">
                  Credit score
                </label>
                <select className="mt-1 p-2 border rounded-md w-full">
                  <option>Select</option>
                  <option>600+</option>
                  <option>700+</option>
                </select>
              </div>
              <div className="flex-1 min-w-[150px] select-wrapper">
                <label className="block text-sm font-semibold">Sort by</label>
                <select className="mt-1 p-2 border rounded-md w-full">
                  <option>Select</option>
                  <option>APR</option>
                  <option>Term</option>
                </select>
              </div>
              <div className="flex-1 min-w-[150px] select-wrapper">
                <label className="block text-sm font-semibold">Sort type</label>
                <select className="mt-1 p-2 border rounded-md w-full">
                  <option>Select</option>
                  <option>Ascending</option>
                  <option>Descending</option>
                </select>
              </div>
              <button type="button" className="bg-[#2F435F] hover:bg-[#2F435F] text-white font-bold py-2 px-4 rounded self-end cursor-pointer">
                Apply
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Table */}
      <div className="loans-section-2-wrapper loans-table-wrapper-parent">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <div className="bg-white rounded-lg pt-6 pb-2 loans-table-wrapper">
            <div className="w-full">
              {/* Header */}
              <div className="flex font-semibold bg-[#6BE3A2] text-[#002144] py-3 px-4 rounded-tl-[8px] rounded-tr-[8px]">
                <div className="w-[25%] pr-2">Lending Partner</div>
                <div className="w-[15%] pr-2">APR</div>
                <div className="w-[20%] pr-2">Term</div>
                <div className="w-[20%] pr-2">Amount</div>
                <div className="w-[15%] pr-2">Link</div>
                <div className="w-[5%] flex justify-center items-center">
                  Info
                </div>
              </div>

              {/* Rows */}
              <div className="border-b border-gray px-4 py-3 flex items-center text-sm font-medium">
                <div className="w-[25%] pr-2">University Credit Union 1</div>
                <div className="w-[15%] pr-2">10.23% - 18%</div>
                <div className="w-[20%] pr-2">2.1yrs - 7yrs</div>
                <div className="w-[20%] pr-2">$25,000</div>
                <div className="w-[15%] pr-2">∞</div>
                <div className="w-[5%] flex justify-center items-center cursor-pointer">
                  <svg
                    className="size-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="px-4 py-3 flex items-center text-sm font-medium">
                <div className="w-[25%] pr-2">University Credit Union 2</div>
                <div className="w-[15%] pr-2">10.23% - 18%</div>
                <div className="w-[20%] pr-2">2.1yrs - 7yrs</div>
                <div className="w-[20%] pr-2">$25,000</div>
                <div className="w-[15%] pr-2">∞</div>
                <div className="w-[5%] flex justify-center items-center cursor-pointer">
                  <svg
                    className="size-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Second Table Section */}
              <div>
                <div className="flex font-semibold text-sm bg-medium-blue border-gray py-3 px-5 rounded-tl-[8px] rounded-tr-[8px]">
                  <div className="w-[25%] pr-2">Program Name</div>
                  <div className="w-[15%] pr-2">APR</div>
                  <div className="w-[20%] pr-2">Term</div>
                  <div className="w-[20%] pr-2">Amount</div>
                  <div className="w-[15%] pr-2">Link</div>
                </div>

                <div className="px-5 bg-light-blue rounded-bl-[8px] rounded-br-[8px] font-medium">
                  <div className="flex text-sm border-b border-gray py-3">
                    <div className="w-[25%] pr-2">Personal Loan</div>
                    <div className="w-[15%] pr-2">10.23% - 18%</div>
                    <div className="w-[20%] pr-2">2.1yrs - 7yrs</div>
                    <div className="w-[20%] pr-2">$25,000</div>
                    <div className="w-[15%] pr-2">∞</div>
                  </div>
                  <div className="flex text-sm border-b border-gray py-3 font-medium">
                    <div className="w-[25%] pr-2">Personal Loan</div>
                    <div className="w-[15%] pr-2">10.23% - 18%</div>
                    <div className="w-[20%] pr-2">2.1yrs - 7yrs</div>
                    <div className="w-[20%] pr-2">$25,000</div>
                    <div className="w-[15%] pr-2">∞</div>
                  </div>
                  <p className="py-4 px-2 text-sm">
                    <strong className="mb-2">Note:</strong>
                    <span className="block pt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Rows */}
            <div className="border-b border-gray px-4 py-3 flex items-center text-sm font-medium">
              <div className="w-[25%] pr-2">University Credit Union 1</div>
              <div className="w-[15%] pr-2">10.23% - 18%</div>
              <div className="w-[20%] pr-2">2.1yrs - 7yrs</div>
              <div className="w-[20%] pr-2">$25,000</div>
              <div className="w-[15%] pr-2">∞</div>
              <div className="w-[5%] flex justify-center items-center cursor-pointer">
                <svg
                  className="size-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {/* Last columns should not have border */}
            <div className="px-4 py-3 flex items-center text-sm font-medium">
              <div className="w-[25%] pr-2">University Credit Union 1</div>
              <div className="w-[15%] pr-2">10.23% - 18%</div>
              <div className="w-[20%] pr-2">2.1yrs - 7yrs</div>
              <div className="w-[20%] pr-2">$25,000</div>
              <div className="w-[15%] pr-2">∞</div>
              <div className="w-[5%] flex justify-center items-center cursor-pointer">
                <svg
                  className="size-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6">
              <button
                type="button"
                className="bg-[#F4F9FE] hover:bg-[#6BE3A2] rounded-full px-2 py-2 cursor-pointer"
              >
                <svg
                  className="size-8 transform rotate-90"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className="text-sm px-5">Page 1 of 5</span>
              <button
                type="button"
                className="bg-[#F4F9FE] hover:bg-[#6BE3A2] text-xl rounded-full px-2 py-2 cursor-pointer"
              >
                <svg
                  className="size-8 transform -rotate-90"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
      <p className="py-2"></p>
    </>
  );
}
