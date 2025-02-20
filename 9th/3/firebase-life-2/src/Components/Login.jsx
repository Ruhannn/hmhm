import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log("Successfully logged in:", res.user);
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log("Successfully logged in with Google:", res.user);
      })
      .catch((err) => {
        console.error("Google login error:", err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold">Login Now!</h1>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="">
                <p>
                  Welcome! If you're new,
                  <Link to="/signup" className="btn px-1 p-0 btn-link">
                    sign up here
                  </Link>
                  .
                </p>
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <br />
            </div>
          </form>
        </div>

        <button
          onClick={handleSignInWithGoogle}
          className="btn btn-primary mt-4">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
