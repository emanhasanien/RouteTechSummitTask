import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Home from "./Components/Home"
import CustomerTransactions from "./Components/CustomerTransactions"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/customers/:id" element={<CustomerTransactions/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App