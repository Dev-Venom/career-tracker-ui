import client from "../api/client";

export async function scheduleInterview(interview) {

    const response =
        await client.post("/interviews", interview);

    return response.data;
}

export async function getMyInterviews() {

    const response =
        await client.get("/interviews");

    return response.data;
}

export async function getUpcomingInterviews() {

    const response =
        await client.get("/interviews/upcoming");

    return response.data;
}

export async function updateInterview(id, interview) {

    const response =
        await client.put(
            `/interviews/${id}`,
            interview
        );

    return response.data;
}

export async function deleteInterview(id) {

    await client.delete(`/interviews/${id}`);
}

export async function getInterviewById(id) {
    const response = await client.get(`/interviews/${id}`);
    return response.data;
}
