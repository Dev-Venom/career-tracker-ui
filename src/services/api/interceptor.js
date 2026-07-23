import client from "./client";

import { getToken } from "../../utils/storage";

export function setupInterceptors() {
  client.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem("career_tracker_token");

        window.location.href = "/login";
      }

      return Promise.reject(error);
    }
  );
}