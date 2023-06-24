import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/Common/NavbarComponent";

const DashboardPage = () => {
  return (
    <div>
      <NavbarComponent />

      <Container>
        <Row className="mt-4">
          <Col>
            <h1>Welcome to the Dashboard</h1>
            <p>Here you can view and manage your financial data.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardPage;
