import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { TableComponent, SearchFilters } from "../Components/Finances";
import NavbarComponent from "../Components/Common/NavbarComponent";

const FinancesPage = () => {
  const { currentUser, loggedIn, setLoggedIn } = useAuth();

  return (
    <div className="finances">
      <NavbarComponent />
      <br />
      <br />
      <div className="container">
        <SearchFilters />
        <TableComponent name="Finances" btnType="Add Transaction"/>
      </div>
    </div>
  );
};

export default FinancesPage;
