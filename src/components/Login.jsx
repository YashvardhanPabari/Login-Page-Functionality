import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/authActions";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector((state) => state);

  useEffect(() => {
    console.log("Updated auth state:", authState);
  }, [authState]); // This will log the state after it updates

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { username, password };
    dispatch(login(user));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    const user = { username, password };
    dispatch(logout(user));
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        {" "}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>LogOut</button>
      </form>
    </div>
  );
};

export default Login;
