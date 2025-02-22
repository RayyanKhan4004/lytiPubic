import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface FormValues {
  titleOffice?: string;
  titleRep?: string;
  titleRepPct?: string;
  openDate?: string;
  estimatedClosingDate?: string;
  closedDate?: string;
  fileType?: string;
  orderNumber?: string;
  fileStatus?: string;
  propertyAddress?: string;
  propertyCounty?: string;
  propertyState?: string;
  titleOfficer?: string;
  escrowOfficer?: string;
  listingAgentCompany?: string;
  listingAgentContactName?: string;
  listingAgentContactEmail?: string;
  listingAgentPhone?: string;
  sellingAgentCompany?: string;
  sellingAgentContactName?: string;
  sellingAgentContactEmail?: string;
  sellingAgentPhone?: string;
  mortgageBrokerCompany?: string;
  mortgageBrokerContact?: string;
  mortgageBrokerContactEmail?: string;
  mortgageBrokerPhone?: string;
  underwriter?: string;
  filter?: string;
  page?: number;
  limit?: number;
  status?: string;
  type?: string;
}

export const orderApi = createApi({
  reducerPath: "orderApi",
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
    getOrders: builder.query<any, FormValues>({
      query: ({ status, page, limit, type }) =>
        `orders/?page=${page}&limit=${10}&fileStatus=${status}&fileType=${type}`,
    }),

    createOrder: builder.mutation<any, FormValues>({
      query: (body) => ({
        url: "orders",
        method: "POST",
        body,
      }),
    }),
    deleteOrder: builder.mutation<any, string>({
      query: (id) => ({
        url: `orders/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
