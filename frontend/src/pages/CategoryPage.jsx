import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { TableComponent, SearchFilters } from "../Components/Finances";
import NavbarComponent from "../Components/Common/NavbarComponent";
import {getCategory}  from "../apis/category.js";
import { Button } from "react-bootstrap";
import { useState } from 'react';

const Category = () => {
  const { currentUser, loggedIn, setLoggedIn } = useAuth();
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
  },[]);

  // create on search using event value on data
  const onSearch = (value) => {
    setSearch(value);
    const filterData = data.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setData(filterData);
  };

  return (
    <div className="finances">
      <NavbarComponent />
      <br />
      <br />
      <div className="container">
        <TableComponent tableData={data} name="Category" btnType="Add Category" createNewItemType="AddCategory"/>
      </div>
    </div>
  );
};

export default Category;
