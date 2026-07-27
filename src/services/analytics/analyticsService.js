import client from "../api/client";

export async function getAnalytics() {

    const response = await client.get("/analytics");

    return response.data;

}