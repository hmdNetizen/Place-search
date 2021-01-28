import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image: "https://hameed-jimoh.vercel.app/static/media/Hamed.e9397b7a.png",
      name: "Hameed",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
