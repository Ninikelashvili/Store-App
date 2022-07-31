import { useState, useCallback } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import OneProduct from "./OneProduct";

function Search() {
  const [filterItem, setFilterItem] = useState("");

  const handleFilter = useCallback((e) => {
    setFilterItem(e.target.value);
  }, []);

  console.log(handleFilter);
  return (
    <>
      <Searchinput>
        <BsSearch className="search-icon" />
        <Input type="text" id="SearchInput" onChange={handleFilter} />
      </Searchinput>
      <OneProduct filterItem={filterItem} />
    </>
  );
}

const Searchinput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10%;
  background-color: rgb(251, 251, 251);
  box-shadow: 0 0 20px rgb(243, 242, 242);
  padding: 0 2%;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 2% 2%;
  background-color: rgb(251, 251, 251);
  border: none;
  outline: none;
  font-family: sans-serif;
  font-size: 20px;
  color: grey;
`;

export default Search;
