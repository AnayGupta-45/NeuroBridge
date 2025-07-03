import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function OAuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    if (token) {
      localStorage.setItem("token", token);

      axios
        .get("http://localhost:5000/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data)); // Store user data
          if (res.data.role === "therapist") {
            navigate("/therapist-dashboard");
          } else {
            navigate("/dashboard");
          }
        })
        .catch(() => {
          navigate("/login");
        });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <div>Logging in via Google...</div>;
}
