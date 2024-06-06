import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./Auth.css"; // Import the CSS file

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function logIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        setError("К СОЖАЛЕНИЮ, НЕ МОЖЕТ НАЙТИ ВАШ АККАУНТ");
      });
  }

  return (
    <div className="auth">
      <div className="auth-container">
        <form onSubmit={logIn} className="auth-form">
          <h2 className="auth-title">Log in</h2>
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
          <button className="auth-button">Login</button>
          {error && <p className="auth-error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
