import React from "react";
import { Link } from 'react-router-dom'  
export default function Nav() {
     return(
      <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Abouts</Link>
        </li>
         
          
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li> 

        <li className="nav-item">
          <Link className="nav-link" to="/courses">Courses</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/course_enquiry_list">Enquiry List</Link>
        </li>        

               
         
        <li className="nav-item">
          <Link className="nav-link" to="/state">Use State</Link>
        </li> 

        <li className="nav-item">
          <Link className="nav-link" to="/mount">Class mount</Link>
        </li>
         

        <li className="nav-item">
          <Link className="nav-link" to="/posts">Posts</Link>
        </li>         
        {/* 
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Products
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/product/1">Product 1</Link></li>
            <li><Link class="dropdown-item" to="/product/2">Product 2</Link></li>
            <li><Link class="dropdown-item" to="/product/3">Product 3</Link></li>
          </ul>
        </li> 
          */}
      </ul>
    </div>
  </div>
</nav> 
         
      </>  
     )
} 