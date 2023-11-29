import 'bootstrap/dist/css/bootstrap.min.css'
import { TypeUnderline } from 'react-bootstrap-icons';
import {Link } from 'react-router-dom'



function Home() {
    return ( 
        <div className="bg-primary vh-90"> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Medi Claim</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <Link to="/">
        <li className="nav-item active">
         <a className="nav-link" href="#">Home </a>
        </li>
        </Link> 
        <Link to="/">
        <li className="nav-item">
          <a className="nav-link" href="#" >Link</a>
        </li></Link>
        
      </ul>
      <form className="d-flex my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      <Link to = "/register"><button className="btn btn-outline-success my-2 my-sm-1">Signup</button></Link>
      <Link to = "/login"><button className="btn btn-outline-success my-2 my-sm-1" >Login</button> </Link>
      

    </div>
  </nav> 
  </div>
  );
}

export default Home;