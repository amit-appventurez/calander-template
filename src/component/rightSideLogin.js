// @flow
import * as React from "react";

import "./component.css";
import { Email, Password } from "../util/validator";

class RightSideLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  pageChange = () => {
    window.location.href = "/register";
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let valid = this.validatinCheck();
    if (valid) {
      this.props.data(this.state);
    }
  };
  validatinCheck = () => {
    let { email, password } = this.state;
    if (!Email(email)) {
      alert("Invalid Email");
      return false;
    }
    if (!Password(password)) {
      alert(
        "Password must contain minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1"
      );
      return false;
    }
    return true;
  };
  render() {
    return (
      <div className="rightSide">
        <div
          className="carcenter card border-0 p-3"
          style={{ height: "auto", maxWidth: "400px" }}
        >
          <strong className="heading">Login</strong>
          <br />
          <div style={{ fontSize: "12px" }}>
            <div class="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <br />
            <a href="#" style={{ textDecoration: "none" }}>
              Forgot Password?
            </a>
            <br />
            <small id="emailHelp" class="form-text text-muted">
              Don't have an account ?
              <a
                href="#"
                style={{ textDecoration: "none" }}
                onClick={this.pageChange}
              >
                Register
              </a>
            </small>
            <br />
            <button
              type="submit"
              class="btn btn-primary"
              // style={{ marginLeft: "80px" }}
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default RightSideLogin;
