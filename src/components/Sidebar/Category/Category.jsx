import "./Category.css";
import { FaShoppingBag } from "react-icons/fa";
import {useProductFilterContext} from "../../../context/ProductFilterProvider.jsx";

export default function Category() {
    const {handleCategoryChange} = useProductFilterContext();
    return (
        <section className='product-categories-filter'>
            <h3 className='category-filter-title'> <FaShoppingBag /> Category</h3>
            <div className="options">
                <label>
                    <input type="radio" onChange={handleCategoryChange} name="product-category" value="" />
                    All
                </label>
                <label>
                    <input type="radio" onChange={handleCategoryChange} name="product-category" value="sneakers"/>
                    Sneakers
                </label>
                <label>
                    <input type="radio" onChange={handleCategoryChange} name="product-category" value="flats"/>
                    Flats
                </label>
                <label>
                    <input type="radio" onChange={handleCategoryChange} name="product-category" value="sandals"/>
                    Sandals
                </label>
                <label>
                    <input type="radio" onChange={handleCategoryChange} name="product-category" value="heels"/>
                    Heels
                </label>
            </div>
        </section>
    );
}