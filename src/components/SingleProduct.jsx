import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

function SingleProduct() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));
    }, [id]);

    if (!product) return <h2>Loading...</h2>;

    console.log(id); // will give product id

    return (
        <div>
            <h1 className="single_product_info">Product Information</h1>

            <div className="product_details">
                    
                        <div className="product_card">
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
                            
                                <Link to="/" className="single_product_info">Back to Products</Link>
                                {product.stock < 1 ? <Link to="" className="addToCard">Not possible to Card</Link> : <Link to="" className="addToCard">Add to Card</Link>}
                            </div>
                        </div>
            </div>

        </div>
    );
}

export default SingleProduct;