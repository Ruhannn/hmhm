// User.js
import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const userStyles = {
    border: "2px solid",
    padding: "10px",
    borderRadius: "20px",
    margin: "10px",
  };
  const { id, name, email, phone } = user;
  return (
    <div style={userStyles}>
      <h2>{name}</h2>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>Show details</Link>
      <Link to={`/user/${id}`}>
        <button>post</button>
      </Link>
    </div>
  );
};
export default User;
