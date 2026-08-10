import client from "../api/client";

export const getAnalytics = async () => {
  const response = await client.get("/analytics");

  return response.data;
};
