import { useEffect } from "react";
import setupAuthInterceptor from "../../services/api/client";

function AppProviders({ children }) {
  useEffect(() => {
    setupAuthInterceptor();
  }, []);

  return children;
}

export default AppProviders;