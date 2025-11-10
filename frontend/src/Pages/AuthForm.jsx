import axios from "axios";
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
      localStorage.setItem("username", username);
      localStorage.setItem("isUserAdmin", response.data.isAdmin)
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Please provide correct credentials!");
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div>
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
          {error && <p className="text-red-700">{error}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AuthForm;
