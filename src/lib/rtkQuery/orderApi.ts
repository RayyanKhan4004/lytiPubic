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
        limit,
        type,
        propertyCounty,
        keyword,
        transactionType,
      }) =>
        `orders/?page=${page}&limit=${10}&fileStatus=${status}&fileType=${type}&propertyCounty=${propertyCounty}&keyword=${keyword}&transactionType=${transactionType}`,
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
        pipelinePage?: number;
        appSetPage?: number;
        appMetPage?: number;
        signedPage?: number;
        firstTimeShowingPage?: number;
        firstTimeOfferPage?: number;
        liveListingPage?: number;
        listingExpiredPage?: number;
        buyerAgreementExpiredPage?: number;
        pendingPage?: number;
        closedPage?: number;
        lostPage?: number;
      }
    >({
      query: ({
        limit,
        pipelinePage,
        appSetPage,
        appMetPage,
        signedPage,
        firstTimeShowingPage,
        firstTimeOfferPage,
        liveListingPage,
        listingExpiredPage,
        buyerAgreementExpiredPage,
        pendingPage,
        closedPage,
        lostPage,
      }) =>
        `orders/ae-lead-stages-board/?pipelineLimit=${limit}&pipelinePage=${pipelinePage}&appSetLimit=${limit}&appSetPage=${appSetPage}&appMetLimit=${limit}&appMetPage=${appMetPage}&signedLimit=${limit}&signedPage=${signedPage}&firstTimeShowingLimit=${limit}&firstTimeShowingPage=${firstTimeShowingPage}&firstTimeOfferLimit=${limit}&firstTimeOfferPage=${firstTimeOfferPage}&liveListingLimit=${limit}&liveListingPage=${liveListingPage}&listingExpiredLimit=${limit}&listingExpiredPage=${listingExpiredPage}&buyerAgreementExpiredLimit=${limit}&buyerAgreementExpiredPage=${buyerAgreementExpiredPage}&pendingLimit=${limit}&pendingPage=${pendingPage}&closedLimit=${limit}&closedPage=${closedPage}&lostLimit=${limit}&lostPage=${lostPage}`,
    }),

    getListingOffices: builder.query<any, void>({
      query: () => ({
        url: "orders/listing-offices",
        method: "GET",
      }),
    }),
    getSellingOffice: builder.query<any, void>({
      query: () => ({
        url: "orders/selling-offices",
        method: "GET",
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
} = orderApi;
