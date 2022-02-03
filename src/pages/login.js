import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/actions/authAction";
import Register from "../components/auth/Register";

const Panel = ({ title, description, btnTitle, setSignup, bool, position }) => {
  return (
    <div className={`panel ${position}`}>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          className="btn transparent"
          id="sign-up-btn"
          onClick={() => setSignup(bool)}
        >
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

function Login() {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const [typePass, setTypePass] = useState(false);
  const [signup, setSignup] = useState(false);

  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  useEffect(() => {
    if (auth.token) {
      history.push("/");
    }
  }, [history, auth.token]);

  return (
    <div className={`container ${signup && "sign-up-mode"}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="email"
                onChange={handleChangeInput}
                name="email"
                autoComplete="on"
                value={email}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type={typePass ? "text" : "password"}
                placeholder="Password"
                name="password"
                autoComplete="on"
                onChange={handleChangeInput}
                value={password}
              />
              <small onClick={() => setTypePass(!typePass)}>
                {typePass ? "Hide" : "Show"}
              </small>
            </div>
            <input
              type="submit"
              value="Login"
              className="btn solid"
              disabled={email && password ? false : true}
            />
          </form>
          <Register />
        </div>
      </div>

      <div className="panels-container">
        <Panel
          title="New here ?"
          description="Try SnapMe for free. Get started just by creating a new account in few steps"
          btnTitle="Sign up"
          setSignup={setSignup}
          position="left-panel"
          bool={true}
        />

        <Panel
          title="One of us ?"
          description="   Instance update from your friends. Get the latest updates from
          indusrty leaders and members of your community."
          btnTitle="Sign in"
          bool={false}
          setSignup={setSignup}
          position="right-panel"
        />
      </div>
    </div>
  );
}

export default Login;
