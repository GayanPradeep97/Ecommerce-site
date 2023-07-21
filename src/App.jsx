import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout";
import HomePage from "./pages/homePage/HomePage";
import Shop from "./pages/shop/Shop";
import Blog from "./pages/blog/Block";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import WishList from "./pages/wishlist/WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<Shop />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<WishList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
