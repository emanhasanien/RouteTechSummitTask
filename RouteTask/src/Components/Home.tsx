import CustomerList from "./CustomerList"
import useFetch from "./useFetch"


const Home = () => {
  const {data: customers, isPending, error} = useFetch("http://localhost:8000/customers")
  const { data: trasaction } = useFetch("http://localhost:8000/transactions/")
  // console.log(trasaction);
  
  return (
   <section>
     {error && <p>{error}</p>}
     {isPending && <p>Loading Customers....</p>}
     {customers && trasaction ? <CustomerList customers={customers} transaction={trasaction}/> : null}
     
   </section>
  )
}

export default Home