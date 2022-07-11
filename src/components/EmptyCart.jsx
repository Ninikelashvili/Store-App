import { BsMinecart } from "react-icons/bs";
import styled from "styled-components";

function EmptyCart() {
  return (
    <NoItem>
      <h2>Yout Cart is Empty</h2>
      <BsMinecart />
    </NoItem>
  );
}
const NoItem = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 75px;
  svg {
    height: 80%;
    width: 80%;
    color: rgb(228, 228, 228);
  }
  h2 {
    font-family: system-ui;
    font-weight: 200;
    margin-top: 20px;
    font-size: 40px;
  }
`;

export default EmptyCart;
