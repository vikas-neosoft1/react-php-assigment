import axios from "axios";
 const URL = "http://localhost:3014/products/";
 const tt ="test"; 
 
 function getAllProducts(){
      return axios.get(URL);
 }
  
function getProductById(id) {
      return axios.get(`${URL}${id}`);
} 
  
function addProduct(data) {
     return axios.post(`${URL}`, data);
}  

 function editProductById(id,data) {
    return axios.post(`${URL}${id}`,data);
} 
 
function updateProduct(id, data) {
      return axios.post(`${URL}${id}`, data);
} 
 

function deleteProductById(id) {
    return axios.delete(`${URL}${id}`);
}  
  
  
  
 export { getAllProducts, getProductById, deleteProductById,addProduct,editProductById, updateProduct }; 
