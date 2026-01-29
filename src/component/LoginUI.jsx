import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginUI() {
  const {
    userValue,
    userChange,
    pwdChange,
    pwdValue,
    handleLogin,
    handleEnterKeyPress,
  } = useContext(AuthContext);
  return (
    <div className="bg-gray-50 min-h-screen px-4 flex items-center justify-center  ">
      <div className="max-w-sm w-full  rounded shadow-md p-6 bg-white">
        <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">
          Login
        </h1>
        <div className="space-y-4">
          <div>
            <label className="flex flex-col text-sm font-medium text-gray-700 mb-1">
              Name
              <input
                onChange={userChange}
                value={userValue}
                onKeyDown={handleEnterKeyPress}
                type="text"
                placeholder="Enter Your Name"
                className="border rounded-md px-3 py-2 focus:ring-2 
                focus:outline-none focus:ring-blue-500"
              />
            </label>
          </div>

          <div>
            <label className="flex flex-col text-sm font-medium text-gray-700 mb-1">
              Password
              <input
                onChange={pwdChange}
                value={pwdValue}
                type="password"
                onKeyDown={handleEnterKeyPress}
                placeholder="Enter Your password"
                className="border rounded-md px-3 py-2 focus:ring-2 
                focus:outline-none focus:ring-blue-500"
              />
            </label>
          </div>

          <button
            onClick={handleLogin}
            className="w-full hover:bg-blue-500 
          bg-blue-400  py-2 text-white font-semibold rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
