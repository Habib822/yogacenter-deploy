import React, { useState } from "react";

import Loader from "../component/Loader";
import Error from "../component/Error";
import api from "../service/api";

function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function Login() {
    const user = {
      email: email.toLowerCase(),
      password: password.toLowerCase(),
    };
    if (email === "" || password === "") {
      setError(true);
      return;
    }
    try {
      setIsLoading(true);
      const result = await api.post("/api/users/login", user);
      console.log(result.data);
      localStorage.setItem("currentUser", JSON.stringify(result.data));
      setIsLoading(false);
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(true);
    }
  }

  return (
    <div class="Flex">
      {isLoading && <Loader />}
      <div class="Login">
        <div>
          {error && (
            <Error message="Something went wrong, please try again..." />
          )}
          <div className="flex">
            <h2 class="Login-Title">Login</h2>
            <input
              type="text"
              name="email"
              className="Login-Email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              // type="password" {/* Change type to "password" */}
              className="Login-Password"
              type="password"
              placeholder=" Enter Password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button name="submit" className="Login-Button" onClick={Login}>
              Login
            </button>

            <div className="remember-forgot">
              <a className="Link-button" href="/register">
                Doon't have an account? REGISTER NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
