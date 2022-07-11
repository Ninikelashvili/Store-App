import Search from "./components/Search";
import { ProductProvider } from "./Context/productContext";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { CartProvider } from "./Context/cartContext";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Body>
          <Header />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Body>
      </ProductProvider>
    </CartProvider>
  );
}

const Body = styled.div`
  padding: 2% 10%;
  height: 100%;
`;
export default App;
