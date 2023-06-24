import React from "react";
import { useAuth } from "../contexts/AuthContext";

const FinancesPage = () => {
  const { currentUser, loggedIn, setLoggedIn } = useAuth();

  return <div>FinancesPage</div>;
};

export default FinancesPage;
