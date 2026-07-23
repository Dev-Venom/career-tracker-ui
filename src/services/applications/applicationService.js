import client from "../api/client";

export const createApplication = (data) => {
  return client.post("/applications", data);
};

export const getApplicationById = (id) => {
  return client.get(`/applications/${id}`);
};

export const updateApplication = (id, data) => {
  return client.put(`/applications/${id}`, data);
};

export const deleteApplication = (id) => {
  return client.delete(`/applications/${id}`);
};

export const updateApplicationStatus = (id, status) => {
  return client.patch(`/applications/${id}/status`, {
    status,
  });
};

export async function getMyApplications() {
  const response = await client.get("/applications/my");
  return response.data;
}