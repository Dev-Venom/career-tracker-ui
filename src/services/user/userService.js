import client from "../api/client";

export async function getCurrentUser() {
    const response = await client.get("/users/me");

    return response.data;
}

export async function updateCurrentUser(userData) {
    const response = await client.put("/users/me", userData);

    return response.data;
}