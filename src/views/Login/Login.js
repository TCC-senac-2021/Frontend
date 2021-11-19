import React, { useState } from "react";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('entrou aqui');
  }

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
      
          <label>Email</label>
          <input
            autoFocus
            type=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
       
   
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
     
        <button className="btn" type="submit" disabled={!validateForm()}>Login</button>
      </form>
    </div>
  );
}

export default Login;