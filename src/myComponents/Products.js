import React, {useState, useEffect} from "react";
import {getAllProducts,deleteProductById } from '../services/Productservice';
import {Link} from "react-router-dom"; 

function Products()
{

    let [proData, setProData] = useState([]);
    useEffect(()=>{
         getAllProducts()
         .then(response=>{
            setProData(response.data);
            console.log(response.data); 
         }).catch(err=>{
              console.log(`Error on get product ${err}`);
         }) 
    },[]);
     
    let delProduct = (id)=>{
         if(window.confirm("Do yor realy want to delete this product")) {
            deleteProductById(id)
            .then(res=>{
                 console.log(`After del ${res}`)
            }).catch(err=>{
                 console.log(`Somnething went wrong on delete`);
                let newData = proData.filter(val=>
                     val.id != id
                ) 
                setProData(newData); 
            }); 
         }
    }  
     
    return (
         <>
          <div className="container">
          <div className="row"><div className="col-md-6"><h2>Products</h2></div><div className="col-md-6"><Link to="/addproduct"><h2>Add Product</h2></Link></div> </div>  
          <div class="row">
               
                {proData?.map((pro)=>
                       <div class='col-sm-4' key={pro.id}>
                       <div class="card" style={{width: '18rem'}}>
           <img src={pro.image} class="card-img-top" alt="..." width={150} height={150}/>
           <div class="card-body">
             <h5 class="card-title">{pro.pname}</h5>
             <p class="card-text"> Price : {pro.price}</p>
            <Link to={`/productdetail/${pro.id}`} class="btn btn-info">More</Link>
            <Link to={`/editproduct/${pro.id}`} class="btn btn-info">Edit</Link>   
            <button class="btn btn-primary" onClick={()=>delProduct(pro.id)}> Delete</button>
             
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

export default Products;