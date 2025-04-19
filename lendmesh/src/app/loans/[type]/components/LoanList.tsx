"use client";

import { Fragment, useState } from "react";
import loanData from "../../../../components/loanData.json";
import { FilterState } from "../../../../types/loans";
import LoanFilters from "./LoanFilters";
import LoanTable from "./LoanTable";
import Pagination from "./Pagination";


export default function LoanList({
  initialData,
  loanType,
}: {
  initialData: any;
  loanType: string;
}) {
  const [loans, setLoans] = useState(() => initialData);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState('new');
  const [filters, setFilters] = useState({
    loanType,
    zip_code: "",
    credit_score: "",
    sort_type: "",
    sort_by: "",
    finance_type: ""
  });
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const fetchLoans = async (newPage = page) => {
    setLoading(true);

    const params = new URLSearchParams({
      loanType: filters.loanType,
      zipCode: filters.zip_code,
      creditScore: filters.credit_score.toString(),
      sortBy: filters.sort_by,
      sortType: filters.sort_type,
      financeType: filters.finance_type,
      page: newPage.toString(),
    });

    const res = await fetch(`/api/loans?${params.toString()}`);
    const data = await res.json();
    setLoans(data);
    setPage(newPage);
    setLoading(false);
  };
  const toggleRow = async (index: any) => {
    //console.log('loanType', filters.loanType)
    setExpandedRowIndex(expandedRowIndex === index ? null : index);

  };
  const handleChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const handleFinancetype = (tabName: string) => {
    setTab(tabName);
    setFilters((prev) => ({ ...prev, finance_type: tabName }));
  };
    const columnMappings = loanData[loanType as keyof typeof loanData]?.column_mappings;
    const tabsMappings = loanData[loanType as keyof typeof loanData]?.tabs;
  return (
    <>
    {tabsMappings.map((tab: any) => (
      <Fragment key={tab.id}>
      <button
        type="button"
        className="bg-[#2F435F] hover:bg-[#2F435F] text-white font-bold py-2 px-4 rounded self-end cursor-pointer"
        onClick={() => handleFinancetype(tab.key)}
      >

        {tab.tabName}
      </button>
      </Fragment>
      ))}
      <LoanFilters
        loanType={loanType}
        filters={filters}
        onChange={handleChange}
        onApply={() => fetchLoans(page)}
      />
       <LoanTable
        loanType={loanType}
        financeType={tab}
        loans={loans}
        columnMappings={columnMappings}
        expandedRowIndex={expandedRowIndex}
        toggleRow={toggleRow}
      />
      <Pagination
        page={page}
        totalPages={loans?.metadata?.total_pages}
        onPageChange={fetchLoans}
      />
      <p className="py-2"></p>
    </>
  );
}