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
      query: ({
        status,
        page,
        limit = 10,
        type,
        propertyCounty,
        keyword,
        transactionType,
        titleOffice,
        underwriter,
        orderId,
        startDate,
        endDate,
        userId,
      }) => ({
        url: "orders/",
        params: {
          page,
          limit,
          fileStatus: status,
          fileType: type,
          propertyCounty,
          keyword,
          transactionType,
          titleOffice,
          underwriter,
          orderId,
          startDate,
          endDate,
          userId,
        },
      }),
    }),

    createOrder: builder.mutation<any, OrderDataType>({
      query: (body) => ({
        url: "orders",
        method: "POST",
        body,
      }),
    }),
    updateOrder: builder.mutation<any, { id: string; data: OrderDataType }>({
      query: ({ id, data }) => ({
        url: `orders/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteOrder: builder.mutation<any, string>({
      query: (id) => ({
        url: `orders/${id}`,
        method: "DELETE",
      }),
    }),
    fetchAeLeadStagesBoard: builder.query<
      any,
      {
        limit?: number;
        appSetPage?: number;
        appMetPage?: number;
        prelimCommitmentPage?: number;
        verbalCommitmentPage?: number;
        closedPage?: number;
        lostPage?: number;
        cancelledPage?: number;
      }
    >({
      query: ({
        limit,
        appSetPage,
        appMetPage,
        prelimCommitmentPage,
        verbalCommitmentPage,
        closedPage,
        lostPage,
        cancelledPage,
      }) =>
        `orders/ae-lead-stages-board/?appSetLimit=${limit}&appSetPage=${appSetPage}&appMetLimit=${limit}&appMetPage=${appMetPage}&prelimCommitmentLimit=${limit}&prelimCommitmentPage=${prelimCommitmentPage}&verbalCommitmentLimit=${limit}&verbalCommitmentPage=${verbalCommitmentPage}&closedLimit=${limit}&closedPage=${closedPage}&lostLimit=${limit}&lostPage=${lostPage}&cancelledLimit=${limit}&cancelledPage=${cancelledPage}`,
    }),

    getListingOffices: builder.query<any, void>({
      query: () => ({
        url: "orders/listing-offices",
        method: "GET",
      }),
    }),
    getListingOfficeById: builder.query<any, number>({
      query: (id) => ({
        url: `listing-office/${id}`,
        method: "GET",
      }),
    }),
    getSellingOfficeById: builder.query<any, number>({
      query: (id) => ({
        url: `selling-office/${id}`,
        method: "GET",
      }),
    }),
    getListingOfficesWithAgent: builder.query<
      any,
      { page?: number; limit?: number }
    >({
      query: ({ page, limit }) => ({
        url: `listing-office/?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
    getSellingOfficesWithAgent: builder.query<
      any,
      { page?: number; limit?: number }
    >({
      query: ({ page, limit }) => ({
        url: `selling-office/?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
    getSellingOffice: builder.query<any, void>({
      query: () => ({
        url: "orders/selling-offices",
        method: "GET",
      }),
    }),
    getLeaderboard: builder.query<any, { report: string }>({
      query: ({ report }) => ({
        url: `orders/leaderboard?report=${report}`,
        method: "GET",
        // params: { report },
      }),
    }),

    getUnderwriters: builder.query<any, { orderId: string }>({
      query: ({ orderId }) => ({
        url: "orders/underwriters",
        method: "GET",
        params: { orderId },
      }),
    }),
    getTitleOffices: builder.query<any, { orderId: string }>({
      query: ({ orderId }) => ({
        url: "orders/titleOffices",
        method: "GET",
        params: { orderId },
      }),
    }),
    getPropertyCounties: builder.query<any, { orderId: string }>({
      query: ({ orderId }) => ({
        url: "orders/property-counties",
        method: "GET",
        params: { orderId },
      }),
    }),
    getTop5ListingAgents: builder.query<any, void>({
      query: () => ({
        url: "listing-office/top-5",
        method: "GET",
      }),
    }),
    getTop5SellingAgents: builder.query<any, void>({
      query: () => ({
        url: "selling-office/top-5",
        method: "GET",
      }),
    }),

    createListingOffice: builder.mutation<any, any>({
      query: (body) => ({
        url: "listing-office",
        method: "POST",
        body,
      }),
    }),
    createSellingOffice: builder.mutation<any, any>({
      query: (body) => ({
        url: "selling-office",
        method: "POST",
        body,
      }),
    }),
    deleteListingOffice: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `listing-office/${id}`,
        method: "DELETE",
      }),
    }),
    deleteSellingOffice: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `selling-office/${id}`,
        method: "DELETE",
      }),
    }),
    createListingAgent: builder.mutation<
      any,
      { listingOfficeId: number; contactName: string }
    >({
      query: (body) => ({
        url: "listing-agent",
        method: "POST",
        body,
      }),
    }),
    createSellingAgent: builder.mutation<
      any,
      { sellingOfficeId: number; contactName: string }
    >({
      query: (body) => ({
        url: "selling-agent",
        method: "POST",
        body,
      }),
    }),
    deleteListingAgent: builder.mutation<any, { id: number }>({
      query: ({ id }) => ({
        url: `listing-agent/${id}`,
        method: "DELETE",
      }),
    }),
    deleteSellingAgent: builder.mutation<any, { id: number }>({
      query: ({ id }) => ({
        url: `selling-agent/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useFetchAeLeadStagesBoardQuery,
  useGetListingOfficesQuery,
  useGetSellingOfficeQuery,
  useGetListingOfficesWithAgentQuery,
  useGetUnderwritersQuery,
  useGetTitleOfficesQuery,
  useGetPropertyCountiesQuery,
  useGetSellingOfficesWithAgentQuery,
  useGetListingOfficeByIdQuery,
  useGetSellingOfficeByIdQuery,
  useGetTop5ListingAgentsQuery,
  useGetTop5SellingAgentsQuery,
  useCreateListingOfficeMutation,
  useDeleteListingOfficeMutation,
  useCreateListingAgentMutation,
  useDeleteListingAgentMutation,
  useCreateSellingAgentMutation,
  useCreateSellingOfficeMutation,
  useDeleteSellingOfficeMutation,
  useDeleteSellingAgentMutation,
  useGetLeaderboardQuery,
} = orderApi;
