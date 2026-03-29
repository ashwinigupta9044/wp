import React, { useState } from "react";
import "./loginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
   const [error, setError] = useState("");


   // ✅ Demo credentials
  const EMAIL = "whatsapphack@gmail.com";
  const PASSWORD = "whatsapphack123";
  
  const handleLogin = (e) => {
    e.preventDefault();
    

    // 👉 Demo validation
    if (email === EMAIL && password === PASSWORD) {
      navigate("/home"); // 👈 dusra page open
       
    } else {
      setError("❌ Email or Password incorrect");
    }
  };
  

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>SECURE LOGIN</h2>
        <p>Whatsapp Account Hack Panel</p>

        <input
          type="email"
          placeholder="Email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="/whatsappHack">LOGIN</button>

        <span className="note">Panel</span>
      </form>
    </div>
  );
};

export default LoginPage;
