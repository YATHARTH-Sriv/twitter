'use client';
import Image from "next/image";
import { LiaCommentsSolid } from "react-icons/lia";
import { LiaRetweetSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { FaRegImage } from "react-icons/fa6";

import React  from "react";
import { signIn } from "next-auth/react";
import { useCallback } from "react";

interface navigationicons{
  title:string,
  icon:React.ReactNode

}

const navigation:navigationicons[]=[
  {
    title:"Home",
    icon:<GoHomeFill />
  },{
    title:"Explore",
    icon:<FaHashtag />
  },{
    title:"Notifcations",
    icon:<FaBell />
  },{
    title:"Messages",
    icon:<FaEnvelope />
  },{
    title:"Profile",
    icon:<CgProfile />
  }
]

export default function Home() {
  const handleimage=useCallback(
    () => {
      const input=document.createElement('input')
      input.setAttribute("type","file")
      input.setAttribute("accept","image/*")
      input.click()
    },
    [],
  )
  
  const googleLogin = async () => {
    await signIn("google", {
      callbackUrl: '/',
      
      redirect: true
    });
  };
  return (
  
    <div id="main" >
       
      <div className=" overflow  bg-black h-screen w-screen grid grid-cols-12">

        <div id="leftcolumn" className="  h-screen col-span-3 text-white  ">
        <FaTwitter className=" hover:bg-slate-700 w-fit rounded-lg p-3 text-6xl m-4 ml-20 " />
        <ul className="">
          {navigation.map(items=>
            (<li key={items.title} className=" flex p-3 mb-2 hover:bg-slate-500 rounded-md h-fit w-fit ml-20  gap-2 text-2xl ">
              <p className="text-3xl">{items.icon}</p><p className=" mr-5">{items.title}</p>
            </li>)
          )}
        </ul>
        <button className="  flex p-4 justify-center mb-2 ml-8 hover:bg-blue-800 rounded-lg h-fit w-80 text-2xl bg-blue-600">Tweet</button>
        </div>
        <div id="feed" className=" overflow-y-auto  border-t-2   border-r-2 border-l-2 col-span-6 text-white">
        <div className=" border-b-2 flex mt-3 ml-2  p-2 m-3">
             <div className=" col-span-1">
              <Image src={"https://pbs.twimg.com/profile_images/1395709971229196296/FFQTxazi_400x400.jpg"} height={50} width={50} alt="profile image" className=" rounded-xl"/>
             </div>
             <div className=" w-full col-span-11">
              <textarea
               rows={4}
               className=" p-2  w-full m-2 ml-2 mr-1 hover:border-slate-700 bg-transparent"
               placeholder="what's happening!"/>
               <div className=" justify-between flex text-xl">
               <FaRegImage onClick={handleimage} className=" mt-2 ml-2 " />
              <button className="  flex p-1 justify-center m-2 hover:bg-blue-800 rounded-lg h-fit  bg-blue-600">Tweet</button>
              </div>
             </div>
          
          </div>
          <div className=" border-b-2 flex mt-3 ml-2  p-2 m-3">
             <div className=" col-span-1">
              <Image src={"https://pbs.twimg.com/profile_images/1395709971229196296/FFQTxazi_400x400.jpg"} height={50} width={50} alt="profile image" className=" rounded-xl"/>
             </div>
             <div className=" ml-1 col-span-11">AFC AJAX FC 
             <div>Pochettino after the 3-2 goal in minute 94 has been DISALLOWED</div>
             <Image src={"https://pbs.twimg.com/media/GMMz_zlWEAEvmrl?format=jpg&name=large"} className=" mt-2 rounded-xl" height={600} width={600} alt="image"/>
             <div className='flex justify-evenly mt-2 mb-2 text-xl'>
             <LiaCommentsSolid  className=" hover:cursor-pointer hover:text-blue-500 " />
             <LiaRetweetSolid className=" hover:cursor-pointer hover:text-green-500 " />
             <FaRegHeart  className=" hover:cursor-pointer hover:text-red-500 " />
             <IoMdShare  className=" hover:cursor-pointer hover:text-blue-500 " />
             </div>
             </div>
          
          </div>
          <div className=" border-b-2 flex mt-3 ml-2  p-2 m-3">
             <div className=" col-span-1">
              <Image src={"https://pbs.twimg.com/profile_images/1395709971229196296/FFQTxazi_400x400.jpg"} height={50} width={50} alt="profile image" className=" rounded-xl"/>
             </div>
             <div className=" ml-1 col-span-11">AFC AJAX FC 
             <div>Pochettino after the 3-2 goal in minute 94 has been DISALLOWED</div>
             <Image src={"https://pbs.twimg.com/media/GMMz_zlWEAEvmrl?format=jpg&name=large"} className=" mt-2 rounded-xl" height={600} width={600} alt="image"/>
             <div className='flex justify-evenly mt-2 mb-2 text-xl '>
             <LiaCommentsSolid  className=" hover:cursor-pointer hover:text-blue-500 " />
             <LiaRetweetSolid className=" hover:cursor-pointer hover:text-green-500 " />
             <FaRegHeart  className=" hover:cursor-pointer hover:text-red-500 " />
             <IoMdShare  className=" hover:cursor-pointer hover:text-blue-500 " />
             </div>
             </div>
          
          </div>
          <div className=" border-b-2 flex mt-3 ml-2  p-2 m-3">
             <div className=" col-span-1">
              <Image src={"https://pbs.twimg.com/profile_images/1395709971229196296/FFQTxazi_400x400.jpg"} height={50} width={50} alt="profile image" className=" rounded-xl"/>
             </div>
             <div className=" ml-1 col-span-11">AFC AJAX FC 
             <div>Pochettino after the 3-2 goal in minute 94 has been DISALLOWED</div>
             <Image src={"https://pbs.twimg.com/media/GMMz_zlWEAEvmrl?format=jpg&name=large"} className=" mt-2 rounded-xl" height={600} width={600} alt="image"/>
             <div className='flex justify-evenly mt-2 mb-2 text-xl'>
             <LiaCommentsSolid  className=" hover:cursor-pointer hover:text-blue-500 " />
             <LiaRetweetSolid className=" hover:cursor-pointer hover:text-green-500 " />
             <FaRegHeart  className=" hover:cursor-pointer hover:text-red-500 " />
             <IoMdShare  className=" hover:cursor-pointer hover:text-blue-500 " />
             </div>
             </div>
          
          </div>
        </div>
        <div id="sidebar" className=" col-span-3 ">
          <div className=" hover:cursor-pointer text-xl ml-3  bg-white mt-3 rounded-lg p-2 w-fit flex text-black">
          <button
                type="button"
                onClick={googleLogin}
                
              ><FcGoogle className=" hover:cursor-pointer text-3xl " /></button>
              Sign with Google
              
          </div>
        </div>

      </div>
      
    </div>
  );
}
