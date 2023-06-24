import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../Components/Common/NavbarComponent";
import BarChart from "../Components/Chart";
import PieChart from "../Components/PieChart";

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
        <Row>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ width: "50%" }}>
              <BarChart />
            </div>
            <div style={{ width: "30%" }}>
              <PieChart />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardPage;
