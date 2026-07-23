import { createContext, useMemo, useState } from "react";

import { login as loginService } from "../services/auth/authService";
import { saveToken, removeToken } from "../utils/storage";

import { useEffect } from "react";

import { getCurrentUser } from "../services/user/userService";

import { getToken } from "../utils/storage";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isAuthenticated = !!token;

  async function login(credentials) {
    setIsLoading(true);

    try {
      const response = await loginService(credentials);
      console.log("Login Response:", response);

      if (!response.token) {
        return {
          success: false,
          message: response.message,
        };
      }

      setToken(response.token);
      saveToken(response.token);

      console.log("Before setUser:", response.user);

      setUser(response.user);

      console.log("After setUser:", response.user);

      return {
        success: true,
      };
    } catch (error) {
      console.log("LOGIN ERROR", error);
      console.log("STATUS", error.response?.status);
      console.log("DATA", error.response?.data);

      return {
        success: false,
        message:
          error.response?.data?.message || "Login failed. Please try again.",
      };
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {

    async function loadUser() {

        const token = getToken();

        if (!token) return;

        setToken(token);

        try {

            const user = await getCurrentUser();

            setUser(user);

        } catch (error) {

            console.error(error);

            logout();

        }

    }

    loadUser();

}, []);

  

  function logout() {
    setUser(null);
    setToken(null);

    removeToken();
  }

  const value = useMemo(
    () => ({
      user,
      token,
      isLoading,
      isAuthenticated,
      login,
      logout,
    }),
    [user, token, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
