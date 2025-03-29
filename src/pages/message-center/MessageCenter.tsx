// import { io, Socket } from "socket.io-client";
// import Breadcrumb from "../../components/common/BreadCrumb";
// import CardLayout from "../../components/layouts/CardLayout";
// import { useEffect, useRef, useState } from "react";
// import { useAppSelector } from "../../lib/store/hooks";
// import {
//   useGetChatHistoryQuery,
//   useSendMessageMutation,
// } from "../../lib/rtkQuery/chatApi";
// import toast from "react-hot-toast";

// // Constants
// const SOCKET_URL = "https://api.lyti.io/"; // Update with actual WebSocket URL
// const RECEIVER_ID = "1"; // Hardcoded for now

// function MessageCenter() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState<
//     { sender: string; message: string }[]
//   >([]);
//   const socketRef = useRef<Socket | null>(null);

//   // Get token and userId from Redux store
//   const token = useAppSelector((state: any) => state?.auth?.access_token);
//   const userId = useAppSelector((state: any) => state?.auth?.user?.id);

//   // RTK Query hooks for API calls
//   const { data: chatHistory } = useGetChatHistoryQuery(
//     { userId, receiverId: RECEIVER_ID },
//     { skip: !userId }
//   );
//   const [sendMessageAPI] = useSendMessageMutation();

//   // Load old messages from API
//   useEffect(() => {
//     if (chatHistory?.data) {
//       setMessages(
//         chatHistory.data.map((msg: any) => ({
//           sender: String(msg.id), // Ensure sender is always a string
//           message: msg.message,
//         }))
//       );
//     }
//   }, [chatHistory]);

//   // WebSocket connection
//   useEffect(() => {
//     if (!token || !userId) return;

//     const socket = io(SOCKET_URL, {
//       extraHeaders: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     socketRef.current = socket;

//     socket.on("connect", () => {
//       console.log("Connected to chat service:", socket.id);
//       socket.emit("authenticate", { userId: String(userId) }); // Ensure userId is a string
//     });

//     socket.on("receiveMessage", (data) => {
//       console.log("Message received:", data);
//       toast.success(data.message);

//       if (typeof data === "object" && data.message) {
//         setMessages((prevMessages) => [
//           ...prevMessages,
//           { sender: String(data.sender) || "unknown", message: data.message },
//         ]);
//       }
//     });

//     return () => {
//       socket.disconnect();
//       socketRef.current = null;
//     };
//   }, [token, userId]);

//   // Send Message Function
//   const sendMessage = async () => {
//     if (message.trim() === "" || !socketRef.current) return;

//     const newMessage = {
//       sender: String(userId),
//       receiver: RECEIVER_ID,
//       message,
//     };

//     // Send message via WebSocket
//     socketRef.current.emit("sendMessage", newMessage);
//     toast.success(`${newMessage} is send`);
//     console.log(newMessage, "==message==");

//     // Send message via API
//     await sendMessageAPI(newMessage);

//     // Optimistically update UI
//     setMessages((prev) => [...prev, newMessage]);
//     setMessage("");
//   };

//   return (
//     <div className="p-4">
//       <Breadcrumb items={["Account", "Message Center"]} />
//       <CardLayout>
//         <div className="flex flex-col w-full max-w-md mx-auto border rounded-lg p-4">
//           <h2 className="text-lg font-semibold mb-2">
//             Chat with User {RECEIVER_ID}
//           </h2>
//           <div className="h-64 overflow-y-auto border p-2 rounded mb-2 bg-gray-100">
//             {(Array.isArray(messages) ? messages : []).map((msg, index) => (
//               <div
//                 key={index}
//                 className={`p-2 my-1 ${
//                   msg.sender === String(userId) ? "text-right" : "text-left"
//                 }`}
//               >
//                 <span
//                   className={`px-3 py-1 rounded-lg ${
//                     msg.sender === String(userId)
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-300"
//                   }`}
//                 >
//                   {msg.message}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <div className="flex gap-2">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type a message..."
//               className="flex-1 border rounded p-2"
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </CardLayout>
//     </div>
//   );
// }

// export default MessageCenter;

// import { io, Socket } from "socket.io-client";
// import Breadcrumb from "../../components/common/BreadCrumb";
// import CardLayout from "../../components/layouts/CardLayout";
// import { useEffect, useRef, useState } from "react";
// import { useAppSelector } from "../../lib/store/hooks";
// import {
//   useGetChatHistoryQuery,
//   useSendMessageMutation,
// } from "../../lib/rtkQuery/chatApi";
// import toast from "react-hot-toast";
// import { useFetchUsersForChatQuery } from "../../lib/rtkQuery/userApi";
// import SelectField from "../../components/inputs/SelectField";
// import { useForm } from "react-hook-form";

// const SOCKET_URL = "https://api.lyti.io/";

// interface ChatType {
//   userId: string;
// }

// interface MessageType {
//   id?: number;
//   senderId: number;
//   receiverId: number;
//   message: string;
//   timestamp?: string;
// }

// function MessageCenter() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState<MessageType[]>([]);
//   const socketRef = useRef<Socket | null>(null);
//   const {
//     formState: { errors },
//     watch,
//     control,
//   } = useForm<ChatType>();

//   const receiverId = watch("userId");

//   const token = useAppSelector((state: any) => state?.auth?.access_token);
//   const userId = useAppSelector((state: any) => state?.auth?.user?.id);

//   const { data: chatHistory } = useGetChatHistoryQuery(
//     { userId, receiverId },
//     { skip: !userId || !receiverId }
//   );
//   const { data: usersData } = useFetchUsersForChatQuery();
//   const [sendMessageAPI] = useSendMessageMutation();

//   // Load chat history when available
//   useEffect(() => {
//     if (chatHistory?.data) {
//       setMessages(
//         chatHistory.data.map((msg: any) => ({
//           id: msg.id,
//           senderId: msg.senderId,
//           receiverId: msg.receiverId,
//           message: msg.message,
//           timestamp: msg.timestamp,
//         }))
//       );
//     }
//   }, [chatHistory]);

//   useEffect(() => {
//     if (!token || !userId || socketRef.current) return; // Prevent multiple connections

//     const socket = io(SOCKET_URL, {
//       extraHeaders: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     socketRef.current = socket;

//     socket.on("connect", () => {
//       console.log("Connected to chat service:", socket.id);
//       socket.emit("authenticate", { userId: String(userId) });
//     });

//     // socket.on("receiveMessage", (data: MessageType) => {
//     //   console.log("== Received message ==", data);
//     //   toast.success(data.message);

//     //   if (data && data.message) {
//     //     setMessages((prevMessages) => [...prevMessages, data]);
//     //   }
//     // });
//     socket.on("receiveMessage", (data) => {
//       console.log("== Received message ==", data);
//       if (!data) {
//         console.warn("Received empty or invalid message data!");
//         return;
//       }
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });

//     return () => {
//       socket.disconnect();
//       socketRef.current = null;
//     };
//   }, [token, userId]);

//   const sendMessage = async () => {
//     if (message.trim() === "" || !socketRef.current || !receiverId) return;

//     const newMessage: MessageType = {
//       senderId: userId,
//       receiverId: Number(receiverId),
//       message,
//     };

//     socketRef.current.emit("sendMessage", newMessage);
//     console.log("send message event ", newMessage);

//     toast.success(`Message sent: "${newMessage.message}"`);

//     const formattedMessage = {
//       sender: String(newMessage.senderId),
//       receiver: String(newMessage.receiverId),
//       message: newMessage.message,
//     };

//     await sendMessageAPI(formattedMessage);

//     setMessages((prev) => [...prev, newMessage]);
//     setMessage("");
//   };

//   const UsersOptions =
//     usersData?.users
//       ?.filter((user: { id: number }) => user.id !== userId)
//       .map((user: { id: number; firstname: string }) => ({
//         value: String(user.id),
//         label: user.firstname,
//       })) || [];

//   return (
//     <div className="p-4">
//       <Breadcrumb items={["Account", "Message Center"]} />
//       <SelectField
//         label="Start a chat with"
//         name="userId"
//         control={control}
//         options={UsersOptions}
//         placeholder="Select user"
//         error={errors.userId?.message}
//         required={false}
//         className="w-[300px]"
//         height="44px"
//       />
//       <CardLayout>
//         <div className="flex flex-col w-full max-w-md mx-auto border rounded-lg p-4">
//           <h2 className="text-lg font-semibold mb-2">Chat</h2>

//           <div className="h-64 overflow-y-auto border p-2 rounded mb-2 bg-gray-100">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex my-1 ${
//                   msg.senderId === userId ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <span
//                   className={`px-3 py-1 rounded-lg ${
//                     msg.senderId === userId
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-300"
//                   }`}
//                 >
//                   {msg.message}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="flex gap-2">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type a message..."
//               className="flex-1 border rounded p-2"
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </CardLayout>
//     </div>
//   );
// }

// export default MessageCenter;

import { io, Socket } from "socket.io-client";
import Breadcrumb from "../../components/common/BreadCrumb";
import CardLayout from "../../components/layouts/CardLayout";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../lib/store/hooks";
import {
  useGetChatHistoryQuery,
  useSendMessageMutation,
} from "../../lib/rtkQuery/chatApi";
import toast from "react-hot-toast";
import { useFetchUsersForChatQuery } from "../../lib/rtkQuery/userApi";
import { useForm } from "react-hook-form";
import SelectField from "../../components/inputs/SelectField";
import plane from "../../assets/icons/PaperPlaneTilt.svg";
import MainTitle from "../../components/ui/typography/MainTitle";

const SOCKET_URL = "https://api.lyti.io/";
interface ChatType {
  userId: string;
}
function MessageCenter() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  console.log(messages, "===array of message==");

  const {
    formState: { errors },
    watch,
    control,
  } = useForm<ChatType>();
  const receiverId = watch("userId");
  const socketRef = useRef<Socket | null>(null);

  const token = useAppSelector((state: any) => state?.auth?.access_token);
  const userId = useAppSelector((state: any) => state?.auth?.user?.id);

  const { data: usersData } = useFetchUsersForChatQuery();
  const UsersOptions =
    usersData?.users
      ?.filter((user: { id: number }) => user.id !== userId)
      .map((user: { id: number; firstname: string }) => ({
        value: String(user.id),
        label: user.firstname,
      })) || [];

  const { data: chatHistory } = useGetChatHistoryQuery(
    { userId, receiverId },
    { skip: !userId || !receiverId }
  );
  const [sendMessageAPI] = useSendMessageMutation();

  useEffect(() => {
    if (chatHistory?.data) {
      setMessages(
        chatHistory.data.map((msg: any) => ({
          sender: String(msg.senderId),
          message: msg.message,
        }))
      );
    }
  }, [chatHistory]);

  useEffect(() => {
    if (!token || !userId || !receiverId) return;

    const socket = io(SOCKET_URL, {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected to chat service:", socket.id);
      socket.emit("authenticate", { userId: String(userId) });
    });

    socket.on("receiveMessage", (data) => {
      console.log("Message received:", data);
      toast.success(data.message);

      if (typeof data === "object" && data.message) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: String(data.senderId), message: data.message },
        ]);
      }
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [token, userId, receiverId]);

  const sendMessage = async () => {
    if (message.trim() === "" || !socketRef.current || !receiverId) return;

    const newMessage = {
      sender: String(userId),
      receiver: receiverId,
      message,
    };

    socketRef.current.emit("sendMessage", newMessage);
    toast.success("Message sent!");

    await sendMessageAPI(newMessage);

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="p-4">
      <Breadcrumb items={["Account", "Message Center"]} />
      <div className="mt-5">
        <CardLayout className="w-[49%] ">
          {/* <div className="flex flex-col w-full max-w-md mx-auto border rounded-lg p-4"> */}
          <MainTitle title="Chat Box" />

          <SelectField
            label="Start a chat with"
            name="userId"
            control={control}
            options={UsersOptions}
            placeholder="Select user"
            error={errors.userId?.message}
            required={false}
            height="44px"
          />

          <div
            className={`h-64 overflow-y-auto border border-gray-200 p-3 rounded-lg mb-2 bg-gray-100 ${
              messages.length === 0 ? "flex justify-center items-center" : ""
            }`}
          >
            {Array.isArray(messages) && messages.length > 0 ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-end my-1 ${
                    msg.sender === String(userId)
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm relative ${
                      msg.sender === String(userId)
                        ? "bg-blue-200 text-black"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center">
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h10l5 5z"></path>
                  <path d="M10 8h4"></path>
                  <path d="M10 12h4"></path>
                </svg>
                <p className="text-gray-500 text-center text-lg font-medium mt-2">
                  Start chatting in Lyti!
                </p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border p-2 border-gray-200 rounded-xl"
            />
            <button
              onClick={sendMessage}
              className="bg-(--secondary)  text-white w-[40px] h-[40px] cursor-pointer  rounded-full"
              disabled={!receiverId}
            >
              <img src={plane} alt="" className="mx-auto" />
            </button>
          </div>
        </CardLayout>
      </div>
    </div>
  );
}

export default MessageCenter;
