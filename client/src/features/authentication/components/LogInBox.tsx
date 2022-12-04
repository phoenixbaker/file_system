import useUser from "hooks/useUser";
import React, { useState, useContext, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { logIn } from "../services/auth";
import "./LogInBox.css";

export default function LogInBox() {
  const history = useHistory();
  const { setUser } = useUser();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(evnt: ChangeEvent<HTMLInputElement>) {
    if (!evnt) return;
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
    setUser(res);
    localStorage.setItem("user", JSON.stringify(res));
  }

  return (
    <div className="form-container account-box background">
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
