import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { FinancesTable, SearchFilters } from "../components/Finances";
import NavbarComponent from "../components/Common/NavbarComponent";

const FinancesPage = () => {
  const { currentUser, loggedIn, setLoggedIn } = useAuth();

  return (
    <div className="finances">
      <NavbarComponent />
      <br />
      <br />
      <div className="container">
        <SearchFilters />
        <FinancesTable />
      </div>
    </div>
  );
};

export default FinancesPage;
