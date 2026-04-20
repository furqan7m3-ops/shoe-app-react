import "./Colors.css";
import { IoIosColorPalette } from "react-icons/io";
import {useProductFilterContext} from "../../../context/ProductFilterProvider.jsx";
export default function Colors() {
    const {handleColorChange} = useProductFilterContext();
    return (
        <section className='product-categories-filter'>
            <h3 className='category-filter-title'><IoIosColorPalette />Colors</h3>
            <div className="options">
                <label>
                    <input type="radio" onChange={handleColorChange} name="product-color" value=""/>
                    All
                </label>
                <label>
                    <input type="radio" onChange={handleColorChange} name="product-color" value="black"/>
                    Black
                </label>
                <label>
                    <input type="radio" onChange={handleColorChange} name="product-color" value="blue"/>
                    Blue
                </label>
                <label>
                    <input type="radio" onChange={handleColorChange} name="product-color" value="red"/>
                    Red
                </label>
                <label>
                    <input type="radio" onChange={handleColorChange} name="product-color" value="green"/>
                    Green
                </label>
                <label>
                    <input type="radio" onChange={handleColorChange} name="product-color" value="white"/>
                    White
                </label>
            </div>
        </section>
    );
}