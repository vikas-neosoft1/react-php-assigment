import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header'; 
import Footer from './myComponents/Footer.js';
import Content from './myComponents/Content'; 
import Myfunction from './myComponents/Myfunction';  
import Myclass from './myComponents/Myclass';    

function App() {
  let addr = "Aligarh"; 
  return (
     <>
    <div className="App">
     
      <Header/>
      <Content/>
      <Myfunction name="vikas" address={addr} /> 
       <Myclass/>
      <Footer/> 
       
    </div>
     </>
  );
}

export default App;
