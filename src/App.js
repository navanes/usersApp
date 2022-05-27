import React, { Component } from "react";
import Users from "./components/users";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
import { Route, Routes, Navigate } from "react-router-dom";
import User from "./components/user";
import NotFound from "./components/notFound";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <Routes>
            <Route path="/users/:id" element={<User />} />
            <Route path="/users" element={<Users />} />
            <Route path="/customers" element={<Navigate to="/users" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login/" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
