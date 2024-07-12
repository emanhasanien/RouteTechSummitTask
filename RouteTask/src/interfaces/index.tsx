export interface Customer {
    id: number;
    name: string;
  }
  
  export interface Transactions{
    customer_id: number,
    date:string,
    amount:number
  
  }