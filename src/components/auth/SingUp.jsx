import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./Auth.css"; // Import the CSS file

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

  function register(e) {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Пароли не совпали");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setCopyPassword("");
        setPassword("");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="auth">
      <div className="auth-container">
        <form onSubmit={register} className="auth-form">
          <h2 className="auth-title">Register</h2>
          <input
            placeholder="Please email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="auth-input"
          />
          <input
            placeholder="Please password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="auth-input"
          />
          <input
            placeholder="Please enter your password again"
            value={copyPassword}
            onChange={(e) => setCopyPassword(e.target.value)}
            type="password"
            className="auth-input"
          />
          <button className="auth-button">Create</button>
          {error && <p className="auth-error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
