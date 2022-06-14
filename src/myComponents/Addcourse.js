import React,{useState} from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"; 
import {addCourse } from "../services/Courseservice";
 
 
export default function Addcourse() {
    let navigate   = useNavigate();
    let {course} =  useParams(); 
    let [inputFields,setInnputFileds] = useState({name:"", image:""}); 
     
    let inputHandler = (event) =>{
        let name    = event.target.name;
        let value   =  event.target.value;
        console.log(`${name} val: ${value}`); 
        setInnputFileds({...inputFields,[name]:value}); 
    }
     
    let formSubmit = (event)=>{
        event.preventDefault();
        addCourse(inputFields)
        .then(res=>{
            navigate("/courses"); 
        }).catch(err=>{alert(`Error on add :${err}`)})   
    }
     
    return(
          <>
            <div className="container"> 
            <h1>Add Course</h1> 
           <form onSubmit={formSubmit}>
          
                <div className="form-group mt-4">
                    <label >Course Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter name" onChange={inputHandler} />  
                </div>
                 
                <div className="form-group mt-4">
                    <label>Image</label>
                    <input type="text" className="form-control" name="image" placeholder="Enter image path" onChange={inputHandler}  />  
                </div>  
                 
                <div className="form-group mt-4"> 
                 <input type="submit" name="submit" className="btn btn-success btn-sm" value="Add Course"/>
                 </div>  

                     

                    
           
            </form>
             </div>
           </>
     )
}  