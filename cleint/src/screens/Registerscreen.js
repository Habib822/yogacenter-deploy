import React, { useState } from "react";
import Loader from "../component/Loader";
import Success from "../component/Success";
import api from "../service/api";

function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [IsLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState();
  const [success, setsuccess] = useState();

  async function Register() {
    if (password === cpassword) {
      const user = { name, email, password, cpassword };
      try {
        setIsLoading(true);
        await api.post("/api/users/register", user).data;
        setIsLoading(false);
        setsuccess(true);

        setname("");
        setemail("");
        setpassword("");
        setcpassword("");
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(true);
      }
    } else {
      alert("password not matched");
    }
  }
  return (
    <div class className="Register-Flex">
      {IsLoading && <Loader />}
      {Error && <Error />}
      <div className="Register">
        {success && <Success message="Registration Successfull" />}
        <h2 className="Register-title">Register</h2>
        <div className="flex-10">
          <div className="flex-11">
            <div className="left">
              <input
                type="text"
                className="Input-name"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <input
                type="text"
                className="Input-Email"
                placeholder="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="right">
              <input
                type="password"
                className="Input-Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <input
                type="password"
                className="Input-Password-Confirm"
                placeholder="confirm password"
                value={cpassword}
                onChange={(e) => setcpassword(e.target.value)}
              />
            </div>
          </div>
          <div className="lower-half">
            <button onClick={Register} className="Button-Confirm">
              Register
            </button>
            <p class="Have-text">Have an Account</p>
            <a href="/Login" class="Link-button">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
