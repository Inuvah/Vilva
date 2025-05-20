import React, { useEffect } from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { setItem } from "../utils/localStorage";
import { usePersistedState } from "../hooks/usePersistedState";

export const Login = (props: { setUserId: (arg0: any) => void }) => {
  //Typescript definitions
  type UserInput = {
    email: string;
    password: string;
  };

  //State variables for email and password
  const [postEmail, setPostEmail] = useState("");
  const [postPassword, setPostPassword] = useState("");
  const [userId, setUserId] = usePersistedState("userId", "User");
  const navigate = useNavigate();

  //Fetch users
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return axios.get("http://localhost:4000/users").then((res) => res.data);
    },
  });

  // Check if the email already exists in the users array
  const emailExists =
    Array.isArray(users) &&
    users.some((user: { email: string }) => user.email === postEmail);

  // Get the user ID if the email exists
  const userFinder =
    Array.isArray(users) &&
    users.find((user: { email: string }) => user.email === postEmail);

  function handleSubmit(e: any) {
    //NO REFRESH :)
    e.preventDefault();
    if (emailExists) {
      setUserId(userFinder.id);
      if (userFinder.password === postPassword) {
        navigate("/Dashboard");
        // Redirect to the dashboard
      } else {
        alert("Incorrect password!");
      }
    } else {
      alert("Email does not exist!");
    }
  }

  //Render
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>E-mail:</label>
        <br />
        <input
          type="email"
          value={postEmail}
          required
          onChange={(e) => setPostEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          required
          minLength={8}
          value={postPassword}
          onChange={(e) => setPostPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default Login;
