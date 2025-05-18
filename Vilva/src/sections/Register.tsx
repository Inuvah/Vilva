import React from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

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
      {users.map(
        (user: { id: React.Key | null | undefined; email: string }) => (
          <div key={user.id}>
            <p>{user.email}</p>
          </div>
        )
      )}
      {/*Post request error handling*/}
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}

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
        <label>Password again</label>
        <br />
        <input
          type="password"
          required
          minLength={8}
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
};
export default Register;
