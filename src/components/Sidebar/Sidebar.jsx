import './Sidebar.css';
import Category from './Category/Category.jsx';
import Colors from "./Colors/Colors.jsx";
import Price from './Price/Price.jsx';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {RiListSettingsFill} from "react-icons/ri";
export default function Sidebar() {
    return (
        <section className="sidebar">
            <div className="sidebar-logo">
                <RiListSettingsFill />
                <h2 className='sidebar-logo-title'>Filters</h2>
            </div>

            <div className="sidebar-content">
                <Category className="sidebar-category"/>
                <Price className="sidebar-price"/>
                <Colors className="sidebar-colors"/>
            </div>
        </section>
    );
}