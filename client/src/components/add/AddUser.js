import React from 'react'
import css from './AddUser.module.css'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import blogService from '../../services/blogService'
const AddUser = () => {
  const { id } = useParams();



  const initialProducts = {
    id: null,
    title: "",
    author: "",
    role: "",
    description: "",
    features: "",
    gridfilename: [],
    gridfileid: []
  };
  const [products, setProducts] = useState(initialProducts);

  const [images, setImages] = useState([]);


  const newInitialImages = {
    array3: [],
    array4: []
  };
  const [newImages, setNewImages] = useState(newInitialImages);

  const responses = (id) => {
    blogService.getImages(id)
      .then((response) => {
        setImages(response.data);

      })
      .catch(e => {
        console.log(e);
      });
  }
  let array1 = [products.gridfilename[0], products.gridfileid[0]]
  let array2 = [products.gridfilename[1], products.gridfileid[2]]
  useEffect(() => {
    responses(id)


  }, [id])

  const response = (id) => {
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
  const handleSelectChange = event => {

    const { name, value } = event.target;
    setNewImages({ ...newImages, [name]: value });


  };

  const blogServiceTopic = () => {

    blogService.update(id, products)
      .then(response => {

        console.log("The tutorial was blogServiced successfully!");
      })
      .catch(e => {
        console.log(e);
      });

    blogService.updateImages(id, newImages)
      .then(response => {

        console.log("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });

  };







  return (






    <div className={css.body2}>

      <div className={css.top}>


        <div className={css.title}>
          <p> ADD USERS </p>
        </div>

      </div>



      <div className={css.containerform}>


        <form>
          <div className={css.row}>
            <div className={css.col25}>
              <label htmlFor="fname">Title</label>
            </div>
            <div className={css.col75}>
              <input type="text" id="fname" name="title" onChange={handleInputChange} value={products.title} placeholder="please ensure your title is unique " />
            </div>
          </div>
          <div className={css.row}>
            <div className={css.col25} >
              <label htmlFor="lname">Author</label>
            </div>

            <div className={css.col75}>
              <input type="text" id="lname" name="author" onChange={handleInputChange} value={products.author} placeholder="Your username" />
            </div>
          </div>
          <div className={css.row}>
            <div className={css.col25} >
              <label htmlFor="image"> Image</label>
            </div>
            <div className={css.col25}>
              <select id="image" onChange={handleSelectChange} name="array3"  >
                <option name={products.gridfilename[0]} onChange={handleSelectChange} value={array1}>{products.gridfilename[0]} </option>
                {images && images.map((el) => {
                  newInitialImages.array3 = [el.filename, el._id]
                  return <option name={products.gridfilename[0]} onChange={handleSelectChange} value={newInitialImages.array3}>{el.filename}</option>
                })}
              </select>
            </div>
            <div className={css.col25}>
              <select id="image" onChange={handleSelectChange} name="array4">
                <option name={products.gridfilename[1]} onChange={handleSelectChange} value={array2}>{products.gridfilename[1]}</option>
                {images && images.map((el) => {
                  newInitialImages.array4 = [el.filename, el._id]

                  return <option name={products.gridfilename[1]} onChange={handleSelectChange} value={newInitialImages.array4}>{el.filename}</option>


                })}
              </select>
            </div>
          </div>
          <div className={css.row}>
            <div className={css.col25} >
              <label htmlFor="subject">Description</label>
            </div>
            <div className={css.col75}>
              <textarea id="subject" name="description" onChange={handleInputChange} value={products.description} placeholder="Write something.." style={{ height: "200px" }}></textarea>
            </div>
          </div>
          <div className={css.row}>
            <div className={css.col25}>
              <label htmlFor="subject">Features</label>
            </div>
            <div className={css.col75}>
              <textarea id="subject" name="features" onChange={handleInputChange} value={products.features} placeholder="Write something.." style={{ height: "200px" }}></textarea>
            </div>
          </div>


          <div className="row">
            <input type="submit" value="Submit" onClick={blogServiceTopic} />
          </div>
        </form>






      </div>
    </div>





  )
}

export default AddUser