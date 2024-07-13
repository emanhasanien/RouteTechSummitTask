

import Chart from "./Chart"
import CustomerList from "./CustomerList"
import useFetch from "./useFetch"
// import { Chart as ChartJs } from "chart.js/auto"
// import { Bar } from "react-chartjs-2"



const Home = () => {
  const {data: customers, isPending, error} = useFetch("http://localhost:8000/customers")
  const { data: transaction } = useFetch("http://localhost:8000/transactions/")
  
  
  return (
 <>
    <section>
 
     {error && <p>Error occuerd</p>}
     {isPending && <p className="flex justify-center items-center text-8xl mt-40 text-red-800"><i className="fa fa-spinner fa-spin"></i></p>}
     {customers && transaction ? <>
       
       
      <CustomerList customers={customers} transaction={transaction}/>
      <Chart customers={customers}  transaction={transaction}/>
      


     </> : null}
     
   </section>


  
 </>
   
  )
}

export default Home