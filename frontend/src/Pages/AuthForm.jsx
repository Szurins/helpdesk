import axios from "axios";
import { useState } from "react";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        { username, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Login success:", response.data);
      window.location.href = "/dashboard"; // redirect on success
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      alert("Login failed: invalid credentials or server error.");
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex flex-col gap-2 max-w-sm mx-auto mt-10 p-4 border rounded"
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="submit"
        value="Log in"
        className="bg-blue-600 text-white rounded p-2 cursor-pointer hover:bg-blue-700"
      />
    </form>
  );
};

export default AuthForm;
