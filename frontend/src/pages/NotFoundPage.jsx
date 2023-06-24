import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="text-center">404</h1>
            <h2 className="text-center">Page Not Found</h2>
            <p className="text-center">
              Oops! The page you are looking for does not exist.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFoundPage;
