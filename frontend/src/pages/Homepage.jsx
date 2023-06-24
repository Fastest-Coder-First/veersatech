import React, { useState } from "react";
import { HeroSection, Features, Footer, LoginModal } from "../Components/Home";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Homepage = () => {
  const { loggedIn } = useAuth();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (loggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="home-page">
      <HeroSection handleShow={handleShow} />

      <Features />

      <Footer />

      {/* login modal */}
      <LoginModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
};

export default Homepage;
