
"use client"

import React, { useCallback, useMemo } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaBell, FaEnvelope, FaHashtag, FaTwitter } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import Image from "next/image";
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import toast from 'react-hot-toast'
import { useQueryClient } from '@tanstack/react-query'
import { useCurrentUser } from '../hooks/user'
import { graphqlclient } from '../client/api'
import { verifygoogletokenQuery } from '../graphql/query/user'
import Link from 'next/link'
import { UrlObject } from 'url'



interface navigationicons{
    title:string,
    icon:React.ReactNode,
    link: string
  }


interface TwitterLayoutProps{
    children: React.ReactNode
}

const Layouttwitter:React.FC<TwitterLayoutProps>=(props)=>{
  const {user}=useCurrentUser()
  const navigation: navigationicons[] = useMemo(() => [
    {
      title: "Home",
      icon: <GoHomeFill />,
      link: "/"
    },
    {
      title: "Explore",
      icon: <FaHashtag />,
      link: "/"
    },
    {
      title: "Notifcations",
      icon: <FaBell />,
      link: "/"
    },
    {
      title: "Messages",
      icon: <FaEnvelope />,
      link: "/"
    },
    {
      title: "Profile",
      icon: <CgProfile />,
      link: `/${user?.id}`
    }
  ], [user?.id]);
    
    const queryClient= useQueryClient()
    const handlegoogletoken = useCallback(async (cred: CredentialResponse) => {
        const googletoken = cred.credential;
        if (!googletoken) return toast.error("user not logged in");
        const { verifygoogletoken } = await graphqlclient.request(verifygoogletokenQuery, { token: googletoken });
        console.log(verifygoogletoken);
        if (verifygoogletoken) {
          window.localStorage.setItem("token", verifygoogletoken)
          await queryClient.invalidateQueries({ queryKey: ['current-user'] })
        }
      }, [queryClient]);
  return (
    
    <div id="main" >
       
      <div className=" overflow  bg-black h-screen w-screen grid grid-cols-12">

        <div id="leftcolumn" className="  h-screen col-span-3 text-white  ">
        <FaTwitter className=" hover:bg-slate-700 w-fit rounded-lg p-3 text-6xl m-4 ml-20 " />
        <ul className="  flex-row mt-1 text-xl pl-3 ml-4">
          {navigation.map(items=>
            (<li key={items.title} className="    flex gap-4 hover:bg-gray-800 rounded-md px-3 py-3 w-fit h-fit ">
              <Link href={items.link} className=" flex gap-4 ">
              <p className="text-3xl">{items.icon}</p><p className=" text-2xl">{items.title}</p>
              </Link>
            </li>)
          )}
        </ul>
        <button className="  flex p-4 justify-center mb-2 ml-8 hover:bg-blue-800 rounded-lg h-fit w-80 text-2xl bg-blue-600">Tweet</button>
        <div className=" p-4 m-2 mt-2 mr-3">
        {user && <div className="flex gap-2  rounded-full  w-fit h-fit">
          {user.profileimageURL && <Image
          src={user.profileimageURL}
          height={50}
          width={50}
          alt="profile image"
          className=" rounded-full"/>}
          <div className=" grid-flow-row gap-5 ">{user.firstname}</div></div>}
        </div>
        </div> 

        <div id="feed" className=" overflow-y-auto  border-t-2   border-r-2 border-l-2 col-span-6 text-white">
        {props.children}
        
          
        </div>
        <div id="sidebar" className=" col-span-3 ">
              {!user && <div className=" hover:cursor-pointer text-xl  mt-3 rounded-lg p-2 w-fit flex text-white">
                    <button className=" text-white bg-slate-500"><GoogleLogin onSuccess={handlegoogletoken}/></button>
                  </div>}
        </div>
        
      </div>
      
    </div>
  )
}

export default Layouttwitter