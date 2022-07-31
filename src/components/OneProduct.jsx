import React from "react";
import { useContext, useState, useEffect } from "react";
import { BsMinecart } from "react-icons/bs";
import { useDispatch } from "../Context/cartContext";
import { ProductContext } from "../Context/productContext";
import styled from "styled-components";

function OneProduct({ filterItem }) {
  const [filtredItems, setFiltredItems] = useState([]);
  const [products] = useContext(ProductContext);

  const dispatch = useDispatch();

  useEffect(() => {
    const filtredItem = products?.filter((allItem) =>
      allItem.name?.toLowerCase().includes(filterItem?.toLowerCase())
    );
    setFiltredItems(filtredItem);
  }, [filterItem, products]);

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  return (
    <FilteredData>
      {filtredItems?.map((value) => {
        return (
          <Product key={value.id}>
            <img src={value.image} alt={value.name} />
            <h2>{value.name}</h2>
            <Gradient />
            <Button onClick={() => addToCart(value)}>
              <BsMinecart />
            </Button>
          </Product>
        );
      })}
    </FilteredData>
  );
}
const Product = styled.div`
  @media (max-width: 500px) {
    max-width: 300px;
    height: 400px;
  }
  max-width: 400px;
  width: 100%;
  margin-bottom: 5%;
  height: 500px;
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

const Button = styled.button`
  position: absolute;
  top: 5%;
  right: 9%;
  background-color: rgb(235, 235, 235);
  border: none;
  outline: none;
  border-radius: 50%;
  padding: 4%;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  z-index: 30;
  cursor: pointer;
  svg {
    font-size: 20px;
    color: grey;
  }
  ${Product}:hover & {
    opacity: 1;
  }
`;

const FilteredData = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default OneProduct;
