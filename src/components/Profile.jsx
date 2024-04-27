import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./App.jsx";

function Profile() {
  const { userDetails, setIsSignin, isSignin } = useContext(UserContext);

  const navigate = useNavigate();

  const [detail, setDetail] = useState(userDetails);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    setDetail("");
    setIsSignin(false);
    navigate("/");
  };

  useEffect(() => {
    !isSignin && navigate("/");
  }, []);

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="message-wrap">
        <p>User's Full Name : {userDetails && detail.name}</p>
        <p>User's Email : {userDetails && detail.email}</p>
        <p>User's Password : {userDetails && detail.password}</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
