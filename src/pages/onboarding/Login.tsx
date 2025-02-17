import { useState } from "react";
import LytiLogo from "../../assets/icons/LytiLogo.svg";
import Eye from "../../assets/icons/Eye.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import PoweredByLyti from "../../assets/images/PoweredByLyti.svg";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const naviagte = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    naviagte("/dashboard/snapShot");
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
            <div className="text-(--greyText) flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[14px] leading-[18px] font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="bill.sanders@example.com"
                className={`placeholder:text-[16px] placeholder:leading-[20px] placeholder:font-normal h-[55px] border-2 ${
                  errors.email ? "border-red-500" : "border-(--inputBorder"
                } rounded-[10px] w-full px-5 text-blackText`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email is invalid",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="text-(--greyText) flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-[14px] leading-[18px] font-medium"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="********"
                  className={`placeholder:text-[16px] placeholder:leading-[20px] placeholder:font-normal h-[55px] border-2 ${
                    errors.password ? "border-red-500" : "border-(--inputBorder"
                  } rounded-[10px] w-full px-5 text-blackText`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <img
                  src={Eye}
                  alt="Show Password"
                  className="absolute my-auto top-0 bottom-0 right-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
              <div className="text-(--secondary) text-end cursor-pointer text-sm">
                Forgot Password?
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-(--primary) w-full rounded-xl h-[48px] cursor-pointer flex justify-center items-center my-3"
          >
            Login
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
