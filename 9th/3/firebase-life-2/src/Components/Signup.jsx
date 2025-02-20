import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;
    createUser(email, password, username)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold">Sign In</h1>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
                name="username"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="">
                <p>
                  Already have an account,
                  <Link to="/login" className="btn px-1 p-0 btn-link">
                    Log In
                  </Link>
                  here.
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
