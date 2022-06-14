import React, { useState,useEffect } from "react"; 
import { Link } from "react-router-dom";
import {getCoureses} from "../services/Courseservice";

 
export default function Courses() {
    let [courses, setCourses] = useState([]);
    useEffect(()=>{
         getCoureses().then(res=>{
            console.log(res.data);
            setCourses(res.data);   
         })
    },[]);  
     
    return (
        <>
         <div className="container">
          <div className="row"><div className="col-md-6"><h2>Courses</h2></div><div className="col-md-6"><Link to="/add_course"><h2>Add Course</h2></Link></div> </div>  
          <div class="row">
               
                {courses?.map((pro)=>
                       <div class='col-sm-4' key={pro.id}>
                       <div class="card" style={{width: '18rem'}}>
           <img src={pro.image} class="card-img-top" alt="..." width={150} height={150}/>
           <div class="card-body">
            <h5 class="card-title">{pro.name}</h5>
            <Link to={`/enquiry/${pro.name}`} class="btn btn-info">Enquiry</Link>   
             
           </div>
         </div>
                 </div> 
                )
                }
                  
           </div>
            </div>
        </> 
         
    ) 
} 