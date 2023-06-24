import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ show, handleClose, handleShow }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // handle signup function to query localhost:4000/user/signup with email and password using axios
  const handleSignup = async () => {
    // use signUpUser function from apis.js
    try {
      console.log("signup");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    // use loginUser function from apis.js
    try {
      console.log("login");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Login/Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              isValid={isValidEmail(email)}
              isInvalid={!isValidEmail(email)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // isValid={password.length > 6}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
        {isLoginForm ? (
          <>
            <Button
              variant="primary"
              className="w-100 mb-3"
              onClick={handleLogin}
            >
              Sign in
            </Button>
            <p className="text-center">
              Don't have an account? &nbsp;
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => setIsLoginForm(false)}
              >
                Sign up
              </span>
            </p>
          </>
        ) : (
          <>
            <Button
              variant="primary"
              className="w-100 mb-3"
              onClick={handleSignup}
            >
              Register
            </Button>
            <p className="text-center">
              Already have an account? &nbsp;
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => setIsLoginForm(true)}
              >
                Login
              </span>
            </p>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
