import React from "react";
import { useState } from 'react';
import Nav from "./Nav";
import AuthModal from "./AuthModal";

const Home = () => {
const [showModal, setShowModal] = useState(false)
const [isSignUp, setIsSignUp] = useState(true)
  const authToken = false;

  const handleClick = () => {
    console.log("Clicked!");
    setShowModal(true)
    setIsSignUp(true)
  };
  return (
    <div className="overlay">
      <Nav
      setShowModal = {setShowModal} 
      showModal = {showModal}
      isSignUp = {isSignUp}
      setIsSignUp = {setIsSignUp}/>
      <div className="home">
        <h1 className = "primary-title">Swipe Right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>


        {showModal && (
        <AuthModal setShowModal ={setShowModal}
        isSignUp = {isSignUp}
        />
      )}
      </div>
      
    </div>
  );
};

export default Home;
