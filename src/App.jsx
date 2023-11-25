
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddCar from './components/AddCar'
import Navbar from './layout/Navbar'
import Login from './pages/Login/Login'
import Car from './pages/car/Car'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
      <div>

     

       <Router>
        <Navbar />
        <Routes>
          <Route exact path="/car" element={<Car />} />
          <Route exaxt path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/addcar" element={<AddCar/>}/>
        </Routes>
      </Router>
 
    
       
       
      </div>
    
  )
}

export default App
