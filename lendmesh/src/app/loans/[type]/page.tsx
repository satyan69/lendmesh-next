import type { Metadata } from "next";
import "./loans.scss"; // Import your CSS file here
import LoanList from './components/LoanList';
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
async function getInitialLoans(loanType: string) {
  const params = new URLSearchParams({
    loanType,
    zip: '',
    creditScore: '780',
    sortBy: 'APR',
    sortType: 'asc',
    page: '1',
  });
  //console.log(`url - ${process.env.NEXT_PUBLIC_BASE_URL}/api/loans?${params.toString()}`)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/loans?${params.toString()}`, {
    cache: 'no-store',
  });

  return res.json();
}
export default async function LoansPage({ params }: { params: { type: string } }) {
  const { type } = await params;
  const initialData = await getInitialLoans(type);
  // console.log('initialData', initialData)
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
      <LoanList initialData={initialData} loanType={type} />
    </>
  );
}