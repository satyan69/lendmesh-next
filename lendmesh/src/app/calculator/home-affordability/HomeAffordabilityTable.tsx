import { formatCurrency } from "./utils/utility";

export default function HomeAffordabilityTable({affordabilityCalculations}: { affordabilityCalculations: any[] }) {
    
      function AffordabilityLabel({ index }: { index: number }) {
        const labels = ["BEST", "GOOD", "NORMAL", "BAD", "WORST"];
        const colors = [
          "bg-green-500", // BEST
          "bg-green-400", // GOOD
          "bg-blue-400", // NORMAL
          "bg-orange-400", // BAD
          "bg-red-500", // WORST
        ];
      
        return (
          <span
            className={`inline-block w-[75px] text-center  text-white text-xs px-2 py-1 rounded ${colors[index]}`}
          >
            {labels[index]}
          </span>
          
        );
      }
    return (
        <div className="bg-white p-6 rounded-lg shadow border-gray">
                        <h3 className="text-xl font-bold mb-4">Best Loan Options</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="font-semibold bg-[#6BE3A2] py-3 px-4 rounded-tl-[8px]">
                                <th className="px-4 py-2 rounded-tl-[8px]">Leftover</th>
                                <th className="px-4 py-2">Max Loan Value</th>
                                <th className="px-4 py-2">Max Loan Amount</th>
                                <th className="px-4 py-2">Down Payment %</th>
                                <th className="px-4 py-2">Monthly Mortgage</th>
                                <th className="px-4 py-2">Leftover</th>
                                <th className="px-4 py-2 text-center rounded-tr-[8px]">
                                  Ambivalence
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                            {affordabilityCalculations.map((calc, index) => (
                              <tr className="bg-green-100 hover:bg-gray-100" key={index}>
                                <td className="px-4 py-2">{calc.title}</td>
                                <td className="px-4 py-2">{formatCurrency(calc.maxHomeValue)}</td>
                                <td className="px-4 py-2">{formatCurrency(calc.maxLoanAmount)}</td>
                                <td className="px-4 py-2">{calc.downPaymentRate.toFixed(2)}%</td>
                                <td className="px-4 py-2">{formatCurrency(calc.monthlyMortgagePayment)}</td>
                                <td className="px-4 py-2">{formatCurrency(calc.savings)}</td>
                                <td className="px-4 py-2 text-center">
                                  {/* <span className="inline-block w-[75px] text-center bg-green-500 text-white text-xs px-2 py-1 rounded">
                                    BEST
                                  </span> */}
                                  <AffordabilityLabel index={index} />
                                </td>
                              </tr>
                            ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
    )
}