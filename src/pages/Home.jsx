import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";


function Home () {

    const [products, setProducts] = useState([]);

    useEffect (() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.products))
        .catch(error => console.log(error))
    }, []);

    if (!products) return <h2>Loading...</h2>;

    return (
        <div>
            <div className="banner_section">
                <h1 className="banner_title">Welcome to <span>easybuy</span> Shop</h1>
                <p className="banner_sologan">Discover amazing products at great price.</p>
            </div>
            <div className="container">
                <div className="product_title">
                    <h2>Our Products</h2>
                </div>
                <div className="product_details">

                    {products.map((product) => (
                    
                        <div className="product_card" key={product.id}>
                            <div className="product_card_image">    
                                <img src={product.thumbnail} alt="" />
                            </div>
                            <div className="product_card_info">
                                <h3 className="product_card_title">{product.title}</h3>
                                <p className="product_card_desc">{product.description}</p>
                                <p className="preoduct_card_price">Price: <span>$ {product.price}</span></p>
                                <p className="product_card_category">Category: <span>{product.category}</span></p>
                                <p className="preoduct_card_stock">Stock: <span> {product.stock}</span></p>
                                <p className="product_card_rating">{product.rating}</p>
                                {product.stock < 1 ? <h3 className="product_card_title">Out of stock</h3> : <h3 className="product_card_title">In stock</h3>}
                            
                                <Link to={`/product/${product.id}`} className="single_product_info">View this Product</Link>
                                {product.stock < 1 ? <Link to="" className="addToCard">Not possible to Card</Link> : <Link to="" className="addToCard">Add to Card</Link>}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Home;