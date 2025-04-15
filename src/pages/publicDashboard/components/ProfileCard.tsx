import { spawn } from "child_process";
import React from "react";
import Starsicon from "./assets/Starsicon.svg";
import Googleicon from "./assets/GoogleLogo.svg";

interface ProfileCardProps {
  date?: string;
  name?: string;
  description?: string;
  image?: any;
  stars: number;
  isShadow?: boolean;
  w?: string;
  h?: string;
}
function ProfileCard({
  date,
  name,
  description,
  image,
  stars,
  isShadow,
  w,
  h
}: ProfileCardProps) {
  return (
    <>
      <div
        className={`backdrop-blur-[42px] overflow-hidden  flex flex-col justify-center items-center gap-[20px] rounded-[16px] relative border border-gray-300 ${
          w ? w : " w-[536px]"
        }
         ${
          h ? h : "h-[343px]"
        }
        `}
      >
        <div className="-skew-y-[20deg] h-[90px] w-[100px] bg-gradient-to-b form-[#33333399] to-[#2D3F5033] rounded-lg p-4 absolute -top-2  left-0 -z-10"></div>
        <span className=" absolute top-4  text-[20px]  left-8">{date}</span>
        <div className="flex pt-[55px]  ">
          <div className="w-full flex justify-center items-center flex-col gap-6">
            <div className="w-full flex justify-center items-center flex-col gap-3">
              <span className="text-[24px]">{name}</span>
              {image ? (
                <img
                  src={image}
                  alt=""
                  className="w-[80px] h-[80px] rounded-full"
                />
              ) : (
                <div className="w-[80px] h-[80px] flex rounded-full bg-gray-300 text-5xl justify-center items-center text-center font-bold">
                  <span>{name?.slice(0, 1)}</span>
                </div>
              )}
              <div className="w-[460px] text-[16px]">{description}</div>
            </div>
            <div className="flex justify-between items-center w-full ">
              <div className="flex gap-2.5">
                {Array(Math.floor(stars))
                  .fill(0)
                  .map((curr, i) => (
                    <img src={Starsicon} alt="" />
                  ))}
              </div>
              <div className="text-[16px] flex gap-1">
                Posted on
                <img src={Googleicon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;

// // <ProfileCard stars={4} date="April 1, 2023" name="Steve Herron" description="I am super visual and having a clear dashboard with all the team metrics visible, helps me see where I stand on my progress. I especially like being"/>
