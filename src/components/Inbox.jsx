import React from "react";

export default function Inbox() {
  return (
    <div>
      <div className="max-w-[70rem] px-4 py-2 bg-[#202C32]">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <h2 className="text-white text-sm">Tanvir Mahtab</h2>
              <p className="text-xs text-gray-400">Business Account</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-5">
            <span data-icon="search-alt" class="">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className="text-white"
                version="1.1"
                x="0px"
                y="0px"
                enable-background="new 0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
                ></path>
              </svg>
            </span>

            <span data-icon="menu" class="kiiy14zj">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className="text-white"
                version="1.1"
                x="0px"
                y="0px"
                enable-background="new 0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
