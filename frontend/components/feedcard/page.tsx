import React from 'react'
import Image from "next/image";
import { LiaCommentsSolid } from "react-icons/lia";
import { LiaRetweetSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const Feedcard:React.FC=()=>{
  return (
    <div className=" grid grid-cols-12">
    <div className=" border-b-2 pr-1 p-2 col-span-1">
              <Image className="rounded-lg mt-3 ml-1  " src={"https://pbs.twimg.com/profile_images/1712361350142541824/kb8_UNI6_400x400.jpg"} height={40} width={40} alt="profile image"/>
            </div>
            <div className="  col-span-11">
            <div className=" font-bold p-2 mt-2">Harsha Bhogle</div>
            <p>This is going to be a test for RCBTweets get 230+. They have set the pace most times. Will be good to see how they react to the boot being on the other foot
            </p>
            <div className='p-2 border-b-2 flex justify-evenly'>
            <LiaCommentsSolid />
            <LiaRetweetSolid />
            <FaRegHeart />
            <IoMdShare />
            </div>
            </div>
    </div>
  )
}

export default Feedcard