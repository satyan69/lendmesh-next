import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LendMesh | Your Trusted Loan Aggregator Partner",
  description: "At LendMesh, we simplify borrowing by connecting you with trusted lenders, including banks and credit unions. As your loan aggregator partner, we help you compare the best loan options—securely, quickly, and free of charge.",
  keywords: "loan aggregator, LendMesh, trusted loan partner, loan comparison, personal loans, mortgage loans, auto loans, student loans, credit unions, banks, secure loans, loan options, borrowing made easy",
  // other metadata
};
const AboutPage = () => {
  return (
    <>  
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>About Us Page</h1>
        </main>
      </div>
    </>
  );
};
export default AboutPage;