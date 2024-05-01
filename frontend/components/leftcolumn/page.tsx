import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const leftcolumn:React.FC=()=>{

    
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

return(
<div id="leftcolumn" className=" overflow h-screen col-span-3 text-white  ">
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
  )
}

export default leftcolumn

// import { FaTwitter } from "react-icons/fa";
// import { GoHomeFill } from "react-icons/go";
// import { FaHashtag } from "react-icons/fa";
// import { FaBell } from "react-icons/fa6";
// import { FaEnvelope } from "react-icons/fa6";
// import { CgProfile } from "react-icons/cg";



// interface navigationicons{
//     title:string,
//     icon:React.ReactNode
  
//   }


// const navigation:navigationicons[]=[
//     {
//       title:"Home",
//       icon:<GoHomeFill />
//     },{
//       title:"Explore",
//       icon:<FaHashtag />
//     },{
//       title:"Notifcations",
//       icon:<FaBell />
//     },{
//       title:"Messages",
//       icon:<FaEnvelope />
//     },{
//       title:"Profile",
//       icon:<CgProfile />
//     }
//   ]


// <div id="leftcolumn" className=" overflow h-screen col-span-3 text-white  ">
//         <FaTwitter className=" hover:bg-slate-700 w-fit rounded-lg p-3 text-6xl m-4 ml-20 " />
//         <ul className="">
//           {navigation.map(items=>
//             (<li key={items.title} className=" flex p-3 mb-2 hover:bg-slate-500 rounded-md h-fit w-fit ml-20  gap-2 text-2xl ">
//               <p className="text-3xl">{items.icon}</p><p className=" mr-5">{items.title}</p>
//             </li>)
//           )}
//         </ul>
//         <button className="  flex p-4 justify-center mb-2 ml-8 hover:bg-blue-800 rounded-lg h-fit w-80 text-2xl bg-blue-600">Tweet</button>
//         </div>