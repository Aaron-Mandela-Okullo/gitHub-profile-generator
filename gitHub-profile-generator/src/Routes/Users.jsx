import React, { useEffect, useRef, useState } from "react";
import UsersCont from "../components/UsersCont";
import Loading from "../components/Loading";
import "./Users.css";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(null);
  let BaseURL = "https://api.github.com/users";
  const user = useRef("");

  async function AllUsers() {
    if (user.current.value === "") {
      setLoading(true)
      const res = await fetch(BaseURL);
      const data = await res.json();
      setUsers(data);
      setLoading(null)
    }
  }

  async function FindUser() {
    setLoading(true)
    if (user.current.value !== "") {
      setUsers("");
      const res = await fetch(BaseURL + "/" + user.current.value);
      const data = await res.json();
      setUsers(() => [data]);
      user.current.value = "";
    } else {
      AllUsers();
    }
    setLoading(null)
  }
  useEffect(() => {
    AllUsers();
  }, [setUsers]);
  return (
    <div>
      <div className="users-search-box">
        <input
          type="text"
          placeholder="Enter Username"
          className="userName-input"
          ref={user}
        />
        <button onClick={FindUser} className="Usersearchbox-button">
          Enter
        </button>
      </div>
      { loading ? < Loading /> :<UsersCont users={users} />}
    </div>
  );
};

export default Users;
