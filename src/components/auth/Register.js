import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../redux/actions/authAction";

function Register() {
  const { auth, alert } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const initialState = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    cf_password: "",
    gender: "male",
  };
  const [userData, setUserData] = useState(initialState);
  const { fullname, username, email, password, cf_password } = userData;

  const [typePass, setTypePass] = useState(false);
  const [typeCfPass, setTypeCfPass] = useState(false);

  useEffect(() => {
    if (auth.token) {
      history.push("/");
    }
  }, [history, auth.token]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Fullname"
          name="fullname"
          onChange={handleChangeInput}
          value={fullname}
          style={{ background: `${alert.fullname ? "#fd2d6a14" : ""}` }}
        />
      </div>

      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChangeInput}
          value={username.toLowerCase().replace(/ /g, "")}
          style={{ background: `${alert.username ? "#fd2d6a14" : ""}` }}
        />
      </div>

      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="on"
          onChange={handleChangeInput}
          value={email}
          style={{ background: `${alert.email ? "#fd2d6a14" : ""}` }}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type={typePass ? "text" : "password"}
          placeholder="Password"
          onChange={handleChangeInput}
          value={password}
          name="password"
          autoComplete="on"
          style={{ background: `${alert.password ? "#fd2d6a14" : ""}` }}
        />
        <small onClick={() => setTypePass(!typePass)}>
          {typePass ? "Hide" : "Show"}
        </small>
      </div>

      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type={typeCfPass ? "text" : "password"}
          placeholder="Confirm password"
          onChange={handleChangeInput}
          value={cf_password}
          name="cf_password"
          autoComplete="on"
          style={{ background: `${alert.cf_password ? "#fd2d6a14" : ""}` }}
        />
        <small onClick={() => setTypeCfPass(!typeCfPass)}>
          {typePass ? "Hide" : "Show"}
        </small>
      </div>

      <div className="radio__buttons">
        <label htmlFor="male">
          Male:{" "}
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            defaultChecked
            onChange={handleChangeInput}
          />
        </label>

        <label htmlFor="female">
          Female:{" "}
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChangeInput}
          />
        </label>

        <label htmlFor="other">
          Other:{" "}
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={handleChangeInput}
          />
        </label>
      </div>

      <input type="submit" className="btn" value="Sign up" />
    </form>
  );
}

export default Register;
