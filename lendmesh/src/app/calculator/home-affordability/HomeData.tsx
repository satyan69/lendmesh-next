"use client"
import { useState, useEffect, useCallback } from "react";
import * as formulajs from "@formulajs/formulajs";
import AffordabilitySection from "./AffordabilitySection";
import IncomeExpenseSection from "./IncomeExpenseSection";
import HomeAffordabilityTable from "./HomeAffordabilityTable";

const initialAffordabilityState = {
    mainPersonIncome: 8750,
    monthlydebets: 0,
    maximumHousingExpense: 3198,
    monthlyPropertyTax: 717,
    closingCost: 10000,
    mortgageAnnualRate: 6.25,
    mortgageLoanYears: 30,
    availableFunds: 92000,
  };
  
  enum AffordabilityLabels {
    mainPersonIncome = "Net Monthly Pay (Gross Income)",
    monthlydebets = "Total Monthly Debts (Loans, Child Support)",
    maximumHousingExpense = "Total Housing Expense without Rent",
    monthlyPropertyTax = "New Home Expenses (HOA, Taxes, Insurance)",
    closingCost = "Total Closing Cost",
    mortgageAnnualRate = "Annual Interest Rate %",
    mortgageLoanYears = "Term of Mortgage (years)",
    availableFunds = "Available Funds (Savings for downpayment)",
  }
  const initialTotalCalculationState = {
    totalGrossIncome: initialAffordabilityState.mainPersonIncome,
    monthlyGrossPay: 0,
    netMonthlyPay: 0,
    netSavings: 0,
    totalMonthlyDebts: initialAffordabilityState.monthlydebets,
    totalHousingExpenses: initialAffordabilityState.maximumHousingExpense,
    totalMonthlyHousingExpenses: 0,
  };

export default function HomeData() {
    const [tableIndex, setTableIndex] = useState(1);
  
    const [affordabilityState, setAffordabilityState] = useState(() => {
      if (typeof window !== "undefined") {
        const savedState = localStorage.getItem("affordabilityState");
        return savedState ? JSON.parse(savedState) : initialAffordabilityState;
      }
      return initialAffordabilityState;
    });
    const [totalCalculationState, setTotalCalculationState] = useState(
      initialTotalCalculationState,
    );
    const [affordabilityCalculations, setAffordabilityCalculations] = useState<
      {
        title: string;
        emoji: any;
        monthlyMortgagePayment: number;
        maxLoanAmount: number;
        maxHomeValue: number;
        downPayment: any;
        downPaymentRate: number;
        savings: number;
        totalPayment: number;
        netMonthlyPay: any;
        mortgageAnnualRate: any;
        mortgageLoanYears: any;
        closingCost: any;
      }[]
    >([]);
    const [monthlyChartSeries, setMonthlyChartSeries] = useState<{ label: string; name: string; value: number; amount: number; }[]>([]);
    const [monthlyIncomeChartSeries, setMonthlyIncomeChartSeries] = useState<{ label: string; name: string; value: number; amount: number; }[]>([]);
  
    const calculateAffordability = useCallback(() => {
      const {
        mainPersonIncome,
        monthlydebets,
        maximumHousingExpense,
        monthlyPropertyTax,
        closingCost,
        mortgageAnnualRate,
        mortgageLoanYears,
        availableFunds,
      } = affordabilityState;
  
      const totalGrossIncome = mainPersonIncome;
      const totalMonthlyDebts = monthlydebets;
      const totalMonthlyHousingExpenses = monthlyPropertyTax;
      const totalClosingCost = closingCost;
  
      const monthlyGrossPay = Math.ceil(totalGrossIncome / 12);
      const netMonthlyPay = mainPersonIncome;
  
      const totalHousingExpenses = maximumHousingExpense
  
      const totalIncome =
        totalMonthlyDebts + maximumHousingExpense + totalMonthlyHousingExpenses;
      const netSavings = netMonthlyPay - totalIncome;
  
      setTotalCalculationState({
        totalGrossIncome,
        monthlyGrossPay,
        netMonthlyPay,
        netSavings,
        totalMonthlyDebts,
        totalHousingExpenses: maximumHousingExpense,
        totalMonthlyHousingExpenses,
      });
  
      const newAffordabilityCalculations = calculateAffordabilityOptions(
        netSavings,
        mortgageAnnualRate,
        mortgageLoanYears,
        availableFunds,
        totalClosingCost,
        netMonthlyPay,
      );
  
      setAffordabilityCalculations(newAffordabilityCalculations);
  
      updateChartSeries(
        newAffordabilityCalculations,
        tableIndex,
        netMonthlyPay,
        totalMonthlyDebts,
        totalHousingExpenses,
        totalMonthlyHousingExpenses,
        netSavings,
        totalCalculationState
      );
    }, [affordabilityState, tableIndex]);
  
    useEffect(() => {
      calculateAffordability();
    }, [calculateAffordability]);
  
    useEffect(() => {
      localStorage.setItem(
        "affordabilityState",
        JSON.stringify(affordabilityState),
      );
      return () => {
        localStorage.removeItem("affordabilityState");
      }
    }, [affordabilityState]);

    const calculateAffordabilityOptions = (
        netSavings: number,
        mortgageAnnualRate: number,
        mortgageLoanYears: number,
        availableFunds: number,
        totalClosingCost: number,
        netMonthlyPay: any,
      ) => {
        const mortgagePercent = [0.3, 0.25, 0.2, 0.15, 0.1]; // Define mortgage percentages
        return Array.from({ length: 5 }, (_, i) => {
          const monthlyMortgagePayment = Math.ceil(netSavings * mortgagePercent[i]);
          const pv = formulajs.PV(
            (mortgageAnnualRate * 0.01) / 12,
            mortgageLoanYears * 12,
            -monthlyMortgagePayment,
            0,
            0,
          );
          const maxHomeValue = Math.ceil(+pv + (availableFunds - totalClosingCost));
          const downPaymentRate = +((availableFunds / maxHomeValue) * 100).toFixed(
            2,
          );
          const savings = Math.ceil(netSavings - monthlyMortgagePayment);
          const maxLoanAmount = Math.ceil(maxHomeValue - availableFunds);
          const totalPayment = Math.ceil(maxLoanAmount + availableFunds);
          const val = i >= 3 ? i + 1 : i;
    
          return {
            title: `${50 - 10 * val}%`,
            emoji: 0.5,
            monthlyMortgagePayment,
            maxLoanAmount,
            maxHomeValue,
            downPayment: availableFunds,
            downPaymentRate,
            savings,
            totalPayment,
            netMonthlyPay,
            mortgageAnnualRate,
            mortgageLoanYears,
            closingCost: totalClosingCost,
          };
        });
      };
    
      const updateChartSeries = (
        affordabilityCalculations: { title: string; emoji: number; monthlyMortgagePayment: number; maxLoanAmount: number; maxHomeValue: number; downPayment: number; downPaymentRate: number; savings: number; totalPayment: number; netMonthlyPay: any; mortgageAnnualRate: number; mortgageLoanYears: number; closingCost: number; }[],
        tableIndex: number,
        netMonthlyPay: number,
        totalMonthlyDebts: any,
        totalHousingExpenses: number,
        totalMonthlyHousingExpenses: number,
        netSavings: number,
        totalCalculationState: { totalGrossIncome: number; monthlyGrossPay: number; netMonthlyPay: number; netSavings: number; totalMonthlyDebts: number; totalHousingExpenses: number; totalMonthlyHousingExpenses: number; }
      ) => {
        const selectedCalculation = affordabilityCalculations[tableIndex];
        if (!selectedCalculation) return;
    
        setMonthlyChartSeries([
          {
            label: "Max Loan Amount",
            name: "maxLoanAmount",
            value: parseFloat(
              (
                (selectedCalculation.maxLoanAmount * 100) /
                selectedCalculation.totalPayment
              ).toFixed(2),
            ),
            amount: selectedCalculation.maxLoanAmount,
          },
          {
            label: "Down Payment",
            name: "availableFunds",
            value: parseFloat(
              (
                (selectedCalculation.downPayment * 100) /
                selectedCalculation.totalPayment
              ).toFixed(2),
            ),
            amount: selectedCalculation.downPayment,
          },
        ]);
    
        setMonthlyIncomeChartSeries([
          {
            label: "Monthly Mortgage",
            name: "monthlyMortgage",
            value: parseFloat(
              ((selectedCalculation?.monthlyMortgagePayment * 100) / netMonthlyPay).toFixed(2),
            ),
            amount: selectedCalculation?.monthlyMortgagePayment,
          },
          {
            label: "Housing Expense",
            name: "housingExpense",
            value: parseFloat(
              ((totalHousingExpenses * 100) / netMonthlyPay).toFixed(2),
            ),
            amount: totalHousingExpenses,
          },
          {
            label: "New House Expense",
            name: "newHouseExpense",
            value: parseFloat(
              ((totalMonthlyHousingExpenses * 100) / netMonthlyPay).toFixed(2),
            ),
            amount: totalMonthlyHousingExpenses,
          },
          {
            label: "Leftover",
            name: "netSavings",
            value: parseFloat(((selectedCalculation?.savings * 100) / netMonthlyPay).toFixed(2)),
            amount: selectedCalculation?.savings,
          },
        ]);
      };

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
          <div className="grid grid-cols-1 gap-6">
            {/* <!-- Left Sidebar Inputs --> */}
            <div className="bg-white p-6 rounded-[8px] shadow col-span-1 space-y-4 border-gray">
              <h3 className="text-xl font-bold mb-4">
                Home Affordability
                <span className="text-gray-400 cursor-help" title="Help text">
                  &#9432;
                </span>
              </h3>

              {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
                <div className="flex flex-col justify-between">
                  <label htmlFor="netMonthlyPay" className="block font-medium">
                    Net Monthly Pay (Gross Income)
                  </label>
                  <input
                    id="netMonthlyPay"
                    type="number"
                    value="8751"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="totalMonthlyDebts"
                    className="block font-medium"
                  >
                    Total Monthly Debts
                  </label>
                  <input
                    id="totalMonthlyDebts"
                    type="number"
                    value="4"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="totalHousingExpense"
                    className="block font-medium"
                  >
                    Total Housing Expense without Rent
                  </label>
                  <input
                    id="totalHousingExpense"
                    type="number"
                    value="3199"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="newHomeExpenses"
                    className="block font-medium"
                  >
                    New Home Expenses
                  </label>
                  <input
                    id="newHomeExpenses"
                    type="number"
                    value="717"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="totalClosingCost"
                    className="block font-medium"
                  >
                    Total Closing Cost
                  </label>
                  <input
                    id="totalClosingCost"
                    type="number"
                    value="10000"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label
                    htmlFor="annualInterestRate"
                    className="block font-medium"
                  >
                    Annual Interest Rate %
                  </label>
                  <input
                    id="annualInterestRate"
                    type="number"
                    value="6.25"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="termOfMortgage" className="block font-medium">
                    Term of Mortgage (years)
                  </label>
                  <input
                    id="termOfMortgage"
                    type="number"
                    value="30"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <label htmlFor="availableFunds" className="block font-medium">
                    Available Funds
                  </label>
                  <input
                    id="availableFunds"
                    type="number"
                    value="92000"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
              </div> */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
                {Object.entries(AffordabilityLabels).map(([key, label]) => (
                  <div key={key} className="flex flex-col justify-between">
                    <label htmlFor={key} className="block font-medium">
                      {label}
                    </label>
                    <input
                      id={key}
                      type="number"
                      value={affordabilityState[key as keyof any]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setAffordabilityState((prev: any) => ({
                          ...prev,
                          [key]: parseFloat(e.target.value),
                        }))
                      }
                      className="w-full border rounded px-3 py-2 mt-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* <!-- Right Main Content --> */}
            <div className="space-y-6">
              {/* <!-- Charts Section --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <!-- Home Affordability --> */}
                {/* <div className="bg-white p-6 rounded-lg shadow text-center border-gray">
                  <h3 className="text-xl font-bold mb-4">Home Affordability</h3>
                  <div className="w-40 h-40 mx-auto bg-yellow-300 rounded-full mb-4 flex items-center justify-center">
                    [Pie]
                  </div>
                  <div className="flex justify-center items-center gap-2 bg-gray-100 rounded p-1">
                    <span>
                      Max Loan Amount <strong>$460,834</strong>
                    </span>{" "}
                    +
                    <span>
                      Down Payment <strong>$92,000</strong>
                    </span>{" "}
                    =
                    <span className="px-3 py-1 bg-[#002144] font-semibold text-white rounded">
                      Total $552,834
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center mt-4 text-xs gap-4">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>{" "}
                      Max Loan
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>{" "}
                      Down Payment
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>{" "}
                      Term: 30 yrs
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-sky-500 inline-block"></span>{" "}
                      Interest: 6.25%
                    </span>
                  </div>
                </div> */}
                <AffordabilitySection
                    title="Home Affordability"
                    chartSeries={monthlyChartSeries}
                    totalPayment={affordabilityCalculations[tableIndex]?.totalPayment}
                    calculations={affordabilityCalculations[tableIndex]}
                />

                {/* <!-- Income vs Expense --> */}
                {/* <div className="bg-white p-6 rounded-lg shadow text-center border-gray">
                  <h3 className="text-xl font-bold mb-4">Income vs Expense</h3>
                  <div className="w-40 h-40 mx-auto bg-blue-400 rounded-full mb-4 flex items-center justify-center text-white">
                    [Pie]
                  </div>
                  <div className="flex justify-center items-center gap-2 bg-gray-100 rounded p-1">
                    <span>
                      Gross Income <strong>$8,751</strong>
                    </span>{" "}
                    -
                    <span>
                      Debts <strong>$4</strong>
                    </span>{" "}
                    =
                    <span className="px-3 py-1 rounded font-semibold bg-[#002144] font-semibold text-white rounded">
                      Net Pay $8,747
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center mt-4 text-xs gap-4">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>{" "}
                      Mortgage $2,899
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span>{" "}
                      Housing $3,199
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block"></span>{" "}
                      Expense $717
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-lime-500 inline-block"></span>{" "}
                      Leftover $1,932
                    </span>
                  </div>
                </div> */}
                <IncomeExpenseSection
              chartSeries={monthlyIncomeChartSeries}
              netMonthlyPay={
                affordabilityCalculations[tableIndex]?.netMonthlyPay
              }
              totalCalculationState={totalCalculationState}
              currentAffordabilityCalculations={affordabilityCalculations[tableIndex]}
            />
              </div>

              {/* <!-- Best Loan Options Table --> */}
              <HomeAffordabilityTable affordabilityCalculations={affordabilityCalculations} />
            </div>
          </div>
        </div>
    )
}