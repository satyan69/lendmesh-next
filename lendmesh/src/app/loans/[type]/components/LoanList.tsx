"use client";

import { Fragment, useState } from "react";
import loanData from "../../../../components/loanData.json";

interface LoanListProps {
  onFilterChange: (filters: FilterState) => void;
  loanType: string;
}

interface FilterState {
  loanType: string | null;
  // financeType: string | null;
  credit_score: string | null;
  zip_code: string | null;
  sort_by: string | null;
  sort_type: string | null;
}

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
  const [filters, setFilters] = useState({
    loanType,
    zip_code: "",
    credit_score: "",
    sort_type: "",
    sort_by: "",
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
      page: newPage.toString(),
    });

    const res = await fetch(`/api/loans?${params.toString()}`);
    const data = await res.json();
    setLoans(data);
    setPage(newPage);
    setLoading(false);
  };
  const toggleRow = (index: any) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };
  const handleChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };  
  const filterData =
    loanData[loanType as keyof typeof loanData]?.filter_data || [];
    const columnMappings = loanData[loanType as keyof typeof loanData]?.column_mappings;
  return (
    <>
      <div className="loans-section-1-wrapper">
        <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full pt-16">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="flex flex-wrap gap-4">
              {filterData.map((filter: any) => {
                if (filter.type === "input") {
                  return (
                    <div className="flex-1 min-w-[150px]">
                      <label className="block text-sm font-semibold">
                        {filter.name}
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-2 border rounded-md w-full"
                        value={filters[filter.key as keyof FilterState]}
                        onChange={(e) =>
                          handleChange(
                            filter.key as keyof FilterState,
                            e.target.value
                          )
                        }
                      />
                    </div>
                  );
                }
                if (filter.type === "select") {
                  return (
                    <div className="flex-1 min-w-[150px] select-wrapper">
                      <label className="block text-sm font-semibold">
                        {filter.name}
                      </label>
                      <select
                        className="mt-1 p-2 border rounded-md w-full"
                        value={filters[filter.key as keyof FilterState]}
                        onChange={(e) =>
                          handleChange(
                            filter.key as keyof FilterState,
                            e.target.value
                          )
                        }
                      >
                        {filter.value.map((option: any) => (
                          <option key={option.key} value={option.key}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }
              })}
              <button
                type="button"
                className="bg-[#2F435F] hover:bg-[#2F435F] text-white font-bold py-2 px-4 rounded self-end cursor-pointer"
                onClick={() => fetchLoans(page)}
              >
                Apply
              </button>
            </div>
          </div>
        </section>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="loans-section-2-wrapper loans-table-wrapper-parent">
          <section className="lg:container md:mx-auto md:mx-0 w-full h-full md:max-w-full">
            <div className="bg-white rounded-lg pt-6 pb-2 loans-table-wrapper">
              <div className="w-full">
                {/* Header */}
                <div className="flex font-semibold bg-[#6BE3A2] text-[#002144] py-3 px-4 rounded-tl-[8px] rounded-tr-[8px]">
                  {columnMappings.map((column: any) => (
                    <div key={column.key} className="w-[20%] pr-2">
                      {column.name}
                    </div>
                  ))}
                </div>

                {/* Rows */}
                {Array.isArray(loans?.data) &&
                  loans.data.map((loan: any, i: number) => (
                    <Fragment key={i}>
                      <div
                        className="border-b border-gray px-4 py-3 flex items-center text-sm font-medium"
                        key={i}
                      >
                        <div className="w-[25%] pr-2">{loan.name}</div>
                        <div className="w-[15%] pr-2">{`${loan.overall_min_apr} % - ${loan.overall_max_apr}`}</div>
                        <div className="w-[20%] pr-2">{`${loan.overall_min_terms} % - ${loan.overall_max_terms}`}</div>
                        <div className="w-[20%] pr-2">{`${loan.overall_max_amount}`}</div>
                        <div className="w-[15%] pr-2">∞</div>
                        <div
                          className="w-[5%] flex justify-center items-center cursor-pointer"
                          onClick={() => toggleRow(i)}
                        >
                          <span className={`${expandedRowIndex === i ? 'rotate-180' : ''
  }`}>
                          <svg
                            className="size-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          </span>
                        </div>
                      </div>
                      {expandedRowIndex === i && 
                      <Fragment>
                        <div className="flex font-semibold text-sm bg-medium-blue border-gray py-3 px-5 rounded-tl-[8px] rounded-tr-[8px]">
                          <div className="w-[25%] pr-2">Program Name</div>
                          <div className="w-[15%] pr-2">APR</div>
                          <div className="w-[20%] pr-2">Term</div>
                          <div className="w-[20%] pr-2">Amount</div>
                          <div className="w-[15%] pr-2">Link</div>
                        </div>

                        <div className="px-5 bg-light-blue rounded-bl-[8px] rounded-br-[8px] font-medium">
                          <div className="flex text-sm border-b border-gray py-3">
                            <div className="w-[25%] pr-2">Personal Loan</div>
                            <div className="w-[15%] pr-2">10.23% - 18%</div>
                            <div className="w-[20%] pr-2">2.1yrs - 7yrs</div>
                            <div className="w-[20%] pr-2">$25,000</div>
                            <div className="w-[15%] pr-2">∞</div>
                          </div>
                          <p className="py-4 px-2 text-sm">
                            <strong className="mb-2">Note:</strong>
                            <span className="block pt-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore.
                            </span>
                          </p>
                        </div>
                      </Fragment>
                }
                    </Fragment>
                  ))}
                {/* Second Table Section */}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-6">
                <button
                  type="button"
                  className={`bg-[#F4F9FE] ${page === 1 ? "" : "hover:bg-[#6BE3A2]" } rounded-full px-2 py-2 cursor-pointer`}
                  onClick={() => fetchLoans(page - 1)}
                  disabled={page === 1}
                >
                  <svg
                    className="size-8 transform rotate-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <span className="text-sm px-5">Page {loans?.metadata?.page} of {loans?.metadata?.total_pages}</span>
                <button
                  type="button"
                  onClick={() => fetchLoans(page + 1)}
                  disabled={page === loans?.metadata?.total_pages}
                  className={`bg-[#F4F9FE]  text-xl rounded-full px-2 py-2 cursor-pointer ${page === loans?.metadata?.total_pages ? "" : "hover:bg-[#6BE3A2]" }`}
                >
                  <svg
                    className="size-8 transform -rotate-90"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
      <p className="py-2"></p>
    </>
  );
}