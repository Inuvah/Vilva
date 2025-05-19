import React from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import logo from "../assets/SVG/logoBlack.svg";
import checkMark from "../assets/SVG/checkMark.svg";
import topCircle from "../assets/SVG/register/topCircle.svg";
import bottomCircle from "../assets/SVG/register/bottomCircle.svg";
import topElipse from "../assets/SVG/register/topElipse.svg";
import bottomElipse from "../assets/SVG/register/bottomElipse.svg";

export const Register = () => {
  //Typescript definitions
  type UserInput = {
    email: string;
    password: string;
  };

  //State variables for email and password
  const [postEmail, setPostEmail] = useState("");
  const [postPassword, setPostPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  //Fetch users
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return axios.get("http://localhost:4000/users").then((res) => res.data);
    },
  });

  //Post new user if email does not exist
  const mutation = useMutation({
    mutationFn: (newUser: UserInput) => {
      return axios.post("http://localhost:4000/users", newUser);
    },
  });

  // Check if the email already exists in the users array
  const emailExists =
    Array.isArray(users) &&
    users.some((user: { email: string }) => user.email === postEmail);

  function handleSubmit(e: any) {
    //NO REFRESH :)
    e.preventDefault();
    if (postPassword !== passwordCheck) {
      alert("Passwords do not match!");
      return;
    }
    if (emailExists) {
      alert("Email is already in use!");
    } else {
      // If the email does not exist, create a new user
      mutation.mutate({
        email: postEmail,
        password: postPassword,
      });
    }
  }

  //Loading and error handling
  if (isLoading) return <div>Loading...</div>;
  if (!users) return <div>No users found</div>;
  //Render
  return (
    <>
      {/*Post request error handling*/}
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}

      <div className="register-background">
        <div className="register-topCircle">
          <img src={topCircle} alt="Decoration" />
        </div>
        <div className="register-bottomCircle">
          <img src={bottomCircle} alt="Decoration" />
        </div>
        <div className="register-topElipse">
          <img src={topElipse} alt="Decoration" />
        </div>
        <div className="register-bottomElipse">
          <img src={bottomElipse} alt="Decoration" />
        </div>

        <div className="login-register-form-container flex-center-col">
          <img src={logo} alt="logo" className="register-logo" />
          <form onSubmit={handleSubmit} className="login-register-form">
            <label className="login-register-top-label p-white">E-mail:</label>
            <br />
            <div className="flex">
              <input
                className="login-register-input"
                type="email"
                value={postEmail}
                required
                onChange={(e) => setPostEmail(e.target.value)}
              />
              <img
                src={checkMark}
                alt="Check Mark"
                className="register-checkmark"
              />
            </div>
            <br />
            <label className="p-white">Password</label>
            <br />
            <div className="flex">
              <input
                className="login-register-input"
                type="email"
                value={postPassword}
                required
                onChange={(e) => setPostPassword(e.target.value)}
              />
              <img
                src={checkMark}
                alt="Check Mark"
                className="register-checkmark"
              />
            </div>
            <br />
            <label className="p-white">Password again</label>
            <br />
            <div className="flex">
              <input
                className="login-register-input"
                type="email"
                value={passwordCheck}
                required
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
              <img
                src={checkMark}
                alt="Check Mark"
                className="register-checkmark"
              />
            </div>
            <br />
            <div className="flex-center">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
