import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface DashboardData {
  id: number;
  name: string;
}

interface UpdateDashboardRequest {
  id: number;
  name: string;
}
export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.REACT_APP_API_BASE_URL,

    prepareHeaders: (headers, { getState, endpoint }) => {
      const noAuthRequiredEndpoints = ["login"];

      if (
        noAuthRequiredEndpoints.some((noAuthEndpoint) =>
          endpoint.includes(noAuthEndpoint)
        )
      ) {
        return headers;
      }

      const token = (getState() as any)?.auth?.access_token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      } else if (
        !token &&
        !noAuthRequiredEndpoints.some((noAuthEndpoint) =>
          endpoint.includes(noAuthEndpoint)
        )
      ) {
        console.warn(
          "No access token available in store for protected endpoint"
        );
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: ({ startDate, endDate, year }) => ({
        url: "dashboard/stats",
        params: { year, startDate, endDate },
      }),
    }),
    getYtdStats: builder.query<any, void>({
      query: () => ({
        url: "dashboard/ytd-stats",
      }),
    }),
    getUserActivities: builder.query<any, { userId: string }>({
      query: ({ userId }) => `activities/user/${userId}`,
    }),
    getAdminActivities: builder.query<any, void>({
      query: () => `activities/user`,
    }),
    incrementActivity: builder.mutation<
      any,
      { userId: number; activityId: number }
    >({
      query: ({ userId, activityId }) => ({
        url: "activities/increment",
        method: "POST",
        body: {
          userId,
          activityId,
          updatedBy: "Manually",
        },
      }),
    }),

    decrementActivity: builder.mutation<
      any,
      { userId: number; activityId: number }
    >({
      query: ({ userId, activityId }) => ({
        url: "activities/decrement",
        method: "POST",
        body: {
          userId,
          activityId,
          updatedBy: "Manually",
        },
      }),
    }),
    getAdminDashboardStats: builder.query<any, void>({
      query: () => "dashboard/admin-dashboard-stats",
    }),
    getGraphData: builder.query<any, string>({
      query: (filterStatus) => `dashboard/graph-data?graph=${filterStatus}`,
    }),
    createDashboard: builder.mutation<any, { name: string }>({
      query: ({ name }) => ({
        url: "dashboard",
        method: "POST",
        body: { name },
      }),
    }),
    getDashboard: builder.query<any, void>({
      query: () => ({
        url: "dashboard",
        method: "GET",
      }),
    }),
    updateDashboard: builder.mutation<DashboardData, UpdateDashboardRequest>({
      query: ({ id, name }) => ({
        url: `dashboard/${id}`,
        method: "PATCH",
        body: { name },
      }),
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetYtdStatsQuery,
  useGetUserActivitiesQuery,
  useDecrementActivityMutation,
  useIncrementActivityMutation,
  useGetAdminDashboardStatsQuery,
  useGetAdminActivitiesQuery,
  useGetGraphDataQuery,
  useCreateDashboardMutation,
  useGetDashboardQuery,
  useUpdateDashboardMutation,
} = dashboardApi;
