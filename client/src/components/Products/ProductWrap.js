import React from 'react'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import blogService from '../../services/blogService'
import Product from './Product'
const ProductWrap = () => {

  const { id } = useParams();



  const initialProducts = {
    id: null,
    title: "",
    description: "",
    features: "",
    gridfilename: [],
    author: "",
    role: "",
    createdAt: ""
  };
  const [products, setProducts] = useState(initialProducts);
  const [state, setState] = useState(false)
  const response = (id) => {
    blogService.get(id)
      .then(response => {
        setProducts(response.data);
        setState(true)
      })
      .catch(e => {
        console.log(e);
      });
  }
  const pics = products.gridfilename
  useEffect(() => {


    response(id)
    console.log(products)
  }, [id]);
  return (
    <div>
      {(function () {
        if (state === true) {
          return <Product id={products._id} title={products.title}

            description={products.description} features={products.features}
            author={products.author} date={products.createdAt} image={pics} />
        }
      })(state)}












    </div>

  )
}

export default ProductWrap