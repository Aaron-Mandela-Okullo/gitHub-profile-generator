import React from "react";
import "./UsersCont.css";
import { Link } from "react-router-dom";

const UsersCont = ({ users }) => {
  return (
    <div className="wrapper">
      {users &&
        users.map(
          (user, idx) =>
            user?.login && (
              <div key={idx} className="avatarContainer">
                <img src={user?.avatar_url} className="avatar-img" />
                <h1 className="avatarh1"> {user?.login}</h1>
                <h1 className="userName1">{user?.name}</h1>
                <Link to={`/${user?.login}`} className="Link">
                  <span className="view-span">Views</span>
                </Link>
              </div>
            )
        )}
    </div>
  );
};

export default UsersCont;
