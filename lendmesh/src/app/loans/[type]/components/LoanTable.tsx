import { useState,Fragment } from "react";
import Image from "next/image";
import LoanDetail from "./LoanDetail";
import Link from "next/link";
import { Loan } from "@/types/loans";

export default function LoanTable({
  loanType,
  financeType,
  loans,
  columnMappings,
  expandedRowIndex,
  toggleRow,
}: {
  loanType: string;
  financeType: string;
  loans: { data: Loan[] };
  columnMappings: {
    name: string;
    key: string | null;
    keys?: string[];
    unit: string;
    delimiter: string;
    width: string;
    id: number;
    sortable?: boolean;
  }[];
  expandedRowIndex: number | null;
  toggleRow: (index: number) => void;
}) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (key: string | null) => {
    if (!key) return;

    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const sortedLoans = [...(loans?.data || [])].sort((a, b) => {
    if (!sortKey) return 0;

    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (aValue === undefined || bValue === undefined) return 0;

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }

    return sortDirection === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  const formatCellValue = (value: any, unit: string): string => {
    if (value === null || value === undefined) return "";
    if (typeof value === "number") {
      return value === 0 ? "0" : unit === "$" ? `${unit}${value.toLocaleString()}` : `${value.toLocaleString()} ${unit}`;
    }
    if (typeof value === "string") {
      return unit === "$" ? `${unit} ${value}` : `${value} ${unit}`;
    }
    return "";
  };

  const BankImage = ({ href, loan }: { href: string; loan: Loan }) => (
    <div className="flex justify-start rounded-xl py-3 dark:bg-white" title={loan.name}>
      <Link target="_blank" href={`/banks/details/${href}`}>
        <img
          src={`/images/brands/bank/${href}.png`}
          alt={href}
          className="h-10 w-20"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/default_bank.svg";
          }}
        />
      </Link>
    </div>
  );

  const renderCellContent = (loan: Loan, column: any) => {
    const { key, keys, unit, delimiter } = column;
    if (key === "lender_id") return <BankImage href={loan[key]} loan={loan} />;
    if (key === "url") return "∞";

    if (keys) {
      const values = keys.reduce((acc: string[], k: string) => {
        const value = loan[k];
        if (value !== null && value !== undefined && value !== "" && value !== 0) {
          acc.push(formatCellValue(value, unit));
        }
        return acc;
      }, []);
      if (values.length === 0) return " ";
      if (values.length === 1) return values[0];
      return values.join(delimiter);
    }

    return formatCellValue(loan[key], unit);
  };

  return (
    <div className="w-full">
      <div className="flex font-semibold bg-[#6BE3A2] text-[#002144] py-3 px-4 rounded-tl-[8px] rounded-tr-[8px]">
        {columnMappings.map((column, index) => (
          <div
            key={index}
            style={{ width: column.width }}
            className={`pr-2 cursor-${column.sortable ? "pointer" : "default"}`}
            onClick={() => column.sortable && handleSort(column.key)}
          >
            <div className="flex items-center gap-1">
              {column.name}
              {sortKey === column.key && (
                <span>{sortDirection === "asc" ? "▲" : "▼"}</span>
              )}
            </div>
          </div>
        ))}
        <div style={{ width: "5%" }} className="pr-2"></div>
      </div>

      {sortedLoans.map((loan: any, i: number) => (
        <Fragment key={i}>
          <div className="border-b border-gray px-4 py-3 flex items-center text-sm font-medium">
            {columnMappings.map((column, index) => (
              <div key={column.id} style={{ width: column.width }} className="pr-2">
                {renderCellContent(loan, column)}
              </div>
            ))}

            <div
              className="w-[5%] flex justify-center items-center cursor-pointer"
              onClick={() => toggleRow(i)}
            >
              <span className={expandedRowIndex === i ? "rotate-180" : ""}>
                <svg className="size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>

          {expandedRowIndex === i && (
            <>
              <LoanDetail
                loanType={loanType}
                financeType={financeType}
                creditUnionId={loan.credit_union_id}
                product={loan?.product || null}
                index={i}
              />
              <p className="py-4 px-2 text-sm">
                <strong className="mb-2">Notes:</strong>
                <span className="block pt-2">
                  {loan.additional_info || "No Additional Information at the Moment"}
                </span>
              </p>
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
}
