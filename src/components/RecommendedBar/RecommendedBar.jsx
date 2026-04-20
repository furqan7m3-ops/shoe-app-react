import "./RecommendedBar.css";
import {useProductFilterContext} from "../../context/ProductFilterProvider.jsx";
export default function RecommendedBar() {
    const {applyCompanyFilter, getAllProducts} = useProductFilterContext();
    return (
        <section className='recommended-bar'>
            <h1 className='rec-title'>Recommended</h1>
            <div className="rec-btns">
                <button onClick={getAllProducts}>All Products</button>
                <button onClick={applyCompanyFilter}>Nike</button>
                <button onClick={applyCompanyFilter}>Addidas</button>
                <button onClick={applyCompanyFilter}>Vans</button>
                <button onClick={applyCompanyFilter}>Puma</button>
            </div>
        </section>
    );
}