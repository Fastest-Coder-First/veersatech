import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// styles and bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import BrowserRouter as Router
import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
