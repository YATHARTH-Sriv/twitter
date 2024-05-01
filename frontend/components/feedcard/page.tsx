import React from 'react'
import Image from "next/image";
import { LiaCommentsSolid } from "react-icons/lia";
import { LiaRetweetSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const Feedcard:React.FC=()=>{
  return (
    
    <div id="feed" className=" border-t-2   border-r-2 border-l-2 col-span-6 text-white">
          <div className=" flex mt-3 ml-1  p-2 m-3">
             <div className=" col-span-1">
              <Image src={"https://pbs.twimg.com/profile_images/1395709971229196296/FFQTxazi_400x400.jpg"} height={50} width={50} alt="profile image" className=" rounded-xl"/>
             </div>
             <div className=" ml-1 col-span-11">AFC AJAX FC 
             <div>Pochettino after the 3-2 goal in minute 94 has been DISALLOWED</div>
             <Image src={"https://pbs.twimg.com/media/GMMz_zlWEAEvmrl?format=jpg&name=large"} className=" mt-2 rounded-xl" height={600} width={600} alt="image"/>
             <div className='flex'>
             <LiaRetweetSolid />
             <LiaCommentsSolid />
             <FaRegHeart />
             <IoMdShare />
             </div>
             </div>

          </div>
          
        </div>
  )
}

export default Feedcard

