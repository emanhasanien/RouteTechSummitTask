import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js/auto";
import { Customer, Transactions } from "../interfaces";

ChartJs.register(CategoryScale, LinearScale, BarElement);

interface Iprops{
    customers: Customer[];
    transaction: Transactions[]
}

const Chart = ({customers, transaction}:Iprops) => {

    const customerNames = customers?.map(customer => customer.name);

    const totalTransactions = customers.map(customer =>
     {
        let TotalCustomerTransaction= 0
        transaction.map(transaction =>  {
          
            if(transaction.customer_id == customer.id){
              TotalCustomerTransaction=transaction.amount+ TotalCustomerTransaction
            }
            
          })
             
                                                                                                                                                                                     
          return TotalCustomerTransaction
     }
     
    );


  const data = {
    labels: customerNames,
    datasets: [
      {
        label: "Total Customer Transactions per day",
        data:totalTransactions,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <>
      <section className="flex items-center w-60 justify-center mx-auto my-20">
        <div>
          <Bar data={data} options={options} height={400} />
        </div>
      </section>
    </>
  );
};

export default Chart;
