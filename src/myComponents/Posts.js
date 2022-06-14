import React, {useState} from "react";
export default function Posts() {
  let [postRows,setPostData] = useState([]);
    let API = "https://jsonplaceholder.typicode.com/posts";
    fetch(API)
    .then((res)=>res.json())
    .then((res)=>{
        setPostData(res); 
         
        
    });
    return (
      <div className="container">
          <h2> Posts</h2>
          
           
          <div>
              {postRows?.map(post=>
                  <div key={post.id}>
                      <h4> {post.title} </h4>
                      <article> {post.body} </article>
                      <hr/>
                  </div>)}
          </div>
      </div>
    )
     

  }
 