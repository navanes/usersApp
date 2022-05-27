import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import queryString from "query-string";

const User = (props) => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const { search } = useLocation();
  const history = useNavigate();
  const usersPage = () => {
    history("/users", { replace: true });
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(response.data.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <img
        src={user.avatar}
        style={{ borderRadius: "20%", width: "150px" }}
        alt=""
      />
      <h4>
        {user.first_name} {user.last_name}
      </h4>
      <h5>{user.email}</h5>
      <button onClick={usersPage} className="btn btn-info mt-3">
        Back to Users
      </button>
      {/* <Link to="../users" className="btn btn-info mt-3">
        Back To users
      </Link> */}
    </>
  );
};

export default User;
