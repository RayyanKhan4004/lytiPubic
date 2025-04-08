import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const chatApi = createApi({
  reducerPath: "chatApi",
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
    sendMessage: builder.mutation<
      any,
      { sender: string; receiver: string; message: string }
    >({
      query: (messageData: {
        sender: string;
        receiver: string;
        message: string;
      }) => ({
        url: "chat/send",
        method: "POST",
        body: messageData,
      }),
    }),
    getChatHistory: builder.query<any, { userId: string; receiverId: string }>({
      query: ({ userId, receiverId }) => `chat/history/${userId}/${receiverId}`,
    }),
    getChatUsers: builder.query<any, { id: string }>({
      query: ({ id }) => `chat/chat-users/${id}`,
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetChatHistoryQuery,
  useGetChatUsersQuery,
} = chatApi;

//  markAsRead: builder.mutation<any, { sender: string; receiver: string }>({
//       query: (readData: { sender: string; receiver: string }) => ({
//         url: "chat/mark-as-read",
//         method: "POST",
//         body: readData,
//       }),
//     }),
