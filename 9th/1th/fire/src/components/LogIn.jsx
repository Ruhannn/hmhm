import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.init";
const LogIn = () => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleAuth = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
      })
      .catch((err) => {
        console.error("error", err.message);
      });
  };
  const handleGithubAuth = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
      })
      .catch((err) => {
        console.error("error", err.message);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        setUser(null);
      })
      .catch((error) => {
        console.error("Sign-out error:", error.message);
        setUser(null);
      });
  };

  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4">
        {user ? (
          <>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleSignOut}>
              Sign out
            </button>
            <h3 className="text-xl">User: {user.displayName}</h3>
            <img
              className="w-20 h-20 rounded-full"
              src={user.photoURL}
              alt={user.displayName}
            />
            <p>Email: {user.email}</p>
          </>
        ) : (
          <>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleGoogleAuth}>
              Google login
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleGithubAuth}>
              Github login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LogIn;
