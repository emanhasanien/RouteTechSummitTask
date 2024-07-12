import { BrowserRouter, Route,  Routes } from "react-router-dom"
import Home from "./Components/Home"
import 'font-awesome/css/font-awesome.min.css'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        {/* <Route path="/chart" element={ <Chart/>}/> */}
        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App