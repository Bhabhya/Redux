
import styled from "styled-components";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Redux/Cartslice";
import { Link } from "react-router-dom"; 

const Product = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(add(item));
    };

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Section className="container-fluid">
            <div className="row">
                {data.map((item, index) => (
                    <div key={index} className="col-md-4">
                        <div className="info">
                            
                            <Link to={`/products/${item.id}`}>
                                <div className="image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </Link>
                            <div className="title">
                                <strong>{item.title}</strong>
                                <h3>${item.price}</h3>
                            </div>
                            <button onClick={() => handleAdd(item)}>ADD TO CART</button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Product;

const Section = styled.div`
    margin-top: 20px;

    .image {
        display: flex;
        justify-content: center;
        border: 1px solid black;
        gap: 10px;
        margin-top: 20px;
    }

    .image img {
        width: 200px;
        height: 200px;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .title {
        text-align: center;
    }

    button {
        margin-left: 150px;
    }
`;
