import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./components/layout/Footer/Footer";
import SingleproductDetail from "./pages/SingleProductDetail";
import Cart from "./pages/cart";
import Products from "./pages/Products";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail/:id" element={<SingleproductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
