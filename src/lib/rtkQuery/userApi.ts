import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface FormValues {
  keyword?: string;
  page?: number;
  pageSize?: number;
  limit?: number;
  firstname?: string;
  lastname?: string;
  alternativemail?: string;
  password?: string;
  business_entity?: string;
  email?: string;
  role?: string;
  startDate?: string;
  profileImage?: File | null;
  brokerageCap?: string;
  yearAnniversary?: string;
  agentTransactionFee?: string;
  agentMonthlyFee?: string;
  commissionTemplate?: string;
  notes?: string;
  ae_commission_threshold?: number;
  ae_escrow_commission?: number;
  ae_title_commission?: number;
  career_path?: string;
  lead_source?: string;
  exclude_challenges_leaderboards?: boolean;
  download_transactions?: boolean;
  send_welcome_email?: boolean;
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
    updateUser: builder.mutation<
      any,
      { id: string; data: Partial<FormValues> }
    >({
      query: ({ id, data }) => ({
        url: `users/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteUser: builder.mutation<any, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchUsersQuery,
  useFetchUsersWithoutLimitQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
