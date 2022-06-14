import React,{useState,useEffect} from 'react'
import { getProductById,editProductById,updateProduct } from '../services/Productservice';
import {  useNavigate ,useParams} from 'react-router-dom';
export default function Editproduct() {
    const {id}=useParams();
    const [state,setState]=useState({});
    const navigate=useNavigate();
    useEffect(()=>{
          getProductById(id)
          .then(res=>{
              console.log(`Product data ${res.data}`);
              setState(res.data);
          })
    },[])
     
    const handler=(event)=>{
     const {name,value}=event.target;
     setState({...state,[name]:value});
    }
    const postData=(event)=>{
           event.preventDefault();
            console.log(`fels ${state.pname}`);
            updateProduct(id,state)
           .then(res=>{
               if(res.data){
                   alert("Product Updated")
                   navigate("/products");
               }
           }).catch(err=>{
                console.log(`Eror on update ${err}`);
           })
         
    }
  return (
    <div className="container">
        <h1> Edit Product</h1>
        <form onSubmit={postData}>
            <div className='form-group'>
                <label> Product name</label>
                <input type="text" name="pname" className='form-control' onChange={handler} value={state.pname}/>
            </div>
            <div className='form-group'>
                <label> Price</label>
                <input type="text" name="price" className='form-control' onChange={handler} value={state.price}/>
            </div>
            <div className='form-group'>
                <label> Quantity</label>
                <input type="text" name="quantity" className='form-control' onChange={handler} value={state.quantity}/>
            </div>
            <div className='form-group'>
                <label> Description</label>
                <textarea name="description" className='form-control' onChange={handler} value={state.description}></textarea>
            </div>
            <div className='form-group'>
                <label> Image</label>
                <input type="text" name="image" className='form-control' onChange={handler} value={state.image}/>
            </div>
            <input type="submit" value="update" className='btn btn-success'/>
        </form>
    </div>
  )
}
 