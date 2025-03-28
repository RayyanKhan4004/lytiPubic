import React from "react";

const ScopeChallangeTypeDetail = () => {
  return (
    <div className="flex flex-col gap-5 w-[49%]">
      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-(--primary)">Scope</h2>
        <p className="text-(--greyText) text-sm leading-[24px]">
          Challenges can be run at different levels or scope . An organization
          is a collection of teams. A team is a collection of agents. A group is
          a collection of team agents.
        </p>
      </div>

      <div className="shadow-(--cardShadow) rounded-2xl bg-white w-full p-4 flex flex-col gap-5">
        <h2 className="text-lg font-semibold text-(--primary)">
          Challenge Type
        </h2>

        <div className=" w-full flex flex-col gap-2">
          <h2 className="text-lg font-medium text-(--primary)">Race</h2>
          <p className="text-(--greyText) text-sm leading-[24px]">
            This challenge type pushes agents to be the top performer in the
            selected category. You select a point value for 1st, 2nd, and 3rd,
            and it's a race to see who can produce the most.
          </p>
        </div>
        <div className=" w-full flex flex-col gap-2">
          <h2 className="text-lg font-medium text-(--primary)">
            Everybody Wins
          </h2>
          <p className="text-(--greyText) text-sm leading-[24px]">
            Everybody Wins. This challenge type gives everybody a chance to win.
            You set a threshold and any agent who exceeds that threshold is
            awarded points (For example, everyone who does at least 100 contacts
            is awarded points). You set the point value you want to be awarded.
            TIP: Set up recurring threshold challenges for metrics you want met
            every single month.
          </p>
        </div>
        <div className=" w-full flex flex-col gap-2">
          <h2 className="text-lg font-medium text-(--primary)">Per-Unit</h2>
          <p className="text-(--greyText) text-sm leading-[24px]">
            This challenge type awards agents on a per-unit basis. You can
            define the point value of each unit, and points are awarded
            accordingly (For example, every contact is worth 100 points or every
            appointment is worth 1000 points).
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScopeChallangeTypeDetail;
