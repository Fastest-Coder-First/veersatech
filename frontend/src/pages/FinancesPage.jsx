import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  TableComponent,
  SearchFilters,
  FinanceTable,
} from "../Components/Finances";
import NavbarComponent from "../Components/Common/NavbarComponent";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createTransaction, getTransactions } from "../apis/transactions";
import axios from "axios";

const FinancesPage = () => {
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("income");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [show, setShow] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      type: "Expense",
      name: "Electric Bill",
      date: "2023-06-15",
      amount: 100,
      category: "Utilities",
    },
    {
      id: 2,
      type: "Income",
      name: "Salary",
      date: "2023-06-20",
      amount: 2000,
      category: "Income",
    },
    {
      id: 3,
      type: "Expense",
      name: "Groceries",
      date: "2023-06-10",
      amount: 50,
      category: "Food",
    },
    {
      id: 4,
      type: "Expense",
      name: "Internet Bill",
      date: "2023-06-25",
      amount: 80,
      category: "Utilities",
    },
    {
      id: 5,
      type: "Income",
      name: "Freelance Work",
      date: "2023-06-18",
      amount: 500,
      category: "Income",
    },
    {
      id: 6,
      type: "Expense",
      name: "Dinner",
      date: "2023-06-12",
      amount: 30,
      category: "Food",
    },
  ]);

  const handleClose = () => setShow(false);

  const handleSubmit = async () => {
    try {
      // add transaction to the data array
      console.log("handleSubmit");
      setData([
        ...data,
        {
          id: data.length + 1,
          type: transactionType,
          name: description,
          date: date,
          amount: amount,
          category: category,
        },
      ]);
      console.log(data);
      handleClose();
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
        <FinanceTable
          name="Finances"
          btnType="Add Transaction"
          createNewItemType="AddTransaction"
          data={data}
          handleSubmit={handleSubmit}
          amount={amount}
          setAmount={setAmount}
          transactionType={transactionType}
          setTransactionType={setTransactionType}
          category={category}
          setCategory={setCategory}
          date={date}
          setDate={setDate}
          description={description}
          setDescription={setDescription}
          show={show}
          setShow={setShow}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default FinancesPage;
