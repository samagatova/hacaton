import React from "react";

import "./App.css"; // Import the CSS file
import SignUp from "./components/auth/SingUp";
import SignIn from "./components/auth/Singin";
import LiveSearch from "./LiveSearch/LiveSearch";

const App = () => {
  return (
    <div className="app-container">
      <SignUp />
      <SignIn />
      <LiveSearch />
    </div>
  );
};

export default App;
