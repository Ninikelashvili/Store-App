import styled from "styled-components";
import { useCart } from "../Context/cartContext";
import EmptyCart from "../components/EmptyCart";

function Cart() {
  const cartItem = useCart();

  if (cartItem.length === 0) {
    return <EmptyCart />;
  }
  return (
    <FilteredData>
      {cartItem.map((item) => {
        return (
          <Product key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <Gradient />
          </Product>
        );
      })}
    </FilteredData>
  );
}

const Product = styled.div`
  max-width: 300px;
  width: 100%;
  height: 400px;
  margin-bottom: 5%;
  border-radius: 10px;
  position: relative;
  transition: all 0.5s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  h2 {
    position: absolute;
    left: 5%;
    bottom: 10%;
    z-index: 10;
    color: #fff;
    width: 100%;
    font-family: system-ui;
    font-weight: 200;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  ${Product}:hover & {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  }
`;

const FilteredData = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Cart;
