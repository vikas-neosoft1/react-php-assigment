import React,{useState} from "react";
import { Navigate, useNavigate } from "react-router-dom"; 
import { addProduct } from "../services/Productservice"; 
 
export default function Addproduct() {
    let navigate   = useNavigate();
    let [inputFields,setInnputFileds] = useState({pname:"", price:"",quantity:"",description:"",image:""}); 
     
    let inputHandler = (event) =>{
        let name    = event.target.name;
        let value   =  event.target.value;
        console.log(`${name} val: ${value}`); 
        setInnputFileds({...inputFields,[name]:value}); 
    }
     
    let formSubmit = (event)=>{
        event.preventDefault();
        console.log(inputFields); 
          
        addProduct(inputFields)
        .then(res=>{
            console.log(res.data);
            navigate("/products"); 
        }).catch(err=>{alert(`Error on add :${err}`)})   
    }
     
    return(
          <>
            <div className="container"> 
            <h1>Add New Product</h1> 
           <form onSubmit={formSubmit}>
          
                <div className="form-group mt-4">
                    <label >Product Name</label>
                    <input type="text" className="form-control" name="pname" placeholder="Enter product name" onChange={inputHandler} />  
                </div>
                 
                <div className="form-group mt-4">
                    <label>Price</label>
                    <input type="number" className="form-control" name="price" placeholder="Enter product price" onChange={inputHandler}  />  
                </div>  
                 
                <div className="form-group mt-4">
                    <label>Qunatity</label>
                    <input type="text" className="form-control" name="quantity" placeholder="Enter product quantity" onChange={inputHandler}  />  
                </div> 

                <div className="form-group mt-4">
                    <label>Description</label>
                    <input type="text" className="form-control" name="description" placeholder="Enter product descripion" onChange={inputHandler}  />  
                </div> 

                <div className="form-group mt-4">
                    <label>Image</label>
                    <input type="text" className="form-control" name="image" placeholder="Enter product image path" onChange={inputHandler}  />  
                </div> 
                 
                <div className="form-group mt-4"> 
                 <input type="submit" name="submit" className="btn btn-success btn-sm" value="Add Product"/>
                 </div>  

                     

                    
           
            </form>
             </div>
           </>
     )
}  