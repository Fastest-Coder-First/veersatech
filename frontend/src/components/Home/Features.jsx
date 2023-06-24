import React from "react";
import { Col, Container } from "react-bootstrap";

const Features = () => {
  return (
    <Container as={"section"} className="p-4 features">
      <Col className="feature-item">
        <h2 className="feature-title">Track Expenses</h2>
        <p className="feature-description">
          Easily track your expenses and categorize them to get a clear overview
          of your spending habits.
        </p>
      </Col>
      <Col className="feature-item">
        <h2 className="feature-title">Manage Budget</h2>
        <p className="feature-description">
          Set up a budget and monitor your progress to ensure you're staying
          within your financial goals.
        </p>
      </Col>

      <Col className="feature-item">
        <h2 className="feature-title">Analyze Data</h2>
        <p className="feature-description">
          Analyze your financial data with visual charts and graphs to gain
          insights into your spending patterns and identify areas for
          improvement.
        </p>
      </Col>
      <Col className="feature-item">
        <h2 className="feature-title">Set Goals</h2>
        <p className="feature-description">
          Define your financial goals and track your progress as you work
          towards achieving them.
        </p>
      </Col>
    </Container>
  );
};

export default Features;
