import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import ProductFilterProvider from "./context/ProductFilterProvider.jsx";

export default function App() {
    return (
        <ProductFilterProvider>
            <Dashboard/>
        </ProductFilterProvider>
    );
}