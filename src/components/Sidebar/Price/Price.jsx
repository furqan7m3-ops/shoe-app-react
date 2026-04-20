import "./Price.css";
import { FaDollarSign } from "react-icons/fa";
import {useProductFilterContext} from "../../../context/ProductFilterProvider.jsx";
export default function Price() {
    const {handlePriceChange} = useProductFilterContext();
    return (
        <section className='product-categories-filter'>
            <h3 className='category-filter-title'><FaDollarSign />Price</h3>
            <div className="options">
                <label>
                    <input type="radio" onChange={handlePriceChange} name="product-price" value=""/>
                    All
                </label>
                <label>
                    <input type="radio" onChange={handlePriceChange} name="product-price" value={'50'}/>
                    0 - 50
                </label>
                <label>
                    <input type="radio" onChange={handlePriceChange} name="product-price" value={'100'}/>
                    50 - 100
                </label>
                <label>
                    <input type="radio" onChange={handlePriceChange} name="product-price" value={'150'}/>
                    100 -150
                </label>
                <label>
                    <input type="radio" onChange={handlePriceChange} name="product-price" value={'200'}/>
                    Over 150
                </label>
            </div>
        </section>
    );
}