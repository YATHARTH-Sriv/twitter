import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import React from "react";
import Feedcard from "../../components/feedcard/page";

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
  return (
    <div >
      <div className=" overflow  bg-black h-screen w-screen grid grid-cols-12">
        <div className=" overflow h-screen col-span-3 text-white  ">
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
        <div className="overflow w-full h-full border-t-2   border-r-2 border-l-2 col-span-6 text-white">
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          <Feedcard/>
          
          
        </div>
        <div className=" col-span-3 "></div>
      </div>
      
    </div>
  );
}
