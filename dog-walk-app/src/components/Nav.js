import React from "react";
import logo from "../assets/dog-love-logo.png";

const Nav = ({ setShowModal, showModal, isSignUp, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = false;

  return (
    <nav authtoken={authToken}>
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      {!authToken && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log In
        </button>
      )}
    </nav>
  );
};

export default Nav;
