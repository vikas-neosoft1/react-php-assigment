import React, {Component,useState} from "react";
class Myclass extends Component{
     
      constructor(props) {
          super(props);
          this.state = {count:0}; 
      }
       
      counter=()=> {
            this.setState({count:this.state.count + 1});
      } 
      
     render(){
          
          
          return(
               <>
               <h1>I am class comnponent, click btn to incrase counter</h1> <br />
               <span>The counter is {this.state.count}</span> <br />
               <button type="button" className="btn btn-success btn-sm" onClick={this.counter}>Clink me</button> 
               
                  
                   
                    
                </>
          ) 
          }
}
 
export default Myclass; 