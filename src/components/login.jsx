import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { email, password } = this.state.account;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            onChange={this.handleChange}
            value={email}
            id="email"
            name="email"
            className="form-control"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password">Password:</label>
          <input
            onChange={this.handleChange}
            value={password}
            id="password"
            name="password"
            className="form-control"
            type="password"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    );
  }
}

export default Login;
