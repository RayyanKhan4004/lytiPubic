import React, { useState } from "react";

// Sample data for chat messages
const initialMessages = [
  {
    id: 1,
    sender: "sarah",
    content: "Hey Angel, How are you?",
    timestamp: "16:32",
  },
  {
    id: 2,
    sender: "angel",
    content: "Hey Sarah, I am good?",
    timestamp: "18:22",
  },
  {
    id: 3,
    sender: "angel",
    content: "Yes I've reviewed your case thoroughly.",
    timestamp: "18:33",
  },
  {
    id: 4,
    sender: "angel",
    content: "I need some documents from you.",
    timestamp: "18:33",
  },
];

function ChatScreen({ userName } : {userName : string} ) {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e :any ) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: userName.toLowerCase(),
        content: inputValue,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
    }
  };

  return (
    <div className="chat-screen grow h-full">
      <div className="user-info flex border-b-[1px] border-[#E6E6E6]  ">
        <img
          src="path-to-avatar.jpg"
          alt="User Avatar"
          className="w-[56px] h-[56px] rounded-full"
        />
        <h3 className="font-Urbanist font-medium text-[18px]">{userName}</h3>
      </div>
      <div className="messages overflow-scroll scroll-container h-[calc(80vh-50px)]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message  ${
              message.sender !== userName
                ? "self-start bg-[#E6E6E6] rounded-tl-[0px] "
                : "self-end justify-self-end bg-(--primary) text-white rounded-tr-[0px]"
            } relative  mb-2 w-fit pt-[10px] pb-[14px] px-[16px] pr-[55px] rounded-[12px]`}
          >
            <p className="text">{message.content}</p>
            <span
              className={`${
                message.sender !== userName
                  ? "text-[#999999]"
                  : "text-[#808080]"
              }    "timestamp absolute right-5.5 bottom-1 text-[14px] "`}
            >
              {message.timestamp}
            </span>
            <span className="absolute right-1.5 bottom-1 text-[14px]">
              {/* {message.sender !== userName && "✔️"} */}
            </span>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSendMessage}
        className="message-form w-full flex justify-between py-[17px] px-6 border border-[#E6E6E6] rounded-[14px] "
      >
        <input
          type="text"
          placeholder="Write your message..."
          className="message-input  "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="send-button">
          <span className="w-8 h-8 rounded-full bg-(--primary) "></span>
          <span className="w-8 h-8 rounded-full bg-(--primary) ">
            
          </span>
        </div>
      </form>
    </div>
  );
}

export default ChatScreen;
 