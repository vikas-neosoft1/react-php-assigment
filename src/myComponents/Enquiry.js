import React,{useState} from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"; 
import {addEnquiry} from "../services/Courseservice";
 
 
export default function Enquiry() {
    let navigate   = useNavigate();
    let {course} =  useParams(); 
    let [inputFields,setInnputFileds] = useState({name:"", mobile:"",course:course}); 
     
    let inputHandler = (event) =>{
        let name    = event.target.name;
        let value   =  event.target.value;
        console.log(`${name} val: ${value}`); 
        setInnputFileds({...inputFields,[name]:value}); 
    }
     
    let formSubmit = (event)=>{
        event.preventDefault();
        addEnquiry(inputFields)
        .then(res=>{
            navigate("/course_enquiry_list"); 
        }).catch(err=>{alert(`Error on add :${err}`)})   
    }
     
    return(
          <>
            <div className="container"> 
            <h1>Enquiry for {course}</h1> 
           <form onSubmit={formSubmit}>
          
                <div className="form-group mt-4">
                    <label >Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter name" onChange={inputHandler} />  
                </div>
                 
                <div className="form-group mt-4">
                    <label>Mobile</label>
                    <input type="number" className="form-control" name="mobile" placeholder="Enter mobile" onChange={inputHandler}  />  
                </div>  
                 
                <div className="form-group mt-4"> 
                 <input type="submit" name="submit" className="btn btn-success btn-sm" value="Save Enquiry"/>
                 </div>  

                     

                    
           
            </form>
             </div>
           </>
     )
}  