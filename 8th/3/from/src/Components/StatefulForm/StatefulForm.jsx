import React, { useEffect, useRef, useState } from "react";
const StatefulForm = () => {
  const [email, setEmail] = useState("kamiru@gmail.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    emailRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError(
        "Your password is too short. Please set a password with at least 6 characters."
      );
    } else {
      setError("");
    }
    console.log(email, password);
    console.log(emailRef.current.value);
  };
  const emailRef = useRef(null);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          onChange={handleEmailChange}
          value={email}
          type="email"
          name="email"
          id=""
        />
        <br />
        <input
          onChange={handlePasswordChange}
          value={password}
          type="password"
          name="password"
          id=""
          required
        />
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
export default StatefulForm;
