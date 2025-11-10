import { useEffect } from "react";

export const useAutoRefresh = () => {
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        await fetch("http://localhost:8000/auth/refresh", {
          credentials: "include", // send cookies (access + refresh tokens)
        });
        console.log("🔄 Access token refreshed");
      } catch (err) {
        console.error("Auto-refresh failed:", err);
      }
    }, 9 * 60 * 1000); // every 9 minutes (before token expires)

    return () => clearInterval(interval);
  }, []);
};