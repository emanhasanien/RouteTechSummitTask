import { Link } from "react-router-dom";

interface Customer {
  id: number;
  name: string;
}

interface Transactions{
  customer_id: number,
  date:string,
  amount:number

}

interface CustomerListProps {
  customers: Customer[];
  transaction: Transactions[]
}

const CustomerList = ({ customers ,transaction }: CustomerListProps) => {
  console.log(transaction);
  
  return (
    <>
      <section className="container my-20 flex flex-col justify-center items-center">
        <section>
          <h1 className="text-3xl font-bold text-sky-700 "> Customer List </h1>
        </section>

        <section className="my-6">
          <table className="border border-collapse">
            <thead className="">
              <tr>
                <th className="border border-slate-300 p-3 text-sky-500 text-xl ">Id</th>
                <th className="border border-slate-300 p-3 text-sky-500  text-xl">Name</th>
                <th className="border border-slate-300 p-3 text-sky-500  text-xl ">Customer Transactions</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>

                  <td className="border border-slate-300 p-3">
                    <p>{customer.id}</p>
                  </td>

                  <td  className="border border-slate-300 p-3 text-indigo-800">
                    <p>{customer.name}</p>
                  </td>

                  {transaction.map( (trans) => ( 
                     trans.customer_id == customer.id ?
                      <td className="border border-slate-300 p-3 flex flex-row items-center justify-between"> 
                      <td className="text-teal-600">{trans.date}</td>
                      <td>{trans.amount}</td>
                     </td> : null
                  ))}

                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default CustomerList;
