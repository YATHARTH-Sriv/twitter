import React from 'react'
import Image from "next/image";
import { LiaCommentsSolid } from "react-icons/lia";
import { LiaRetweetSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { Tweet } from '../../gql/graphql';

interface FeedcardPayload{
  data: Tweet
}

const Feedcard:React.FC<FeedcardPayload>=(props)=>{
  const {data}=props
  return (
        <div className=" border-b-2 flex mt-3 ml-2  p-2 m-3">
             <div className=" col-span-1">
          {data.author?.profileimageURL && <Image src={data.author.profileimageURL}
            height={50}
            width={50}
            alt="profile image"
            className=" rounded-xl"/>}
             </div>
             <div className=" ml-1 col-span-11">{data.author?.firstname} {data.author?.lastname}
             <div>{data.content}</div>
             {data.imageURL && <Image src={data.imageURL}
              className=" mt-2 rounded-xl"
               height={600}
                width={600}
                 alt="image"/>}
             <div className='flex justify-evenly mt-2 mb-2 text-xl'>
             <LiaCommentsSolid  className=" hover:cursor-pointer hover:text-blue-500 " />
             <LiaRetweetSolid className=" hover:cursor-pointer hover:text-green-500 " />
             <FaRegHeart  className=" hover:cursor-pointer hover:text-red-500 " />
             <IoMdShare  className=" hover:cursor-pointer hover:text-blue-500 " />
             </div>
             </div> 
          
          </div>
  )
}

export default Feedcard

