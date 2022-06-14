import React,{Component, useState} from "react";
 class Myclassmount extends Component{
       
     constructor(props) {
          super(props);
      } 
      
      
      state = {abc : ''};
      componentDidMount(){
           this.setState({abc:"ABC"});
      }
       
      componentDidUpdate(){
          console.log("updated");
      }

       componentWillUnmount(){
            console.log("unmount!");
            console.log(this); 
       }
        
       render(){
            
       
            return(
                 <>
                  <h1>Class component with mount  : {this.state.abc} props: {this.props.name} </h1>
                   
                 {/* <ul>
                  {this.props.mycourses.map((val,ind)=>
                     <li key={ind}> {val}</li>
                  )}
                  </ul> */}


                       
                 </>
              
               )         
    }     
 }
  
 export default Myclassmount; 