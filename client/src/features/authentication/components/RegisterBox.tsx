import React, { ChangeEvent, useState } from "react";

import useUser from "hooks/useUser";
import { registerUser } from "../services/auth";
import "./LogInBox.css";

const defaultState = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
};

export default function RegisterBox() {
  const { setUser } = useUser();
  const [state, setState] = useState(defaultState);

  async function handleSubmit() {
    if (state.password !== state.confirmPassword)
      return console.log("make red");
    const res = await registerUser(state);
    setUser(res);
  }

  function handleCap(evnt: ChangeEvent<HTMLInputElement>) {
    const value = evnt.target.value;
    var splitStr = value.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    setState({
      ...state,
      [evnt.target.name]: splitStr.join(" "),
    });
  }

  function handleChange(evnt: ChangeEvent<HTMLInputElement>) {
    const value = evnt.target.value;
    setState({
      ...state,
      [evnt.target.name]: value,
    });
  }
  return (
    <div className="background account-Box xxx-largBox form-container">
      <input
        placeholder="Name"
        type="text"
        name="name"
        value={state.name}
        onChange={handleCap}
        autoComplete="off"
      />
      <input
        placeholder="Email"
        type="text"
        name="email"
        value={state.email}
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        placeholder="Password"
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <input
        placeholder="Re-Confirm Password"
        type="password"
        name="confirmPassword"
        value={state.confirmPassword}
        onChange={handleChange}
      />
      <button className="button" onClick={handleSubmit}>
        <h1>Register</h1>
      </button>
    </div>
  );
}
