import client from "../api/client";

export const getMonthlyStats = () => {
  return client.get("/applications/stats/monthly");
};

export const getStatusStats = () => {
  return client.get("/applications/stats/status");
};

export const getCompanyStats = () => {
  return client.get("/applications/stats/company");
};