import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { add } from "../Redux/Cartslice";

const Info = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null); 
  const dispatch = useDispatch();

  useEffect(() => {
    
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        setProduct(response.data); 
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]); 

  const handleAdd = () => {
    // Use productDetails directly instead of passing an undefined item
    dispatch(add(product));
  };



  return (
    <Section>
      {product ? ( 
        <div className='box'>
          <h2>Product Details</h2>
          <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
          <p>Name: {product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>Rating:{product.rating.rate}  <Rating name="half-rating" defaultValue={2.5} precision={0.5} style={{marginTop:'-50px'}} /></p>
         <div className='btn'>
         <Link to='/cart'>
          <button onClick={handleAdd}>Add to cart</button>
          </Link>
          </div>
        </div>

       
      ) : (
        <p>Loading product details...</p>
      )}
    </Section>
  );
}

export default Info;

const Section=styled.div`

.box{

  border: 1px solid black;
}

.box img{
  margin-top: 20px;
  margin-left: 500px;
  border: 1px solid #3bb77e;
  padding: 20px 20px;
}

.box p{
  text-align: center;
  font-weight: 700;
}

.btn{
  margin-left: 600px;
  //background-color: palegreen;//
  margin-bottom: 20px;
  border: none;
  outline: none;
}

`;
