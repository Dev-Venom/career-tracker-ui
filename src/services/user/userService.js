import client from "../api/client";

export async function getCurrentUser() {
    const response = await client.get("/users/me");

    return response.data;
}