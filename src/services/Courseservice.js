import React from "react";
import axios from "axios"; 
 
 
let APIURL = "http://localhost:3011/courses/";
let EnQUrl = "http://localhost:3014/enquiry"; 
 
function getCoureses() {
    return axios.get(`${APIURL}`);
}
 
function addCourse(data) {
    return axios.post(`${APIURL}`,data);
} 
 
 
function addEnquiry(data) {
    return axios.post(`${EnQUrl}`,data);
}
 
function getCourseById(id) {
     return axios.get(`${APIURL}${id}`);
}
 

 
function getEnquires() {
     return axios.get(`${EnQUrl}`)
} 


 export {getCoureses,addEnquiry,getEnquires, addCourse,getCourseById};