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
            <>
            <span>
                      Gross Income <strong>{new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(totalGrossIncome)}</strong>
                    </span>{" "}
                    -
                    <span>
                      Debts <strong>{new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(monthlyGrossPay)}</strong>
                    </span>{" "}
                    =
                    <span className="px-3 py-1 rounded font-semibold bg-[#002144] font-semibold text-white rounded">
                      Net Pay {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(netMonthlyPay)}
                    </span>
            </>
        );
      }
    const COLORS = ["#F4BE37", "#5388D8", "#00FFFF", "#47F437"];
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center border-gray">
        <h3 className="text-xl font-bold mb-4">Income vs Expense</h3>
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
            <IncomeBreakdownCard
              totalGrossIncome={totalCalculationState.totalGrossIncome}
              monthlyGrossPay={totalCalculationState.totalMonthlyDebts}
              netMonthlyPay={totalCalculationState.netMonthlyPay - totalCalculationState.totalMonthlyDebts}
            />
          </div>
          <div className="flex flex-wrap justify-center mt-4 text-xs gap-4">
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