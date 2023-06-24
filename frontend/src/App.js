import { Route, Routes, useNavigate } from "react-router-dom";
import { DashboardPage, FinancesPage, HomePage, NotFoundPage, CategoryPage } from "./pages";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { loadUser, setAuthToken } from "./apis";

import { useAuth } from "./contexts/AuthContext";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const navigate = useNavigate();
  const { setCurrentUser, loggedIn, setLoggedIn } = useAuth();
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    if (authToken) {
      setAuthToken(authToken);

      const getUser = async () => {
        try {
          const user = await loadUser();
          console.log("user: ", user);
          setCurrentUser(user);
          setLoggedIn(true);
        } catch (error) {
          console.log("error: ", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          localStorage.removeItem("authToken");
          setLoggedIn(false);
          navigate("/");
        }
      };
      getUser();
    }
  }, [authToken]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        element={
          <PrivateRoutes loggedIn={loggedIn || localStorage.getItem("token")} />
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/finances" element={<FinancesPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
