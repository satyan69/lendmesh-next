// LoanDetail.tsx
"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import loanDetails from "../../../../components/loanDetails.json";

const loanDetailCache = new Map<string, any>();

interface LoanDetailRowProps {
  creditUnionId: string;
  loanType: string;
  financeType: string;
  product: string | null | undefined;
  index: number
}

export default function LoanDetail({
  creditUnionId,
  loanType,
  financeType,
  product,
  index,
}: LoanDetailRowProps) {
  const [detail, setDetail] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const lastFetchedKey = useRef<string | null>(null);
  const columnMappings = loanDetails[loanType as keyof typeof loanDetails]?.column_mappings

  useEffect(() => {
    const key = `${creditUnionId}-${loanType}-${financeType}-${product || "none"}`;
  
    if (loanDetailCache.has(key)) {
      setDetail(loanDetailCache.get(key));
      setLoading(false);
      return;
    }
  
    // Only fetch if not already fetched
    if (lastFetchedKey.current === key) {
      console.log("Already fetching for this key, skipping...");
      return;
    }
  
    lastFetchedKey.current = key;
  
    const fetchDetail = async () => {
      try {
        let url = `/api/loans/details?creditUnionId=${creditUnionId}&loanType=${loanType}&financeType=${financeType}`;
        if (product) {
          url += `&product=${product}`;
        }
  
        const response = await fetch(url);
        const data = await response.json();
        loanDetailCache.set(key, data);
        setDetail(data);
      } catch (error) {
        console.error("Error fetching loan detail:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchDetail();
  }, [creditUnionId, loanType, financeType, product]);

  const formatCellValue = (value: any, unit: string): string => {

    if (value === null || value === undefined) return "";
    
    if (typeof value === 'number') {
      return value === 0 ? '0' : unit === '$' ? `${unit}${value.toLocaleString()}` : `${value.toLocaleString()} ${unit}`;
    }
    
    if (typeof value === 'string') {
      return unit === '$' ? `${unit} ${value}` : `${value} ${unit}`;
    }
    
    return '';
  }
  
  const renderCellContent = (loan: any, column: any) => {
    const { key, keys, unit, delimiter } = column
    // console.log(loan, key);
    // console.log(column);
    if (key === 'url') return '∞';

    if (keys) {
      const values = keys?.reduce((acc: string[], k: string) => {
        const value = loan[k]
        if (value !== null && value!=="" && value!== undefined && value !== 0) acc.push(formatCellValue(value, unit))
        return acc
      }, [])

      // console.log(values);

      if (values.length === 0) return ' ';

      if (values.length === 1) return values[0];

      return values.length ? values.join(delimiter) : ' '
    }

    return formatCellValue(loan[key], unit)
  }
  if (loading) {
    return <p className="text-center p-4">Loading loan details...</p>;
  }
  if (!Array.isArray(detail) || detail.length === 0) {
    return <p className="text-center p-4">No data available for this loan.</p>;
  }
  return (
    <Fragment key={index}>
      <div className="flex font-semibold text-sm bg-medium-blue border-gray py-3 px-5 rounded-tl-[8px] rounded-tr-[8px]">
      {columnMappings.map((column: any) => (
        <div key={column.id} className="w-[25%] pr-2">{column.name}</div>
      ))}
      </div>
      {Array.isArray(detail) &&
        detail.map((d: any, index: number) => (
          <div key={index} className="px-5 bg-light-blue rounded-bl-[8px] rounded-br-[8px] font-medium">
            <div className="flex text-sm border-b border-gray py-3">
            {columnMappings.map((column: any) => (
              <div key={column.id} className="w-[25%] pr-2">{renderCellContent(d, column)}</div>
            ))}
            </div>
          </div>
        ))}
    </Fragment>
  );
}
