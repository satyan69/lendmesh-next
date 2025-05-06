import { formatValue } from "./utils/utility";

export function AffordabilityCardDescription({
    color,
    title,
    value,
    unit,
    extraRate = 0,
  }: {
    color: string;
    title: string;
    value: number;
    unit: string;
    extraRate?: number;
  }) {
    return (
      <div className="flex space-x-2">
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: color }}
        ></div>
        <div>
          <p className="text-sm">{title}</p>
          <p className="font-semibold">{formatValue(value, unit)}</p>
        </div>
      </div>
    );
  }