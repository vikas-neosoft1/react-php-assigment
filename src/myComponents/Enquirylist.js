import React,{useEffect, useState} from "react";
import {getEnquires} from '../services/Courseservice';

export default function Enquirylist() {
    let [enquiries, setEnquiries] = useState([]);
    let i=0; 
    useEffect(()=>{
        getEnquires().then(res=>{
            console.log(`res ${res.data}`);
            setEnquiries(res.data) 
        }).catch(err=>{
            console.log(`res ${err}`); 
        }) 
    },[])  
     
     
     
    return (
        <>
         
         <div className="container">
          <h2> Course Enquiry List</h2>
          
           
          <table className="table table-bordered">
               <thead>
                    <tr>
                        <th width="3%"> Sr. No</th> 
                        <th width="27%"> Name</th>
                        <th width="30%">Mobile</th>
                        <th width="30%" >Course</th>    
                    </tr>
               </thead>
               <tbody>
                    
               {enquiries?.map(enq=>
                 
                  <tr key={enq.id}>
                      <td>{++i}</td> 
                      <td> {enq.name} </td>
                      <td> {enq.mobile} </td> 
                      <td> {enq.course} </td>
                  </tr>)}  
                     
                      
                    
                </tbody> 
               </table>
              
          
      </div>
           
        </>
    )
     
} 