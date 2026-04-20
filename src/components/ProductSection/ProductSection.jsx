import "./ProductSection.css";
import {useProductFilterContext} from "../../context/ProductFilterProvider.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import {MdProductionQuantityLimits} from "react-icons/md";
import products from "../../db/data.jsx";
export default function ProductSection() {
    const {filterProducts} = useProductFilterContext();
    let filteredProducts = filterProducts(products);
    return (
        <>
            {
                filteredProducts?.length > 0 ? (
                        <article className='products-section'>
                            {
                                filteredProducts.map(product=><ProductCard product={product}/>)
                            }
                        </article>
                    )
                    : (
                        <section className="products-not-found">
                            <MdProductionQuantityLimits className='products-limit-icon'/>
                            <h2>Products Not Found!</h2>
                        </section>
                    )
            }
        </>
    );
}