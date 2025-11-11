import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const logout = async () => {
    await axios.post("http://localhost:8000/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin")
  }
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
      console.log(response)
      localStorage.setItem("username", username);
      localStorage.setItem("isAdmin", response.data.isAdmin);

      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err)
      setError("Please provide correct credentials!");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      logout();
      window.location.reload()
    }
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div className="bg-linear-to-r from-gray-800 to-gray-700 h-full flex flex-col justify-center items-center text-gray-200">
        <div className="bg-gray-800 py-30 px-15 border-gray-950 border-2 rounded">
          <form
            onSubmit={submitForm}
            className="flex flex-col gap-3 max-w-sm mx-auto mt-4 w-96"
          >
            <p className="text-4xl ">Login</p>
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
              className="bg-gray-700 text-white rounded p-2 px-7 cursor-pointer hover:bg-gray-800 duration-200"
            />
            <p className="text-red-500">{error}</p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;