import { io, Socket } from "socket.io-client";
import Breadcrumb from "../../components/common/BreadCrumb";
import CardLayout from "../../components/layouts/CardLayout";
import { useEffect, useMemo, useRef, useState } from "react";
import { useAppSelector } from "../../lib/store/hooks";
import {
  useGetChatHistoryQuery,
  useGetChatUsersQuery,
} from "../../lib/rtkQuery/chatApi";
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
import SearchInput from "../../components/inputs/SearchInput";
import dummyImage from "../../assets/images/Dummy.jpg";
import { Dialog, DialogOverlay, DialogContent } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
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
  receiverImage?: string;
}

function MessageCenter() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([]);
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const receiverIdRef = useRef<string | undefined>(undefined);

  const [selectedUser, setSelectedUser] = useState<{
    id: string;
    firstname: string;
    lastname: string;
    profileImage?: string;
  } | null>(null);

  const {
    formState: { errors },
    watch,
    control,
    setValue,
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
        label: `${user.firstname} ${user.lastname}`,
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
        // receiverImage:
        //   String(msg.receiverId) !== String(userId)
        //     ? msg.receiverProfileImage
        //     : undefined,
      }));
      setMessages(historyMessages);
    }
  }, [chatHistory]);

  useEffect(() => {
    if (!token || !userId) return;

    const socket = io(SOCKET_URL, {
      extraHeaders: {},
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("authenticate", { userId: String(userId) });
    });

    // socket.on("inbox", (data) => {
    //   console.log("New inbox message:", data);
    // });
    // socket.on("getChatUsers", (data) => {
    //   console.log("getChatUsers message:", data);
    // });

    socket.on("receiveMessage", (data) => {
      if (typeof data === "object" && data.message) {
        const newMessage = {
          sender: String(data.senderId),
          message: data.message,
          timestamp: data.timestamp,
          senderImage:
            String(data.senderId) !== String(userId)
              ? data.senderProfileImage
              : undefined,
          // receiverImage:
          //   String(data.receiverId) !== String(userId)
          //     ? data.receiverProfileImage
          //     : undefined,
        };

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

  const userIdFromStore = useAppSelector((state: any) => state?.auth?.user?.id);
  const { data: chatUsers, isLoading } = useGetChatUsersQuery({
    id: userIdFromStore,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (search: string) => {
    setSearchTerm(search.toLowerCase());
  };

  const filteredUsers = useMemo(() => {
    if (!chatUsers) return [];
    return chatUsers.filter((user: any) =>
      `${user.firstname} ${user.lastname}`.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm, chatUsers]);

  useEffect(() => {
    if (!receiverId || !usersData?.users) return;

    const matchedUser = usersData.users.find(
      (user: any) => String(user.id) === receiverId
    );

    if (matchedUser) {
      setSelectedUser({
        id: String(matchedUser.id),
        firstname: matchedUser.firstname,
        lastname: matchedUser.lastname,
        profileImage: matchedUser.profileImage,
      });
    } else {
      setSelectedUser(null);
    }
  }, [receiverId, usersData]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <Breadcrumb items={["Account", "Message Center"]} />
        <button
          onClick={togglePopup}
          className="bg-(--secondary) text-white px-4 py-2 rounded-lg transition"
        >
          Start New Chat
        </button>

        <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
          <DialogOverlay className="fixed inset-0 bg-black/50 z-[100]" />
          <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-full max-w-lg z-[101]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Start a New Chat</h2>
              <button onClick={togglePopup}>
                <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

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
          </DialogContent>
        </Dialog>
      </div>
      <div className="shadow-(--cardShadow) rounded-2xl bg-white p-3 flex mt-3">
        <div className="w-[30%] border-r border-gray-300 ">
          <MainTitle title="Message center" />
          <div className="pr-2 mt-2">
            <SearchInput
              debounceTimeout={500}
              placeholder="Search Keyword"
              onChange={handleSearch}
              className=" mb-4 "
              height="41px"
            />

            <div className="space-y-2 h-80 overflow-y-auto p-2">
              {isLoading ? (
                <p>Loading...</p>
              ) : filteredUsers.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mb-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.19-.92L3 20l1.35-3.61A8.964 8.964 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>

                  {/* Text Message */}
                  <p className="text-lg font-semibold">No previous chats</p>
                  <p className="text-sm text-gray-400">
                    Start a new conversation to see it here.
                  </p>
                </div>
              ) : (
                filteredUsers.map((user: any) => (
                  <div
                    key={user.id}
                    className={`flex items-center p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer ${
                      String(receiverId) === String(user.id)
                        ? "bg-gray-100"
                        : ""
                    }`}
                    onClick={() => {
                      setValue("userId", String(user.id));
                      setSelectedUser({
                        id: String(user.id),
                        firstname: user.firstname,
                        lastname: user.lastname,
                        profileImage: user.profileImage,
                      });
                    }}
                  >
                    <img
                      src={user.profileImage || dummyImage}
                      alt={`${user.firstname} ${user.lastname}`}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div className="text-sm font-medium text-gray-800">
                      {user.firstname} {user.lastname}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="w-[70%] px-3 flex flex-col gap-3">
          <div>
            {selectedUser ? (
              <div className="flex items-center border-b border-gray-100 pb-2 mb-2">
                <img
                  src={selectedUser.profileImage || dummyImage}
                  alt={selectedUser.firstname}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {selectedUser.firstname} {selectedUser.lastname}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center border-b border-gray-100 pb-2 mb-2">
                <img
                  src={dummyImage}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Select a user to chat
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className={`h-72 overflow-y-auto p-2 rounded-lg mb-1  ${
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
                            ? "bg-(--secondary) text-white"
                            : "bg-(#F3F3F3) text-(#333333"
                        }`}
                      >
                        {msg.message}
                        <div
                          className={`text-[10px] text-right mt-1  
                          ${
                            msg.sender === String(userId)
                              ? " text-white"
                              : " text-(#333333"
                          }`}
                        >
                          {dayjs(msg.timestamp).format("hh:mm A")}
                        </div>
                      </div>

                      {/* {msg.sender === String(userId) && msg.receiverImage && (
                        <img
                          src={msg.receiverImage}
                          alt="receiver"
                          className="w-6 h-6 rounded-full ml-2"
                        />
                      )} */}
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
        </div>
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
