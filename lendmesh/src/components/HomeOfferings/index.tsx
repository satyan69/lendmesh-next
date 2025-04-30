import Image from "next/image";
import Link from "next/link";


export default function HomeOfferings() {
    return (<div className="home-banner-part-2 py-16 px-6">
        <div className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-30 mb-12">
            Our Offerings
          </h2>

          {/* <!-- Container --> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {/* <!-- Personal Loan --> */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-105 transition">
              <Link scroll={false} href="/loans/personal_loans">
              <Image
                className="dark:invert"
                src={'/images/offerings/personal_loan.svg'}
                alt="Personal Loan"
                width={100}
                height={100}
                priority
              />
              </Link>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Personal Loan</h3>
              <p className="text-gray-100 hover:text-white">
                Whether it&apos;s home improvements, debt consolidation, or
                unexpected expenses, we connect you with affordable personal
                loan options with no hidden fees.
              </p>
            </div>

            {/* <!-- Vehicle Loan --> */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-105 transition">
            <Link scroll={false} href="/loans/vehicle_loans">
              <Image
                className="dark:invert"
                src={'/images/offerings/vehicle_loan.svg'}
                alt="Vehicle Loan"
                width={100}
                height={100}
                priority
              />
              </Link>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Vehicle Loan</h3>
              <p className="text-gray-100 hover:text-white">
                New, used, or refinancing, we find you the best auto loan
                rates from trusted lenders, so you can save more.
              </p>
            </div>

            {/* <!-- Student Loan --> */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-105 transition">
            <Link scroll={false} href="/loans/student_loans">
              <Image
                className="dark:invert"
                src={'/images/offerings/student_loan.svg'}
                alt="Student Loan"
                width={100}
                height={100}
                priority
              />
              </Link>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Student Loan</h3>
              <p className="text-gray-100 hover:text-white">
                Find the best student loan options for college or refinancing,
                with lower rates and flexible repayment plans.
              </p>
            </div>

            {/* <!-- Mortgage Loan --> */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-105 transition">
            <Link scroll={false} href="/loans/mortgage_loans">
              <Image
                className="dark:invert"
                src={'/images/offerings/mortagage_loan.svg'}
                alt="Mortagage Loan"
                width={100}
                height={100}
                priority
              />
              </Link>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Mortgage Loan</h3>
              <p className="text-gray-100 hover:text-white">
                Whether you&apos;re a first-time homebuyer or refinancing, we help
                you find the lowest mortgage rates from top lenders.
              </p>
            </div>

            {/* <!-- Home Equity Loan --> */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-105 transition">
            <Link scroll={false} href="/loans/home_equity_loans">
              <Image
                className="dark:invert"
                src={'/images/offerings/home_equity_loan.svg'}
                alt="Home Equity Loan"
                width={100}
                height={100}
                priority
              />
               </Link>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Home Equity Loan</h3>
              <p className="text-gray-100 hover:text-white">
                Access funds for major expenses or investments with low-rate
                home equity loans and HELOCs.
              </p>
            </div>

            {/* <!-- Credit Card Loan --> */}
            <div className="flex flex-col items-center text-center p-8 rounded-lg hover:shadow-md hover:scale-103 transition">
              <Image
                className="dark:invert"
                src={'/images/offerings/credit_card_loan.svg'}
                alt="Credit Card Loan"
                width={100}
                height={100}
                priority
              />
              <h3 className="text-xl md:text-2xl font-bold mb-4">Credit Card Loan</h3>
              <p className="text-gray-100 hover:text-white">
                Enjoy flexible credit options with competitive rates, perfect
                for your everyday expenses.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}