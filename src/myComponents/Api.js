import React,{useState} from "react";
import axios from "axios";
 

let Api=()=>{
    let [userData, setUserData] =  useState([]);
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    axios.get(API_URL)
    .then(res=>setUserData(res.data))
    .catch(err=>console.log(`Error ${err}`));
    
     
   return(
       <>
        {userData.map(user=><div className="container"><div>{user.name}</div><div>{user.email}</div><div>{user.address.city}</div><hr></hr> </div>)}   
        </>
   ) 
    
}
 
 export default Api; 