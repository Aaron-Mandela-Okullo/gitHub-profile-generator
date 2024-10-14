import React from "react";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="logo-container">
      <img
        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        className="gitHub-img"
        alt=""
      />
      <h1 className="userName">GitHub users</h1>
    </div>
  );
};

export default Logo;
