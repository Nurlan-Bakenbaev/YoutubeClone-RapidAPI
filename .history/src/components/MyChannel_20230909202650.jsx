import React from "react";
import ChannelCard from "./ChannelCard";
const MyChannel = () => {
  return (
    <div className="text-white">
      <div  className="w-full h-[180px] border  flex items-center justify-center overflow-hidden"> <img className="absolute" src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
      <ChannelCard mt={-13} />
    </div>
  );
};

export default MyChannel;
