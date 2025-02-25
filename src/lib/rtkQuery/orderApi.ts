import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OrderDataType } from "../../utils/types";

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
    getOrders: builder.query<any, OrderDataType>({
      query: ({ status, page, limit, type, propertyCounty, keyword }) =>
        `orders/?page=${page}&limit=${10}&fileStatus=${status}&fileType=${type}&propertyCounty=${propertyCounty}&keyword=${keyword}`,
    }),

    createOrder: builder.mutation<any, OrderDataType>({
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
