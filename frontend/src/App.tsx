import { useState, useEffect } from "react";
import Login from "./pages/Login";
import PropertiesList from "./pages/PropertiesList";
import api from "./services/api";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Sempre que o token mudar, atualizamos o axios
  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  if (!token) {
    return <Login onLogin={(t) => setToken(t)} />;
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        style={{
          padding: "8px 16px",
          margin: 20,
          backgroundColor: "#ff4d4f",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Logout
      </button>
      <PropertiesList />
    </div>
  );
}

export default App;
