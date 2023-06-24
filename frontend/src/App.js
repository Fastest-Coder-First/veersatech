import { Routes, Route } from "react-router-dom";
import { DashboardPage, HomePage, NotFoundPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* This is the catch all route, if no other route matches, then this route will be used */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
