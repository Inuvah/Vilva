import React from "react";
import db from "../db/db.json";
import { useQuery } from "@tanstack/react-query";

export const Login = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      console.log(db.users);
      return db.users;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (!users) return <div>No users found</div>;

  return (
    <>
      {db.users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
};
export default Login;
