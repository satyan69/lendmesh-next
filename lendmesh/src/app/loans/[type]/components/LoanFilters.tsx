// components/LoanFilters.tsx
import { FilterState } from "../../../../types/loans";
import loanData from "../../../../components/loanData.json";

export default function LoanFilters({
  loanType,
  filters,
  onChange,
  onApply,
}: {
  loanType: string;
  filters: FilterState;
  onChange: (key: keyof FilterState, value: string) => void;
  onApply: () => void;
}) {
  const filterData = loanData[loanType as keyof typeof loanData]?.filter_data || [];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="flex flex-wrap gap-4">
        
        {filterData.map((filter: any) => {
          const commonProps = {
            value: filters[filter.key as keyof FilterState],
            onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
              onChange(filter.key as keyof FilterState, e.target.value),
          };

          // return (
          //   <div key={filter.key} className="flex-1 min-w-[150px]">
          //     <label className="block text-sm font-semibold">{filter.name}</label>
              
          //     {filter.type === "input" ? (
          //       <input type="text" className="mt-1 p-2 border rounded-md w-full" {...commonProps} />
          //     ) : (
          //       <select className="mt-1 p-2 border rounded-md w-full" {...commonProps}>
          //         {filter.value.map((option: any) => (
          //           <option key={option.key} value={option.key}>
          //             {option.name}
          //           </option>
          //         ))}
          //       </select>
          //     )}
          //   </div>
          // );
          if( filter.type === "input") {
            return (
              <div key={filter.key} className="flex-1 min-w-[150px]">
                <label className="block text-sm font-semibold">{filter.name}</label>
                <input
                  type="text"
                  className="mt-1 p-2 border rounded-md w-full"
                  {...commonProps}
                />
              </div>
            );
          }
          if (filter.type === "select") {
            return (
              <div key={filter.key} className="flex-1 min-w-[150px]">
                <label className="block text-sm font-semibold">{filter.name}</label>
                <select className="mt-1 p-2 border rounded-md w-full" {...commonProps}>
                  {filter.value.map((option: any) => (
                    <option key={option.key} value={option.key}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            );
          }
          if (filter.type === "checkbox") {
            return (
              <div key={filter.key} className="flex-1 min-w-[150px]">
                <label className="block text-sm font-semibold mb-2">{filter.name}</label>
                <div className="flex flex-col gap-2">
                  {filter.value.map((option: any) => (
                    <div key={option.key} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={option.key}
                        className="h-4 w-4"
                        checked={(filters[filter.key as keyof FilterState]).includes(option.key)}
                        value={option.key}
                        onChange={(e) => {
                          const newValue = e.target.checked
                            ? [...(filters[filter.key as keyof FilterState]), option.key]
                            : (filters[filter.key as keyof FilterState]).filter((key: string) => key !== option.key);
                          onChange(filter.key as keyof FilterState, newValue);
                        }}
                      />
                      <label htmlFor={option.key} className="text-sm font-semibold">{option.name}</label>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          
          return null; // Fallback in case of an unknown filter type
        })}
        <button
          type="button"
          className="bg-[#2F435F] hover:bg-[#2F435F] text-white font-bold py-2 px-4 rounded self-end cursor-pointer"
          onClick={onApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
}