import React, { useEffect, useRef, useState } from "react";

const AutoScrollNoticeCard = () => {
  const notices = [
    "16/01/2024 : Notification Health Department, Govt. Of Bihar",
  ];

  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // const container = containerRef.current;
    // let scrollInterval;

    // const startScrolling = () => {
    //   scrollInterval = setInterval(() => {
    //     container.scrollTop += 1;
    //     if (
    //       container.scrollTop >=
    //       container.scrollHeight - container.clientHeight
    //     ) {
    //       container.scrollTop = 0;
    //     }
    //   }, 30);
    // };

    // if (!isHovered) {
    //   startScrolling();
    // }

    // return () => clearInterval(scrollInterval);
  }, [isHovered]);

  return (
    <div
      className="bg-zinc-100 text-black p-2 ml-2 mt-5 rounded-lg shadow-md shadow-gray-500 md:w-72   lg:w-full mx-auto  space-y-5 overflow-hidden lg:h-[30rem]  h-96"
      ref={containerRef}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      style={{ overflowY: "auto" }}
    >
      <div className="text-center mt-4  mb-1  font-bold text-2xl text-red-600 underline">
        Notifications
      </div>
      <ul className="space-y-2 animate-[scroll-up_10s_linear_infinite]">
        {notices.map((notice, index) => (
          <li
            key={index}
            className="bg-white  rounded-md py-2.5 hover:scale-[1.02]  px-2 transition-all ease-in-out duration-100 cursor-pointer shadow-md"
          >
            {notice} 
            <a href="http://www.rssparamedicalcollege.in/Notification.pdf" target="_blank">
              <span className="underline text-blue-600 bg-white ml-2">Read more...</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoScrollNoticeCard;
