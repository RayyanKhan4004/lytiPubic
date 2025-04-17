import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";

import LytiLogo from "../../assets/icons/LytiLogo.svg";
import PoweredByLyti from "../../assets/images/PoweredByLyti.svg";
import InputField from "../../components/inputs/InputFields";
import Spinner from "../../components/common/Spinner";
import { useLoginMutation } from "../../lib/rtkQuery/authApi";
import { clearAuth, setAuth } from "../../lib/store/slices/authSlice";

type FormValues = {
  email: string;
  password: string;
};

interface JwtPayload {
  exp: number;
  iat: number;
  email: string;
  id: number;
  role: string;
  permissions: string[];
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [login, { isLoading }] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleLogout = () => {
    if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
    dispatch(clearAuth());
    localStorage.clear();
    navigate("/");
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await login(data).unwrap();

      toast.success("Log in successful");
      dispatch(setAuth({ access_token: res.access_token, user: res.user }));

      const token = res.access_token;
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now();
      const expiryTime = decoded.exp * 1000;
      const timeUntilExpiry = expiryTime - currentTime;

      if (timeUntilExpiry > 0) {
        logoutTimerRef.current = setTimeout(() => {
          toast.error("Session expired. Please log in again.");
          handleLogout();
        }, timeUntilExpiry);
      } else {
        handleLogout();
      }

      navigate("/dashboard/snapShot");
    } catch (err: any) {
      toast.error(err?.data?.message || "Log in failed");
    }
  };

  useEffect(() => {
    return () => {
      if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-8">
      <div className="relative flex justify-center items-center w-[640px]">
        {/* Background circles */}
        <div className="w-[320px] h-[320px] rounded-full bg-(--primary) absolute top-[1%] left-[6%]"></div>
        <div className="w-[320px] h-[320px] rounded-full bg-(--secondary) absolute bottom-[2%] right-[3%]"></div>

        {/* Login form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-(--cardShadow) w-[450px] rounded-[35px] px-5 py-6 bg-white flex flex-col items-center z-50"
        >
          <img src={LytiLogo} alt="Logo" />
          <h1 className="text-[#212B27] text-4xl font-semibold mt-4">Log In</h1>

          <div className="w-full flex flex-col gap-2 my-5">
            <InputField
              label="Email Address"
              name="email"
              control={control}
              type="text"
              required={true}
              placeholder="Enter your email"
              error={errors.email?.message}
            />
            <InputField
              label="Password"
              name="password"
              control={control}
              type="password"
              required={true}
              placeholder="********"
              error={errors.password?.message}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-(--primary) w-full rounded-xl h-[48px] flex justify-center items-center my-3"
          >
            {isLoading ? <Spinner color="#FFFFFF" /> : "Login"}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="text-center">
        <img src={PoweredByLyti} alt="Powered By Lyti" />
        <h2 className="text-(--greyText) font-Poppins text-sm">
          © LYTI 2021. All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Login;
