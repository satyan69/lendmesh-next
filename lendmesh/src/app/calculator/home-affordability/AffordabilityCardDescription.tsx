import { formatValue } from "./utils/utility";

export function AffordabilityCardDescription({
    color,
    title,
    value,
    unit,
    //extraRate = 0,
  }: {
    color: string;
    title: string;
    value: number;
    unit: string;
    // extraRate?: number;
  }) {
    return (
        <span className="flex items-center gap-1">
          <span className={`w-2 h-2 rounded-full inline-block`} style={{ backgroundColor: color }}></span>{" "}
          {title}: {formatValue(value, unit)}
        </span>
    );
  }