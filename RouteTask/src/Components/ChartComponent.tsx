

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Customer, Transactions } from '../interfaces';


interface Iprops{
    customers: Customer[];
    transaction: Transactions[]
}
const ChartComponent = ({ customers, transaction }: Iprops) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      if (!chartRef.current) return;
  
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;
  
      const customerNames = customers.map(customer => customer.name);

      const totalTransactions = customers.map(customer =>
        transaction.filter(transaction => {
          if(transaction.customer_id == customer.id){
            const TotalCustomerTransaction = transaction.amount + 1
            return TotalCustomerTransaction
          }
        })
      );
      
  
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: customerNames,
          datasets: [
            {
              label: 'Total Transactions',
              data: totalTransactions,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }, [customers, transaction]);
  
    return <canvas ref={chartRef} />;
  };
  
  export default ChartComponent;