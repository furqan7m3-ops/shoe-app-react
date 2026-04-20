import './ProductCard.css';
import { AiFillShopping } from "react-icons/ai";
import {memo} from 'react';
function ProductCard({product}) {
    //random rating on each card
    const stars = [];
    const numStars = 1 + Math.random() * 5;
    for(let i=0;i<numStars;i++){
        stars.push(i);
    }
    return (
        <article className='product-card'>
            <img src={product?.img} alt={product?.title}/>
            <section className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <div className="ratings">
                    <div className="stars">
                        {stars.map(star=>product.star)}
                    </div>
                    <div className="review">
                        {product.reviews}
                    </div>
                </div>
                <div className="product-price">
                    <p className='prev-price'>{product.prevPrice}</p>
                    <p className='new-price'>{product.newPrice}</p>
                    <AiFillShopping className='shopping-bag-icon'/>
                </div>
            </section>
        </article>
    );
}

export default memo(ProductCard);