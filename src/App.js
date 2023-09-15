import { useSelector } from "react-redux";
import "./App.css";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import ShoppingCart from "./pages/ShoppingCart";
import { Routes, Route } from "react-router-dom";

function App() {
  const theme = useSelector((state) => state.navigationBar.themeButton);
  return (
    <div
      className={`${
        theme
          ? "bg-gradient-to-b from-gray-500 to-gray-800 h-screen"
          : "bg-white"
      }`}
    >
      <Navbar />
      <Routes>
        <Route path="/e_commerce_site_react_redux" element={<Items />} />
      </Routes>
      <Routes>
        <Route path="/shopping_cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
