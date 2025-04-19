export type  FilterState = {
    loanType: string;
    // financeType: string | null;
    credit_score: string;
    zip_code: string;
    sort_by: string;
    sort_type: string;
  }
  export interface Loan {
    [key: string]: any;
  }
  
  export interface LoanResponse {
    data: Loan[];
    metadata: {
      length: number;
      offset: number;
      page: number;
      total_pages: number;
    };
  }