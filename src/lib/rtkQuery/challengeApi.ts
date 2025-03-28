import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ChallengesType, SignUpFormValues } from "../../utils/types";
export const challengeApi = createApi({
  reducerPath: "challengeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.REACT_APP_API_BASE_URL,

    prepareHeaders: (headers, { getState, endpoint }) => {
      const noAuthRequiredEndpoints = ["login", "signUp"];

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
    getChallengeCategories: builder.query<any, void>({
      query: () => "challenges/categories",
    }),
    createChallenge: builder.mutation<any, ChallengesType>({
      query: (challengeData) => ({
        url: "challenges/create",
        method: "POST",
        body: challengeData,
      }),
    }),
  }),
});

export const { useGetChallengeCategoriesQuery, useCreateChallengeMutation } =
  challengeApi;
