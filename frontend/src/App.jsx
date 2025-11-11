import "./index.css";
import AuthForm from "./Pages/LoginPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import { useAutoRefresh } from "./Components/autoRefresh";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddUser from "./Pages/AddUser"

function App() {
  useAutoRefresh()
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<AuthForm />} />
        <Route path="/" element={<Home />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addUser" element={<AddUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
