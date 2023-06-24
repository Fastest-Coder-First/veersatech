import React, { useState } from "react";
import NavbarComponent from "../Components/Common/NavbarComponent";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Modal,
  Form,
} from "react-bootstrap";

const AccountsPage = () => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");
  const accounts = [
    { bankName: "PNB", accountNumber: "1234", balance: "$34" },
    { bankName: "SBI", accountNumber: "1234", balance: "$34" },
    { bankName: "HDFC", accountNumber: "1234", balance: "$34" },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={() => {}}>
            <Form.Group controlId="amount">
              <Form.Label>Account Name</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter account name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="transactionType">
              <Form.Label>Account Code</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter account code"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Account Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Account type"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {}}>
            Save Transaction
          </Button>
        </Modal.Footer>
      </Modal>
      <NavbarComponent />
      <br />
      <br />
      <Container>
        {" "}
        {/* <h1>Accounts</h1> <br /> */}
        <div className="d-flex justify-content-between align-items-center">
          <h1>Accounts</h1>

          <Button variant="primary" onClick={() => setShow(true)}>
            Add Transaction
          </Button>
        </div>
        <br />
        <Row>
          {" "}
          {accounts.map((account, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              {" "}
              <Card>
                {" "}
                <Card.Body>
                  {" "}
                  <Card.Title>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>{account.bankName}</div>
                      <div>
                        <input type="radio" />
                      </div>
                    </div>
                  </Card.Title>{" "}
                  <Card.Text>Account Number: {account.accountNumber}</Card.Text>{" "}
                  <Card.Text>Balance: {account.balance}</Card.Text>{" "}
                </Card.Body>{" "}
              </Card>{" "}
            </Col>
          ))}{" "}
        </Row>{" "}
      </Container>
    </div>
  );
};

export default AccountsPage;
