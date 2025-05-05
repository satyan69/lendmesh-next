   export function formatValue(value: any, unit: any) {
        switch (unit) {
          case "money":
            return formatCurrency(value);
          case "rate":
            return `${value}%`;
          case "date":
            return `${value} years`;
          default:
            return value;
        }
      }
      export function formatCurrency(value: number): string {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(value);
    }