import React from "react";
import { Button } from "react-bootstrap";

const HeroSection = ({ handleShow }) => {
  return (
    <header className="jumbotron">
      <h1>Welcome to Personal Finance Tracker</h1>
      <p>
        Track your expenses, manage your budget, and stay on top of your
        financial goals.
      </p>
      <Button variant="primary" onClick={handleShow}>
        Get Started
      </Button>
    </header>
  );
};

export default HeroSection;
