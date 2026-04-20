import ProductSection from "../../components/ProductSection/ProductSection.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import RecommendedBar from "../../components/RecommendedBar/RecommendedBar.jsx";
import "./Dashboard.css";
import NavBar from "../../components/Navigation/Nav.jsx";
export default function Dashboard() {
    return (
        <div className="dashboard">
            <Sidebar />
            <section className="main-content">
                <NavBar />
                <RecommendedBar />
                <ProductSection />
            </section>
        </div>
    );
}