import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header'; 
import Footer from './myComponents/Footer.js';
import Content from './myComponents/Content';  

function App() {
  return (
     <>
    <div className="App">
     
      <Header/>
      <Content/>
      <Footer/> 
       
    </div>
     </>
  );
}

export default App;
