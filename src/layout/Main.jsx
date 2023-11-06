import React from "react";
import ChatList from "../components/ChatList";
import Inbox from "../components/Inbox";

export default function Main() {
  return (
    <div className="bg-[#0C1317] w-full h-[100vh]">
      <div className="grid place-items-center gap-5">
        <div className="grid grid-cols-12 h-[90vh] mt-8">
          <div className="col-span-4 w-full h-full">
            <ChatList />
          </div>
          <div className="col-span-8 w-full">
            <Inbox />
          </div>
        </div>
      </div>
    </div>
  );
}
