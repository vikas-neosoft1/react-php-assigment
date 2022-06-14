import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';  
import Header from './myComponents/Header'; 
import Footer from './myComponents/Footer.js';
import Content from './myComponents/Content'; 
import Myfunction from './myComponents/Myfunction';  
import Myclass from './myComponents/Myclass'; 
import Nav from './myComponents/Nav'; 
import Home from './myComponents/Home';  
import Posts from './myComponents/Posts';
import About from './myComponents/About';   
import Contact from './myComponents/Contact';
import Productdetail from './myComponents/Productdetail';
import Myclassmount from './myComponents/Myclassmount';   
import Api from './myComponents/Api';     
import Products from './myComponents/Products';  
import Addproduct from './myComponents/Addproduct' ;
import Editproduct from './myComponents/Editproduct'; 
import Courses from './myComponents/Courses'; 
import Enquiry from './myComponents/Enquiry'; 
import Enquirylist from './myComponents/Enquirylist';
import Addcourse from './myComponents/Addcourse';
import Editcourse from './myComponents/Editcourse';       
 
function App() {
  let courses = ["Php","java","mnysql","javbascript"];
  return (
   <main>
      <Router>
         <Nav/>
          <section>
             <Routes>
               <Route path="/" element={<Home/>  }/>
               <Route path="/about" element={<About/>}/> 
               <Route path="/contact" element={<Contact/>}/>    
               <Route path="/product/:id" element={<Productdetail/>}/>  
               <Route path="/state" element={<Myclass/>}/>
               <Route path="/posts" element={<Posts/>}/> 
               <Route path="/addproduct" element={<Addproduct/>}/>   
               <Route path="/products" element={<Products/>}/> 
               <Route path="/productdetail/:id" element={<Productdetail/>}/>
               <Route path="/editproduct/:id" element={<Editproduct/>}/>  
               <Route path="/api" element={<Api/>}/>  
               <Route path="/courses" element={<Courses/>}/> 
               <Route path="/enquiry/:course" element={<Enquiry/>}/>
               <Route path="/course_enquiry_list" element={<Enquirylist/>}/>
               <Route path="/add_course" element={<Addcourse/>}/> 
               <Route path="/add_course" element={<Addcourse/>}/>      
               <Route path="/edit_course/:id" name="vikas" element={<Editcourse/>}      />       
             </Routes>
          </section>
      </Router>
   </main>
  );
}

export default App;
