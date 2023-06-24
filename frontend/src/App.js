import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* This is the catch all route, if no other route matches, then this route will be used */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
