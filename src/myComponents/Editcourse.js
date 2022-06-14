import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom"; 
import { getCourseById } from "../services/Courseservice"; 
 
export default function Editcourse() {
    let [courseRow, setCourseRow]= useState([]);
    let {id} = useParams(); 
    let navigate = useNavigate() 
    useEffect(()=>{
        getCourseById(id).then(res=>{
            console.log(`resp ${res.data}`); 
            setCourseRow(res.data); 
        }).catch(err=>{
             console.log(`Errro on get ${err}`);
        }) 
    },[])  
 
 
  
 
const handler=(event)=>{
    const {name,value}=event.target;
    setCourseRow({...courseRow,[name]:value});
   }
   const postData=(event)=>{
          event.preventDefault();
            {/*  
           updateProduct(id,courseRow)
          .then(res=>{
              if(res.data){
                  alert("Product Updated")
                  navigate("/products");
              }
          }).catch(err=>{
               console.log(`Eror on update ${err}`);
          })
        */}
   }
        
   
 return (
   <div className="container">
       <h1> Edit Product</h1>
       <form onSubmit={postData}>
           <div className='form-group'>
               <label> Product name</label>
               <input type="text" name="name" className='form-control' onChange={handler} value={courseRow.name}/>
           </div>
           <div className='form-group'>
               <label> Imnage</label>
               <input type="text" name="image" className='form-control' onChange={handler} value={courseRow.image}/>
           </div>
           
           <input type="submit" value="Update" className='btn btn-success'/>
       </form>
   </div>
 )  
 
 }
 