import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  const value = {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
    userLoading: loading,
    setUserLoading: setLoading,
    token,
    setToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
