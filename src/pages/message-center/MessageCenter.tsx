import { io, Socket } from "socket.io-client";
import Breadcrumb from "../../components/common/BreadCrumb";
import CardLayout from "../../components/layouts/CardLayout";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../lib/store/hooks";
import { useGetChatHistoryQuery } from "../../lib/rtkQuery/chatApi";
import toast from "react-hot-toast";
import { useFetchUsersForChatQuery } from "../../lib/rtkQuery/userApi";
import { useForm } from "react-hook-form";
import SelectField from "../../components/inputs/SelectField";
import plane from "../../assets/icons/PaperPlaneTilt.svg";
import MainTitle from "../../components/ui/typography/MainTitle";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
import messageSound from "../../assets/sound/MessageSound.ogg";

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

const SOCKET_URL = "https://api.lyti.io/";

interface ChatType {
  userId: string;
}

interface MessageType {
  sender: string;
  message: string;
  timestamp: string;
  senderImage?: string;
}

function MessageCenter() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const receiverIdRef = useRef<string | undefined>(undefined);

  const {
    formState: { errors },
    watch,
    control,
  } = useForm<ChatType>();

  const receiverId = watch("userId");
  useEffect(() => {
    receiverIdRef.current = receiverId;
  }, [receiverId]);

  const token = useAppSelector((state: any) => state?.auth?.access_token);
  const userId = useAppSelector((state: any) => state?.auth?.user?.id);

  const { data: usersData } = useFetchUsersForChatQuery();
  const UsersOptions =
    usersData?.users
      ?.filter((user: any) => user.id !== userId)
      .map((user: any) => ({
        value: String(user.id),
        label: user.firstname,
      })) || [];

  const { data: chatHistory, refetch } = useGetChatHistoryQuery(
    { userId, receiverId },
    { skip: !userId || !receiverId }
  );

  useEffect(() => {
    setMessages([]);
    if (receiverId) refetch();
  }, [receiverId, refetch]);

  useEffect(() => {
    if (chatHistory?.data) {
      const historyMessages = chatHistory.data.map((msg: any) => ({
        sender: String(msg.senderId),
        message: msg.message,
        timestamp: msg.timestamp,
        senderImage:
          String(msg.senderId) !== String(userId)
            ? msg.senderProfileImage
            : undefined,
      }));
      setMessages(historyMessages);
    }
  }, [chatHistory]);

  useEffect(() => {
    if (!token || !userId) return; // Only check token and userId here

    const socket = io(SOCKET_URL, {
      extraHeaders: {},
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("authenticate", { userId: String(userId) });
    });

    socket.on("receiveMessage", (data) => {
      console.log(data, "===message received===");

      if (typeof data === "object" && data.message) {
        const newMessage = {
          sender: String(data.senderId),
          message: data.message,
          timestamp: data.timestamp,
        };

        const audio = new Audio(messageSound);
        audio.play().catch((e) => console.log("Audio play error:", e));

        if (
          String(data.senderId) === receiverIdRef.current ||
          String(data.receiverId) === receiverIdRef.current
        ) {
          setMessages((prev) => [...prev, newMessage]);
        } else {
          toast.success(
            `New message from ${data.senderFirstName} ${data.senderLastName}`
          );
        }
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
      timestamp: new Date().toISOString(),
    };

    socketRef.current.emit("sendMessage", newMessage);
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const formatDateLabel = (dateStr: string) => {
    const date = dayjs(dateStr);
    if (date.isToday()) return "Today";
    if (date.isYesterday()) return "Yesterday";
    return date.format("DD/MM/YYYY");
  };

  const groupMessagesByDate = () => {
    const grouped: Record<string, MessageType[]> = {};
    messages.forEach((msg) => {
      const date = dayjs(msg.timestamp).format("YYYY-MM-DD");
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(msg);
    });
    return grouped;
  };

  const groupedMessages = groupMessagesByDate();

  return (
    <div className="p-4">
      <Breadcrumb items={["Account", "Message Center"]} />
      <div className="mt-5">
        <CardLayout className="w-[49%]">
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
            className={`h-64 overflow-y-auto border border-gray-200 p-2 rounded-lg mb-1 bg-gray-100 ${
              messages.length === 0 ? "flex justify-center items-center" : ""
            }`}
          >
            {messages.length === 0 ? (
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
            ) : (
              Object.entries(groupedMessages).map(([dateKey, msgs]) => (
                <div key={dateKey}>
                  <div className="flex justify-center my-2">
                    <span className="bg-white px-3 py-1 text-xs font-semibold border border-gray-300 rounded-full shadow-sm">
                      {formatDateLabel(dateKey)}
                    </span>
                  </div>
                  {msgs.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex items-end my-1 transition-opacity duration-300 ${
                        msg.sender === String(userId)
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {msg.sender !== String(userId) && msg.senderImage && (
                        <img
                          src={msg.senderImage}
                          alt="sender"
                          className="w-6 h-6 rounded-full mr-2"
                        />
                      )}
                      <div
                        className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm relative shadow-sm animate-fadeIn ${
                          msg.sender === String(userId)
                            ? "bg-blue-200 text-black"
                            : "bg-gray-200 text-black"
                        }`}
                      >
                        {msg.message}
                        <div className="text-[10px] text-right mt-1 text-gray-600">
                          {dayjs(msg.timestamp).format("hh:mm A")}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border p-2 border-gray-200 rounded-xl"
            />
            <button
              onClick={sendMessage}
              className="bg-(--secondary) text-white w-[40px] h-[40px] cursor-pointer rounded-full flex items-center justify-center transition"
              disabled={!receiverId}
            >
              <img src={plane} alt="Send" className="w-4 h-4" />
            </button>
          </div>
        </CardLayout>
      </div>

      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default MessageCenter;
