import { useState } from "react";
import LytiLogo from "../../assets/icons/LytiLogo.svg";
import Eye from "../../assets/icons/Eye.svg";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import PoweredByLyti from "../../assets/images/PoweredByLyti.svg";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputs/InputFields";
import { useLoginMutation } from "../../lib/rtkQuery/authApi";
import { error } from "console";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const naviagte = useNavigate();
  const [login, { isLoading, isError }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);

      const res = await login(formData).unwrap();
      console.log(res, "===res===");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
    // naviagte("/dashboard/snapShot");
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
