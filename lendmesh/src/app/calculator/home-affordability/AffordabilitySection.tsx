import {
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
  } from "recharts";
import { formatCurrency } from "./utils/utility";
import { AffordabilityCardDescription } from "./AffordabilityCardDescription";

interface AffordabilitySectionProps {
  title: string;
  chartSeries: { value: number; label: string; amount: number }[];
  // totalPayment: number;
  calculations: {
    maxLoanAmount: number;
    downPayment: number;
    mortgageAnnualRate: number;
    downPaymentRate?: number;
    mortgageLoanYears: number;
  };
}


export default function AffordabilitySection({
    title,
    chartSeries,
    // totalPayment,
    calculations,
  }: AffordabilitySectionProps) {
    const COLORS = ["#F4BE37", "#5388D8", "#47F437", "#00FFFF"];
    interface SumCardProps {
        maxLoanAmount: number;
        downPayment: number;
        // interestRate: number;
      }
      
      function SumCard({
        maxLoanAmount,
        downPayment,
        // interestRate,
      }: SumCardProps) {
        const total = maxLoanAmount + downPayment;
      
        return (
          <>
             <span>
                      Max Loan Amount <strong>{new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(maxLoanAmount)}</strong>
                    </span>{" "}
                    +
                    <span>
                      Down Payment <strong>{new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(downPayment)}</strong>
                    </span>{" "}
                    =
                    <span className="px-3 py-1 bg-[#002144] font-semibold text-white rounded">
                      Total {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(total)}
                    </span>
          </>
        );
      }

  
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center border-gray">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartSeries}
                  dataKey="value"
                  nameKey="label"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                >
                  {chartSeries.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name, props) => [formatCurrency(props.payload.amount), name]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
  
          <div className="flex justify-center items-center gap-2 bg-gray-100 rounded p-1">
            <SumCard
              maxLoanAmount={calculations?.maxLoanAmount}
              downPayment={calculations?.downPayment}
              // interestRate={calculations?.mortgageAnnualRate}
            />
          </div>
          <div className="flex flex-wrap justify-center mt-4 text-xs gap-4">
            <AffordabilityCardDescription
              color="#F4BE37"
              title="Max Loan Amount"
              value={calculations?.maxLoanAmount}
              unit="money"
            />
            <AffordabilityCardDescription
              color="#5388D8"
              title="Down Payment"
              value={calculations?.downPayment}
              unit="money"
              // extraRate={calculations?.downPaymentRate}
            />
            <AffordabilityCardDescription
              color="#47F437"
              title="Mortgage Term"
              value={calculations?.mortgageLoanYears}
              unit="date"
            />
            <AffordabilityCardDescription
              color="#00FFFF"
              title="Interest Rate"
              value={calculations?.mortgageAnnualRate}
              unit="rate"
            />
          </div>
        </div>
      </div>
      
    );
  }
