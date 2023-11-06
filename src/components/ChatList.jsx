import React from "react";
import TopNavOptions from "../ui/TopNavOptions";

export default function ChatList() {
  return (
    <div className="border-r border-slate-600 h-full">
      <div className="min-w-[36rem] px-3 py-2 bg-[#202C32]">
        <div className="flex flex-row items-center justify-between">
          <img
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <TopNavOptions/>
        </div>
      </div>
    </div>
  );
}
