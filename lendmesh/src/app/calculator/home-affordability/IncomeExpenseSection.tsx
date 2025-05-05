import {
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
  } from "recharts";
import { formatCurrency } from "./utils/utility";
import { AffordabilityCardDescription } from "./AffordabilityCardDescription";

export default function IncomeExpenseSection({
    chartSeries,
    netMonthlyPay,
    totalCalculationState,
    currentAffordabilityCalculations
  }: {
    chartSeries: { value: number; label: string; amount: number }[];
    netMonthlyPay: number;
    totalCalculationState: {
      totalGrossIncome: number;
      totalMonthlyDebts: number;
      netMonthlyPay: number;
      totalHousingExpenses: number;
      totalMonthlyHousingExpenses: number;
    };
    currentAffordabilityCalculations: {
      monthlyMortgagePayment: number;
      savings: number;
    };
  }) {
      interface IncomeBreakdownProps {
        totalGrossIncome: number;
        monthlyGrossPay: number;
        netMonthlyPay: number;
      }
      function IncomeBreakdownCard({
        totalGrossIncome,
        monthlyGrossPay,
        netMonthlyPay,
      }: IncomeBreakdownProps) {
        return (
          <div className="my-4 w-full">
            <div className="w-full rounded-lg bg-[#f1eff2] p-4 dark:bg-primary">
              <div className="flex flex-col items-stretch justify-between gap-4 md:flex-row">
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-muted-foreground w-full text-xs font-medium">
                    Gross Income
                  </p>
                  <p className="font-semibold">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(totalGrossIncome)}
                  </p>
                </div>
                <div className="flex items-center justify-center text-xl md:px-2">-</div>
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-muted-foreground text-xs font-medium">
                    Monthly Debts
                  </p>
                  <p className="font-semibold">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(monthlyGrossPay)}
                  </p>
                </div>
                <div className="flex items-center justify-center text-xl md:px-2">=</div>
                <div className="flex flex-1 flex-col justify-center rounded-lg bg-[#1a2542] p-3 text-white">
                  <p className="text-xs font-medium">Net Pay</p>
                  <p className="text-md font-semibold">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(netMonthlyPay)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }
    const COLORS = ["#F4BE37", "#5388D8", "#00FFFF", "#47F437"];
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center border-gray">
        <h2 className="mb-4 text-center text-xl font-bold">Income vs Expense</h2>
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
            <IncomeBreakdownCard
              totalGrossIncome={totalCalculationState.totalGrossIncome}
              monthlyGrossPay={totalCalculationState.totalMonthlyDebts}
              netMonthlyPay={totalCalculationState.netMonthlyPay - totalCalculationState.totalMonthlyDebts}
            />
          </div>
          <div className="mt-4 grid w-full grid-cols-2 gap-4">
            <AffordabilityCardDescription
              color="#F4BE37"
              title="Monthly Mortgage (EMI)"
              value={currentAffordabilityCalculations?.monthlyMortgagePayment}
              unit="money"
            />
            <AffordabilityCardDescription
              color="#5388D8"
              title="Housing Expense"
              value={totalCalculationState.totalHousingExpenses}
              unit="money"
            />
            <AffordabilityCardDescription
              color="#00FFFF"
              title="New House Expense"
              value={totalCalculationState.totalMonthlyHousingExpenses}
              unit="money"
            />
            <AffordabilityCardDescription
              color="#47F437"
              title="Leftover"
              value={currentAffordabilityCalculations?.savings}
              unit="money"
            />
          </div>
        </div>
      </div>
    );
  }