import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import { Envelope } from 'react-bootstrap-icons';
import Home from "./Home";

function Login() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', {email, password})
      .then(res => {
         if(res.data.Status === "Success"){
          navigate('/dashboard')
         }
      }).catch(err => console.log(err))
    }

    return(
      <div>
      <Home />
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        
            <div className="bg-white p-3 rounded w-25">
                <h2 className="text-center">Login</h2>
                <form onSubmit = {handleSubmit}>
                    <div className="mb-3 space-between justify-content">
                          <label htmlFor="email" >
                            <strong>{' '}Email</strong>
                          </label>
                         <input 
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                          /> 
                    </div>
                    <div className="mb-3">
                          <label htmlFor="password">
                            <strong>Password</strong>
                          </label>
                         <input 
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                          /> 
                    </div>
                    <div className="d-grid"><button type="submit" className="btn btn-success w-100 rounded-0">Login</button></div>
                    
                </form>
                <Link to="/register"><div className="text-end">Create an account ?</div></Link>
            </div>
        </div>
        </div>
    )
}

export default Login;



