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
//       toast.success(data);

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
import SelectField from "../../components/inputs/SelectField";
import { useForm } from "react-hook-form";

const SOCKET_URL = "https://api.lyti.io/";
interface ChatType {
  userId: string;
}
function MessageCenter() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  // const [receiverId, setReceiverId] = useState<string>("");
  const socketRef = useRef<Socket | null>(null);
  const {
    formState: { errors },
    watch,
    control,
  } = useForm<ChatType>();

  const receiverId = watch("userId");

  const token = useAppSelector((state: any) => state?.auth?.access_token);
  const userId = useAppSelector((state: any) => state?.auth?.user?.id);

  const { data: chatHistory } = useGetChatHistoryQuery(
    { userId, receiverId },
    { skip: !userId || !receiverId }
  );
  const { data: usersData } = useFetchUsersForChatQuery();
  const [sendMessageAPI] = useSendMessageMutation();

  useEffect(() => {
    if (chatHistory?.data) {
      setMessages(
        chatHistory.data.map((msg: any) => ({
          sender: String(msg.id),
          message: msg.message,
        }))
      );
    }
  }, [chatHistory]);

  useEffect(() => {
    if (!token || !userId) return;

    const socket = io(SOCKET_URL, {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("authenticate", { userId: String(userId) });
    });

    socket.on("receiveMessage", (data) => {
      toast.success(data);

      if (typeof data === "object" && data.message) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: String(data.sender) || "unknown", message: data.message },
        ]);
      }
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [token, userId]);

  const sendMessage = async () => {
    if (message.trim() === "" || !socketRef.current || !receiverId) return;

    const newMessage = {
      sender: String(userId),
      receiver: receiverId,
      message,
    };

    socketRef.current.emit("sendMessage", newMessage);
    toast.success(`${newMessage.message} is sent`);

    await sendMessageAPI(newMessage);

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  const UsersOptions =
    usersData?.users
      ?.filter((user: { id: number }) => user.id !== userId)
      .map((user: { id: number; firstname: string }) => ({
        value: String(user.id),
        label: user.firstname,
      })) || [];

  return (
    <div className="p-4">
      <Breadcrumb items={["Account", "Message Center"]} />
      <SelectField
        label="Start a chat with"
        name="userId"
        control={control}
        options={UsersOptions}
        placeholder="Select user"
        error={errors.userId?.message}
        required={false}
        className="w-[300px]"
        height="44px"
      />
      <CardLayout>
        <div className="flex flex-col w-full max-w-md mx-auto border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Chat</h2>

          <div className="h-64 overflow-y-auto border p-2 rounded mb-2 bg-gray-100">
            {(Array.isArray(messages) ? messages : []).map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 ${
                  msg.sender === String(userId) ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`px-3 py-1 rounded-lg ${
                    msg.sender === String(userId)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {msg.message}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border rounded p-2"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      </CardLayout>
    </div>
  );
}

export default MessageCenter;
