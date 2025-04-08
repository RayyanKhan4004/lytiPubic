import { useState } from "react";
import LytiLogo from "../../assets/icons/LytiLogo.svg";
import Eye from "../../assets/icons/Eye.svg";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import PoweredByLyti from "../../assets/images/PoweredByLyti.svg";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputs/InputFields";
import { useLoginMutation } from "../../lib/rtkQuery/authApi";
import { error } from "console";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearAuth, setAuth } from "../../lib/store/slices/authSlice";
import Spinner from "../../components/common/Spinner";
import PrimaryButton from "../../components/ui/button/PrimaryButton";
import { jwtDecode } from "jwt-decode";

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
  const [showPassword, setShowPassword] = useState(false);
  const naviagte = useNavigate();
  const [login, { isLoading, isError }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearAuth());
    localStorage.clear();
    navigate("/");
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await login(data).unwrap();

      toast.success("Log in successfully");
      dispatch(setAuth(res));

      const token = res.access_token;
      const decoded = jwtDecode<JwtPayload>(token);

      const currentTime = Date.now();
      const expiryTime = decoded.exp * 1000;
      const timeUntilExpiry = expiryTime - currentTime;
      const expiryDate = new Date(expiryTime);
      const sessionDuration = Math.floor(timeUntilExpiry / 1000);

      if (timeUntilExpiry > 0) {
        setTimeout(() => {
          toast.error("Session expired. Please log in again.");
          handleLogout();
        }, timeUntilExpiry);
      } else {
        handleLogout();
      }

      naviagte("/dashboard/snapShot");
    } catch (err: any) {
      toast.error(err?.data?.message || "Log in failed");
    }
  };

  return (
    <div className="w-full min-h-screen h-auto flex justify-center items-center flex-col   gap-8">
      <div className="relative flex justify-center items-center h-auto w-[640px] ">
        <div className="w-[320px] h-[320px] rounded-full bg-(--primary) absolute top-[1%] left-[6%]"></div>
        <div className="w-[320px] h-[320px] rounded-full bg-(--secondary) absolute bottom-[2%] right-[3%]"></div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-(--cardShadow) w-[450px] h-auto rounded-[35px] mx-auto flex justify-center items-center flex-col px-5 py-6 bg-white relative z-50"
        >
          <img src={LytiLogo} alt="Logo" />
          <h1 className="text-[#212B27] text-4xl font-semibold">Log In</h1>

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
            className="text-white bg-(--primary) w-full rounded-xl h-[48px] cursor-pointer flex justify-center items-center my-3"
          >
            {isLoading ? <Spinner color="#FFFFFF" /> : "Login"}
          </button>
        </form>
      </div>

      <div>
        <img src={PoweredByLyti} alt="" />
        <h2 className="text-(--greyText) font-Poppins text-sm ">
          © LYTI 2021. All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Login;
