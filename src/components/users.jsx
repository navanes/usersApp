import React, { Component } from "react";
import axios from "axios";
import LoadingUsers from "./loading/loadingUsers";
import { Link } from "react-router-dom";

class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  async componentDidMount() {
    const response = await axios.get("https://reqres.in/api/users");
    setTimeout(() => {
      this.setState({ users: response.data.data, isLoading: false });
    }, 1000);
  }

  render() {
    return (
      <>
        <button className="btn btn-lg btn-primary" onClick={this.handleCreate}>
          Create User
        </button>
        <div className="row">
          {this.state.isLoading ? (
            <LoadingUsers />
          ) : (
            this.state.users.map((user, index) => {
              return (
                <div key={index} className="col-4 text-center p-5">
                  <img
                    src={user.avatar}
                    style={{ borderRadius: "50%", width: "100px" }}
                    alt=""
                  />
                  <Link to={`/users/${user.id}`}>
                    <h4>
                      {user.first_name} {user.last_name}
                    </h4>
                  </Link>
                  <h5>{user.email}</h5>
                  <div className="row">
                    <div className="col-6">
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => {
                          this.handleUpdate(user);
                        }}
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          this.handleDelete(user);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }
  handleCreate = async () => {
    const newUser = {
      first_name: "Narek",
      last_name: "Avanesian",
      email: "narek.avanesian@gmail.com",
      avatar:
        "https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD10004584/book_29af3185d18630593b43dcc7b8b2ff92ab_thumb.jpg",
    };
    const response = await axios.post("https://reqres.in/api/users", newUser);
    this.setState({ users: [...this.state.users, newUser] });
  };
  handleUpdate = async (user) => {
    user.first_name = "updated";
    user.last_name = "updated";
    user.email = "updated_mail";
    const response = await axios.put(
      `https://reqres.in/api/users/${user.id}`,
      user
    );
    const updatedUsers = [...this.state.users];
    const index = updatedUsers.indexOf(user);
    updatedUsers[index] = { ...user };
    this.setState({ users: updatedUsers });
  };
  handleDelete = async (user) => {
    const response = await axios.delete(
      `https://reqres.in/api/users/${user.id}`
    );
    const newUsers = this.state.users.filter((u) => u.id !== user.id);
    this.setState({ users: newUsers });
  };
}

export default Users;
