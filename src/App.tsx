import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./routes/Routes";
import { useAppSelector, useAppDispatch } from "./lib/store/hooks";
import { clearAuth } from "./lib/store/slices/authSlice";
import { jwtDecode } from "jwt-decode";
import { io } from "socket.io-client";

const SOCKET_URL = "https://api.lyti.io/";

interface JwtPayload {
  exp: number;
  iat: number;
  email: string;
  id: number;
  role: string;
  permissions: string[];
}

function App() {
  const token = useAppSelector((state: any) => state?.auth?.access_token);
  const userId = useAppSelector((state: any) => state?.auth?.user?.id);
  const dispatch = useAppDispatch();
  const logoutTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto logout logic
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        const currentTime = Date.now();
        const expiryTime = decoded.exp * 1000;
        const timeUntilExpiry = expiryTime - currentTime;

        console.log("🔍 Token found on app load:", decoded);
        console.log("⏳ Time until expiry (ms):", timeUntilExpiry);

        if (timeUntilExpiry <= 0) {
          toast.error("Session expired. Please log in again.");
          dispatch(clearAuth());
          localStorage.clear();
        } else {
          logoutTimerRef.current = setTimeout(() => {
            toast.error("Session expired. Please log in again.");
            dispatch(clearAuth());
            localStorage.clear();
          }, timeUntilExpiry);
        }
      } catch (err) {
        console.error("❌ Invalid token:", err);
        dispatch(clearAuth());
        localStorage.clear();
      }
    }

    return () => {
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
      }
    };
  }, [token, dispatch]);

  // Socket setup
  useEffect(() => {
    const socket = io(SOCKET_URL, {
      extraHeaders: {},
    });

    socket.on("connect", () => {
      console.log("✅ Connected to socket server");
      socket.emit("authenticate", { userId: String(userId) });
    });

    socket.on("receiveMessage", (data) => {
      console.log("📨 Received message:", data);
      toast.success(
        `New message from ${data.senderFirstName} ${data.senderLastName}`
      );
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
