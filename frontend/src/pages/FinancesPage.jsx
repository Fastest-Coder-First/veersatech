import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { TableComponent, SearchFilters } from "../Components/Finances";
import NavbarComponent from "../Components/Common/NavbarComponent";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createTransaction, getTransactions } from "../apis/transactions";
import axios from "axios";

const FinancesPage = () => {
  const { currentUser, loggedIn, setLoggedIn } = useAuth();

  // usequery to get all transactions
  // const { data, isLoading, error } = useQuery(
  //   ["transactions"],
  //   getTransactions
  // );

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/category/getall")
  //     .then((res) => {
  //       console.log("dflsfjd", res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const createTransactionMutation = useMutation(
    ["create-transaction"],
    createTransaction
  );

  const handleSubmit = async () => {
    try {
      const res = await createTransactionMutation.mutateAsync({
        // username,
        // email,
        // password,
      });
      console.log(res);

      if (res?.status === 201) {
        console.log("signup successful");
        localStorage.setItem("token", res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="finances">
      <NavbarComponent />
      <br />
      <br />
      <div className="container">
        <SearchFilters />
        <TableComponent
          name="Finances"
          btnType="Add Transaction"
          createNewItemType="AddTransaction"
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default FinancesPage;
