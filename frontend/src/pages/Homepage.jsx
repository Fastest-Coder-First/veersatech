import React, { useState } from "react";
import { HeroSection, Features, Footer, LoginModal } from "../components/Home";

const Homepage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
