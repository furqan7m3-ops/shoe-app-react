import {useState, useContext, createContext, useCallback} from 'react';
const FilterProductContext = createContext(null);

export default function ProductFilterProvider({ children }) {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [company, setCompany] = useState('');
    const handleQueryChange = (event)=> {
        setQuery(event.target.value);
    }
    const handleCategoryChange = (event)=> setCategory(event.target.value);
    const handleColorChange = (event)=> setColor(event.target.value);
    const handlePriceChange = (event)=> setPrice(event.target.value);
    const applyCompanyFilter = (event)=>setCompany(event.target.innerText);
    const filterProducts = (products)=>{
        return products.filter(
            (product) =>{
                const matchQuery = !query || product.title.toLowerCase().includes(query.toLowerCase());
                const matchCategory = !category || product.category ===category;
                const matchColor = !color || product.color === color;
                const matchPrice = !price || product.newPrice === price;
                const matchCompany = !company || product.company === company;
                return matchQuery && matchCategory && matchColor && matchPrice && matchCompany;
            }
        );
    };
    const clearAllFilters = () => {
        setQuery('');
        setCategory('');
        setPrice('');
        setColor('');
        setCompany('');
    }
    const getAllProducts = ()=>{
        clearAllFilters();
    }

    const store={
        query,
        handleQueryChange,
        color,
        handleColorChange,
        price,
        handlePriceChange,
        category,
        handleCategoryChange,
        filterProducts,
        applyCompanyFilter,
        getAllProducts,
    }
    return (
        <FilterProductContext.Provider value={store}>{children}</FilterProductContext.Provider>
    )
}

export const useProductFilterContext = function(){
    return useContext(FilterProductContext);
}