import React, { useState } from "react";
import { Modal, Button, Form, Container, Table } from "react-bootstrap";

const FinancesTable = (props) => {
  const {
    amount,
    setAmount,
    transactionType,
    setTransactionType,
    description,
    setDescription,
    category,
    setCategory,
    date,
    setDate,
    show,
    setShow,
    handleClose,
  } = props;

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);

  const renderTableRows = () => {
    console.log("data", props.data);
    return props.data.map((item) => (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.date}</td>
        <td>{item.amount}</td>
      </tr>
    ));
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.handleSubmit}>
            <Form.Group controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="transactionType">
              <Form.Label>Transaction Type</Form.Label>
              <Form.Control
                as="select"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleSubmit}>
            Save Transaction
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="d-flex justify-content-between align-items-center">
        <h1>{props.name}</h1>

        <Button variant="primary" onClick={() => setShow(true)}>
          Add Transaction
        </Button>
      </div>

      <br />
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Category</th>
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
