import React from "react";
import { useState } from "react";

const AuthModal = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
if(isSignUp && (password !== confirmPassword)){
    setError("Passwords neet to match!")
} console.log('Make a post request to databasae')
    }
    catch (error){
        console.log(error)
    }
  };


//   console.log(email, password, confirmPassword)



  return (
    <div className = "auth-modal-wrapper">
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        X
      </div>
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p className="disclaimer">
        By clicking Log In, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address..."
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isSignUp && <input
          type="password-check"
          id="password-check"
          name="password-check"
          placeholder="Confirm your password"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />}
        <input className = "secondary-button" type = "submit"/>
        <p>{error}</p>

      </form>
      <hr/>
      <h2>GET THE APP</h2>
    </div>
    </div>
  );
};

export default AuthModal;
