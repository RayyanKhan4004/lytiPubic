import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface FormValues {
  keyword: string;
  page: number;
  pageSize?: number;
  limit: number;
}

export const userApi = createApi({
  reducerPath: "userApi",
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
    fetchUsers: builder.query<any, FormValues>({
      query: ({ keyword, page, limit }) =>
        `users?keyword=${keyword}&page=${page}&limit=${10}`,
    }),
    fetchUsersWithoutLimit: builder.query<any, void>({
      query: () => `users?limit=${100000}&role=Account Executive`,
    }),
  }),
});

export const { useFetchUsersQuery, useFetchUsersWithoutLimitQuery } = userApi;
