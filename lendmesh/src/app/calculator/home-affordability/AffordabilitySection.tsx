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
  totalPayment: number;
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
    totalPayment,
    calculations,
  }: AffordabilitySectionProps) {
    const COLORS = ["#F4BE37", "#5388D8", "#47F437", "#00FFFF"];
    interface SumCardProps {
        maxLoanAmount: number;
        downPayment: number;
        interestRate: number;
      }
      
      function SumCard({
        maxLoanAmount,
        downPayment,
        interestRate,
      }: SumCardProps) {
        const total = maxLoanAmount + downPayment;
      
        return (
          <div className="my-4 space-y-2">
            <div className="text-center">
              {/* <span className="text-2xl font-bold">{interestRate.toFixed(2)}%</span> */}
            </div>
            <div className="rounded-lg bg-[#f1eff2] p-4 dark:bg-primary">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs font-medium">
                    Max Loan Amount
                  </p>
                  <p className="font-semibold">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(maxLoanAmount)}
                  </p>
                </div>
                <div className="text-muted-foreground text-xl">+</div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs font-medium">
                    Down Payment
                  </p>
                  <p className="font-semibold">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(downPayment)}
                  </p>
                </div>
                <div className="text-muted-foreground text-xl">=</div>
                <div className="flex-1 rounded-lg bg-[#1a2542] p-3 text-white">
                  <p className="text-sm font-medium">Total</p>
                  <p className="text-md font-semibold">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(total)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }

  
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center border-gray">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
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
  
          <div className="mt-4 text-center">
            {/* <p className="text-sm">Max Home Value</p>
            <h3 className="text-2xl font-bold">{formatCurrency(totalPayment)}</h3> */}
            <SumCard
              maxLoanAmount={calculations?.maxLoanAmount}
              downPayment={calculations?.downPayment}
              interestRate={calculations?.mortgageAnnualRate}
            />
          </div>
          <div className="mt-4 grid w-full grid-cols-2 gap-4">
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
              extraRate={calculations?.downPaymentRate}
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
