import Dashboard from "./Dashboard"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"

import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
 

  return (
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
      </BrowserRouter>
      
      
    
  )
}

export default App
