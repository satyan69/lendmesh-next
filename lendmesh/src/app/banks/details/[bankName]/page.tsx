import Image from "next/image";
import Link from "next/link";

export default function BankDetailsPage() {
  return (
    <>
      <div className="bg-[#002144] page-banner-2 h-[73px]"></div>
      <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col items-center justify-center text-center py-16 px-5">
        <div className="border-b border-[#e3dfdf] pb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-bold">
            Chartway Federal Credit Union
          </h2>
          <p className="mt-8 text-l sm:text-xl mx-auto">
            Chartway Federal Credit Union is a not-for-profit financial
            institution that has been providing financial services to its
            members since 1959. Headquartered in Virginia Beach, Virginia,
            Chartway Credit Union has more than 50 branches and over 600,000
            members nationwide. Chartway Credit Union is committed to helping
            its members achieve their financial goals by offering a range of
            financial products and services, including savings accounts,
            checking accounts, credit cards, loans, and more.
          </p>
        </div>
      </section>
      {/* Type of Loan Offerings */}
      <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full flex flex-col pb-8 px-5">
        {/* Row One */}
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold pb-8">
            Type of Loan Offerings
          </h3>
          <div className="about-loans-card-one">
            <div className="flex text-4xl mb-4 items-end">
              <Link scroll={false} href="/loans/personal_loans">
                <Image
                  className="dark:invert"
                  src={"/images/offerings/personal_loan.svg"}
                  alt="Personal Loan"
                  width={100}
                  height={100}
                  priority
                />
              </Link>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Personal Loan
              </h3>
            </div>
          </div>
          <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
            <div className="bg-white rounded-lg pt-6 pb-2 loans-table-wrapper">
              <div className="w-full">
                {/* Header */}
                <div className="flex font-semibold bg-[#6BE3A2] text-[#002144] py-5 px-4 rounded-tl-[8px] rounded-tr-[8px]">
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
                <div className="border-b-gray px-4 py-5 flex items-center text-sm font-medium">
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
              </div>
            </div>
          </div>
        </div>
        {/*ROw 2 */}
        <div className="pt-16">
          <div className="about-loans-card-one">
            <div className="flex text-4xl mb-4 items-end">
              <Link scroll={false} href="/loans/personal_loans">
                <Image
                  className="dark:invert"
                  src={"/images/offerings/personal_loan.svg"}
                  alt="Personal Loan"
                  width={100}
                  height={100}
                  priority
                />
              </Link>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Personal Loan
              </h3>
            </div>
          </div>
          <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
            <div className="bg-white rounded-lg pt-6 pb-2 loans-table-wrapper">
              <div className="w-full">
                {/* Header */}
                <div className="flex font-semibold bg-[#6BE3A2] text-[#002144] py-5 px-4 rounded-tl-[8px] rounded-tr-[8px]">
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
                <div className="border-b-gray px-4 py-5 flex items-center text-sm font-medium">
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

                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/* <div className="max-w-7xl mx-auto "> */}
                {/* <!-- Card --> */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 border-b-gray">
                  <h3 className="font-bold text-xl md:text-2xl lg:text-3xl col-span-3">
                    Membership Eligibility
                  </h3>
                  <p className="col-span-9">
                    Chartway Federal Credit Union is a not-for-profit financial
                    institution that has been providing financial services to
                    its members since 1959. Headquartered in Virginia Beach,
                    Virginia, Chartway Credit Union has more than 50 branches
                    and over 600,000 members nationwide.
                  </p>
                </div>

                {/* <!-- Repeat for other cards --> */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 py-8 border-b-gray">
                  <h3 className="font-bold text-xl md:text-2xl lg:text-3xl col-span-3">
                    Bank Highlights
                  </h3>
                  <p className="col-span-9">
                    Chartway Federal Credit Union is a not-for-profit financial
                    institution that has been providing financial services to
                    its members since 1959. Headquartered in Virginia Beach,
                    Virginia, Chartway Credit Union has more than 50 branches
                    and over 600,000 members nationwide.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 py-8 border-b-gray">
                  <h3 className="font-bold text-xl md:text-2xl lg:text-3xl col-span-3">
                    Bank Miscellaneous
                  </h3>
                  <p className="col-span-9">
                    Chartway Federal Credit Union is a not-for-profit financial
                    institution that has been providing financial services to
                    its members since 1959. Headquartered in Virginia Beach,
                    Virginia, Chartway Credit Union has more than 50 branches
                    and over 600,000 members nationwide.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 py-8 border-b-gray">
                  <h3 className="font-bold text-xl md:text-2xl lg:text-3xl col-span-3">
                    Highlights of Chartway Federal
                  </h3>
                  <p className="col-span-9">
                    Chartway Federal Credit Union is a not-for-profit financial
                    institution that has been providing financial services to
                    its members since 1959. Headquartered in Virginia Beach,
                    Virginia, Chartway Credit Union has more than 50 branches
                    and over 600,000 members nationwide.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 py-8 border-b-gray">
                  <h3 className="font-bold text-xl md:text-2xl lg:text-3xl col-span-3">
                    Why Choose CF
                  </h3>
                  <p className="col-span-9">
                    Chartway Federal Credit Union is a not-for-profit financial
                    institution that has been providing financial services to
                    its members since 1959. Headquartered in Virginia Beach,
                    Virginia, Chartway Credit Union has more than 50 branches
                    and over 600,000 members nationwide.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 py-8">
                  <h3 className="font-bold text-xl md:text-2xl lg:text-3xl col-span-3">
                    Members Benefit
                  </h3>
                  <p className="col-span-9">
                    Chartway Federal Credit Union is a not-for-profit financial
                    institution that has been providing financial services to
                    its members since 1959. Headquartered in Virginia Beach,
                    Virginia, Chartway Credit Union has more than 50 branches
                    and over 600,000 members nationwide.
                  </p>
                </div>
                {/* </div> */}
                {/*  */}
                {/*  */}
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
