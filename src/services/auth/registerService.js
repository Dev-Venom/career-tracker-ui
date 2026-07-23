import client from "../api/client";

export async function register(userData) {
    const response = await client.post("/users", userData);

    return response.data;
}