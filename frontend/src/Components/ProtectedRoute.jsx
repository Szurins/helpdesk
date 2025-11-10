import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const verify = await fetch("http://localhost:8000/auth/verify", {
          credentials: "include",
        });

        if (verify.ok) {
          setIsAuthenticated(true);
        } else {
          const refresh = await fetch("http://localhost:8000/auth/refresh", {
            credentials: "include",
          });
          setIsAuthenticated(refresh.ok);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Checking authentication...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;