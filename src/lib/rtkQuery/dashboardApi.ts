import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface FormValues {}
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
        params: { year },
      }),
    }),
    getYtdStats: builder.query<any, void>({
      query: () => ({
        url: "dashboard/ytd-stats",
      }),
    }),
    getUserActivities: builder.query<any, void>({
      query: () => "activities/user",
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
        url: "activities/decrement", // Removed query parameters from URL
        method: "POST",
        body: {
          userId,
          activityId,
          updatedBy: "Manually",
        },
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
} = dashboardApi;
