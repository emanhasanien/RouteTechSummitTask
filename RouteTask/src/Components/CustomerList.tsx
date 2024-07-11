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
  transactions:Transactions[]
}

const CustomerList = ({ customers ,transactions}: CustomerListProps) => {
  return (
    <>
      <section className="container my-32 flex flex-col justify-center items-center">
        <section>
          <h1 className="text-3xl font-bold text-sky-700 "> Customer List </h1>
        </section>

        <section className="my-6">
          <table className="border border-collapse  border-slate-400 ">
            <thead className="">
              <tr>
                <th className="border border-slate-300 p-3 text-sky-500 text-xl ">Id</th>
                <th className="border border-slate-300 p-3 text-sky-500  text-xl">Name</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="border border-slate-300 p-3">
                    <p>{customer.id}</p>
                  </td>

                  <td  className="border border-slate-300 p-3">
                    <p>{customer.name}</p>
                  </td>
                 <td>
                 <Link to={`/`}/>
                 </td>
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
