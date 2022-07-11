import { BsMinecart } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "../Context/cartContext";
import { IoIosArrowRoundBack } from "react-icons/io";
import { DiJqueryLogo } from "react-icons/di";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const [active, setActive] = useState(false);
  const items = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (location.pathname === "/cart") {
      setActive(true);
    } else if (location.pathname === "/") {
      setActive(false);
    }
  }, [location]);

  return (
    <Navigation>
      {active ? (
        <BackButton onClick={handleClick}>
          <IoIosArrowRoundBack />
        </BackButton>
      ) : (
        <Link to="/">
          <BackButton>
            <DiJqueryLogo />
          </BackButton>
        </Link>
      )}
      <NavLink to="/cart">
        <BsMinecart /> {items.length}
      </NavLink>
    </Navigation>
  );
}

const BackButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  svg {
    font-size: 30px;
    cursor: pointer;
    color: gray;
  }
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 5% 0;
  font-size: 20px;
  color: grey;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  color: grey;
`;

export default Header;
