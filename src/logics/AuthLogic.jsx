import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function AuthLogic({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [userValue, setUserValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");

  const navigate = useNavigate();

  const userName = "demo";
  const userPwd = "1234";

  const userChange = (e) => {
    setUserValue(e.target.value);
  };

  const pwdChange = (e) => {
    setPwdValue(e.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };
  
  const handleLogin = () => {
    if (userValue.trim() === "" || pwdValue.trim() === "") {
      alert("Name: demo || pwd: 1234");
      return;
    }

    if (userValue !== userName || pwdValue !== userPwd) {
      alert("Wrong Authentication");
      return;
    }

    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{
        userValue,
        userChange,
        pwdChange,
        pwdValue,
        handleLogin,
        isLoggedIn,
        handleLogout,
        handleEnterKeyPress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
