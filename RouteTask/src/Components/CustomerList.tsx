
import { Customer, Transactions } from "../interfaces";
import { useState } from "react";





interface CustomerListProps {
  customers: Customer[];
  transaction: Transactions[]
}



const CustomerList = ({ customers ,transaction }: CustomerListProps) => {

const [searchTerm , setSearchTerm] = useState('')
const [searchAmountTerm , setSearchAmountTerm] = useState('')
const[isSearched , setIssearched] = useState<boolean>(false)


const filteredCustmersName = customers.filter( item => {

  if ( item.name.toLowerCase().includes(searchTerm)){
      return item
  }

  else{   //  This filter work in console but i tried to display it in table and i can't do it
    transaction.filter(item => {
    if (item.amount.toString().includes(searchTerm)) {
      console.log(item);
      
      return item
    } 
     
    })
  }
})



  return (
    <>
      <section className="container mt-20 mb-10 flex flex-col justify-center items-center">
    
        <section>
          <h1 className="text-3xl font-bold text-sky-700 "> Customer List </h1>
        </section>

        <input type="text" 
        className="border border-slate-300 p-2 w-[500px] my-6 rounded-md focus:outline-none"
         placeholder="Search by name or amount..... "
       onChange={(e) =>  {
        setSearchTerm(e.target.value.toLowerCase())
        setSearchAmountTerm(e.target.value.toLowerCase())
        setIssearched(true)
       }}
         
         />
     
     { ! isSearched?<>
     
     
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
                      <p className="text-teal-600">{trans.date}</p>
                      <p>{trans.amount}</p>
                     </td> : null
                  ))}

                </tr>
              ))}
            </tbody>
          </table>
        
        </section>
     
     
     
     </>  : 
     
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
         {filteredCustmersName.map((customer) => (
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
                 <p className="text-teal-600">{trans.date}</p>
                 <p>{trans.amount}</p>
                </td> : null
             ))}

           </tr>
         ))}
       </tbody>
     </table>
   
   </section>
     
     
     
     
     
     
     }
       
     




      </section>


    </>
  );
};

export default CustomerList;
