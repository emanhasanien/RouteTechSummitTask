import CustomerList from "./CustomerList"
import useFetch from "./useFetch"


const Home = () => {
  const {data: customers, isPending, error} = useFetch("http://localhost:8000/customers")
  return (
   <section>
     {error && <p>{error}</p>}
     {isPending && <p>Loading Customers....</p>}
     {customers && <CustomerList customers={customers}/>}
   </section>
  )
}

export default Home