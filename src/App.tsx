import toast, { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { useEffect, useRef } from "react";
import { useAppSelector } from "./lib/store/hooks";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = "https://api.lyti.io/";

function App() {
  const token = useAppSelector((state: any) => state?.auth?.access_token);
  const userId = useAppSelector((state: any) => state?.auth?.user?.id);
  const socket = io(SOCKET_URL, {
    extraHeaders: {},
  });
  socket.on("connect", () => {
    console.log("Connected to socket server");

    socket.emit("authenticate", { userId: String(userId) });
  });
  socket.on("receiveMessage", (data) => {
    console.log("Received message:", data);

    toast.success(
      `New message from ${data.senderFirstName} ${data.senderLastName}`
    );
  });
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
