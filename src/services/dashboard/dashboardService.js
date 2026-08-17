import client from "../api/client";

import { getUpcomingInterviews } from "../interviews/interviewService";

export async function getDashboardData() {
  const [dashboardResponse, applicationsResponse, interviewsResponse] =
    await Promise.all([
      client.get("/applications/dashboard"),
      client.get("/applications/my"),
      getUpcomingInterviews(),
    ]);

  return {
    stats: {
      applications: dashboardResponse.data.totalApplications,
      applied: dashboardResponse.data.applied,
      interviews: dashboardResponse.data.interview,
      offers: dashboardResponse.data.offer,
      rejections: dashboardResponse.data.rejected,
    },

    applications: applicationsResponse.data,

    upcomingInterviews: interviewsResponse,
  };
}
