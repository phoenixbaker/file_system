import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { logIn } from "../api/auth";

import { UserContext } from "../state/useContext";
import "../styles/LogInBoxStyle.css";

export default function LogInBox() {
  const history = useHistory();
  const { setUserState } = useContext(UserContext);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(evnt) {
    const value = evnt.target.value;
    setState({
      ...state,
      [evnt.target.name]: value,
    });
  }

  async function handleSubmit() {
    const res = await logIn(state);
    if (typeof res === "string")
      return console.log("Do Handle Wrong Password/Email");
    setUserState(res);
    localStorage.setItem("user", JSON.stringify(res));
  }

  return (
    <div className="form-container">
      <input
        placeholder="Email"
        type="text"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <button className="button" onClick={handleSubmit}>
        <h1>Login</h1>
      </button>
      <h2>
        Don't have an account? &nbsp;
        <button className="text" onClick={() => history.push("/auth/register")}>
          <h2>Register now </h2>
        </button>
      </h2>
    </div>
  );
}
