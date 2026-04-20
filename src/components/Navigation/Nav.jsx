import './Nav.css';
import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import {useProductFilterContext} from "../../context/ProductFilterProvider.jsx";
export default function NavBar(props) {
    const {query, handleQueryChange} = useProductFilterContext();
    return (
        <nav className="nav">
            <div className="search-bar">
                <IoSearchSharp />
                <input type="text" name="search-product" onChange={handleQueryChange} value={query} className="input-search" placeholder="Search Product"/>
            </div>
            <section className="profile">
                <a href="#">
                    <FiHeart className='nav-icons'/>
                </a>
                <a href="#">
                    <AiOutlineShoppingCart className='nav-icons'/>
                </a>
                <a href="#">
                    <AiOutlineUserAdd className='nav-icons'/>
                </a>
            </section>
        </nav>
    );
}