import React,{useState, useEffect} from "react";
import { useParams } from 'react-router-dom'; 
import {getProductById, deleteProductById } from '../services/Productservice'; 

export default function Productdetail() {
     let {id} = useParams();
     let [proRow, setProRow] = useState([]);
     useEffect(()=>{
           getProductById(id)
           .then(response=>{
                 setProRow(response.data)
                 console.log(`resp ${response.data}`); 
           }).catch(err=>{console.log(`Error on get record ${err}`);}); 
     },[]);  
      
      
      
     return(
          <>
          <div className="row container" >  
               <h1 align="center">Product Detail</h1>
               <img src={proRow.image} className="img-responsive"  height={400} />
               <h1>{proRow.pname}</h1>
               <p>{proRow.price}</p>
               <article>{proRow.description}</article>   
               </div>   
        
            </>
     ) 
} 