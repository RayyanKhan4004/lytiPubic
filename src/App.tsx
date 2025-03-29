import toast, { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { useEffect, useRef } from "react";
import { useAppSelector } from "./lib/store/hooks";
import { io, Socket } from "socket.io-client";

function App() {
  // const token = useAppSelector((state: any) => state?.auth?.access_token);
  // const socketRef = useRef<Socket | null>(null);

  // useEffect(() => {
  //   if (!token) return;

  //   if (!socketRef.current) {
  //     const socket = io("https://api.lyti.io/", {
  //       extraHeaders: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     socketRef.current = socket;

  //     socket.on("connect", () => {
  //       console.log("Connected to notification service:", socket.id);
  //     });

  //     socket.on("connect_error", (error) => {
  //       console.error("Connection error:", error.message);
  //     });

  //     socket.on("notification", (data) => {
  //       console.log("New notification received:", data);
  //       displayNotification(data);
  //     });

  //     return () => {
  //       socket.disconnect();
  //       socketRef.current = null;
  //     };
  //   }
  // }, [token]);

  // function displayNotification(notification: any) {
  //   toast.success(notification.message);
  // }
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
