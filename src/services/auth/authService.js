import client from "../api/client";

export async function login(credentials) {
  const response = await client.post(
    "/users/login",
    credentials
  );

  return response.data;
}