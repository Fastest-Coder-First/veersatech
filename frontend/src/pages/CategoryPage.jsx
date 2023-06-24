import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { TableComponent, SearchFilters } from "../Components/Finances";
import NavbarComponent from "../Components/Common/NavbarComponent";

const Category = () => {
  const { currentUser, loggedIn, setLoggedIn } = useAuth();

  return (
    <div className="finances">
      <NavbarComponent />
      <br />
      <br />
      <div className="container">
        <SearchFilters />
        <TableComponent name="Category" btnType="Add Category"/>
      </div>
    </div>
  );
};

export default Category;
