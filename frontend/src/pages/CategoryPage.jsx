import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { FinancesTable, SearchFilters } from "../Components/Finances";
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
        <FinancesTable name="Category" btnType="Add Category"/>
      </div>
    </div>
  );
};

export default Category;
