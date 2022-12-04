import React from 'react'
import styles from './AddUser.module.css'
import { useState,useEffect } from 'react'

import { useParams } from 'react-router-dom'
import blogService from '../../services/blogService'
const AddUser = () => {
  const { id }= useParams();
  
  

  const initialProducts = {
    id: null,
    title: "",
    author:"",
    description: "",
    features: "",
    gridfilename:[]
  };
  const [products ,setProducts] = useState(initialProducts);


  const response =  (id)=>{
    blogService.get(id)
          .then(response => {
          setProducts(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  }
  useEffect(() => {
    
    
    response(id)
  }, [id]);


  const handleInputChange = event => {
    const { name, value } = event.target;
    setProducts({ ...products, [name]: value });
    
  };

  const updateTutorial = () => {
    blogService.update(products.id, products)
      .then(response => {
        console.log(response.data);
        console.log("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  
 
  
  
return (






  <div className="body-body2">

     <div className="top-body-2">
  
     
  <div className="title">
       <p> ADD USERS </p>
  </div>
  
 </div>
  
  
  
  <div className="container-form">
  
  
     <form>
    <div className="row">
      <div className="col-25">
        <label htmlFor="fname">Title</label>
      </div>
      <div className="col-75">
        <input type="text" id="fname" name="title" onChange={handleInputChange} value={products.title}  placeholder="please ensure your title is unique "/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="lname">Author</label>
      </div>
      
      <div className="col-75">
        <input type="text" id="lname" name="author" onChange={handleInputChange} value={products.author} placeholder="Your username"/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="role">images</label>
      </div>
      <div className="col-75">
        <select id="role" name="role"  onChange={handleInputChange} value="choose" >
          <option name="admin" value={products.gridfilename[0]}>{products.gridfilename[0]}</option>
          <option name="user"  value={products.gridfilename[1]}>{products.gridfilename[1]}</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="subject">Description</label>
      </div>
      <div className="col-75">
        <textarea id="subject" name="description" onChange={handleInputChange} value={products.description} placeholder="Write something.." style= {{height :"200px"}}></textarea>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="subject">Features</label>
      </div>
      <div className="col-75">
        <textarea id="subject" name="features"  onChange={handleInputChange} value={products.features}  placeholder="Write something.." style={{height:"200px"}}></textarea>
      </div>
    </div>
    {/* <div className="row">
        <div className="col-25">
     <label  htmlFor="">input main image</label>
     <input type="file" name="files"/>
    </div>
    </div>
      <div className="row">
        <div className="col-25">
     <label  htmlFor="">input secondary image</label>
     <input type="file" name="files"/>
    </div>
    </div> */}
    
    <div className="row">
      <input type="submit" value="Submit"  onClick={updateTutorial}/>
    </div>
  </form>

  
    
  
    
  
  </div>
  </div>
  
  
  
  
  
  )
}

export default AddUser