import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FormBuilder } from "../../utils/constants";
import CreateForm from "../Form/CreateForm";

const FinancesTable = (props) => {
  const data = [
    {
      id: 1,
      type: "Expense",
      name: "Electric Bill",
      date: "2023-06-15",
      amount: 100,
    },
    { id: 2, type: "Income", name: "Salary", date: "2023-06-20", amount: 2000 },
    {
      id: 3,
      type: "Expense",
      name: "Groceries",
      date: "2023-06-10",
      amount: 50,
    },
    {
      id: 4,
      type: "Expense",
      name: "Internet Bill",
      date: "2023-06-25",
      amount: 80,
    },
    {
      id: 5,
      type: "Income",
      name: "Freelance Work",
      date: "2023-06-18",
      amount: 500,
    },
    { id: 6, type: "Expense", name: "Dinner", date: "2023-06-12", amount: 30 },
  ];

  const renderTableRows = () => {
    return data.map((item) => (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.name}</td>
        <td>{item.date}</td>
        <td>{item.amount}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{props.name}</h1>

        {/* <Button variant="primary">Add Transaction</Button> */}
        <CreateForm
          recordType="AddTransaction"
          recordFields={FormBuilder["AddTransaction"]}
        />
      </div>

      <br />
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </Table>
      </Container>
    </div>
  );
};

export default FinancesTable;
