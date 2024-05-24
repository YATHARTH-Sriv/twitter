'use client';
import React, { useMemo, useState }  from "react";
import { useCallback } from "react";
import {  FaBell, FaEnvelope, FaHashtag, FaRegImage, FaTwitter } from "react-icons/fa6";
import toast from "react-hot-toast";
import { graphqlclient } from "../../client/api";
import axios from 'axios'
import { useCreateTweet, useGetAllTweets } from "../../hooks/tweet";
import Feedcard from "../../components/feedcard/page";
import { Tweet } from "../../gql/graphql";
import { useCurrentUser } from "../../hooks/user";
import Image from "next/image";
import { getsignedurlfortweet } from "../../graphql/query/tweet";
import Layouttwitter from "../../components/layouttwitter";
import { GoHomeFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { useQueryClient } from "@tanstack/react-query";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { verifygoogletokenQuery } from "../../graphql/query/user";
import Link from "next/link";


interface navigationicons{
  title:string,
  icon:React.ReactNode,
  link: string
}


interface TwitterLayoutProps{
  children: React.ReactNode
}


export default function Home() {
  const {mutate}=useCreateTweet()
  const [content, setcontent] = useState("")
  const [imageURL,setImageURL]=useState("")
  const {tweets=[]}=useGetAllTweets()
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
  
  const handleInputChnageFile= useCallback((input: HTMLInputElement)=>{
    return async (event:Event)=>{
      event.preventDefault()
      const file: File | null | undefined = input.files?.item(0)
      console.log(file)
      if(!file) return
      const {getPresignedURL}= await graphqlclient.request(getsignedurlfortweet,{
        imageName:file.name,
        imageType:file.type
      })
      console.log(getPresignedURL)
      console.log("trying to get signed url")
      if(getPresignedURL){
        toast.loading('Uploading',{ id:"2" })
        await axios.put(getPresignedURL,file, {
          headers:{
            'content-type': file.type
         }
        })
        toast.success('Upload completed',{ id:"2" })
        const url=new URL(getPresignedURL)
        const myFilepath=`${url.origin}${url.pathname}`
        setImageURL(myFilepath)
      }
    }
  },[])
  
  const handleCreateTweet=useCallback(()=>{
    mutate({
      content,
      imageURL
    })
    setcontent("")
  },[content,mutate,imageURL])
  
  const handleimage=useCallback(
    () => {
      const input=document.createElement('input')
      input.setAttribute("type","file")
      input.setAttribute("accept","image/*")
      const handlerfn= handleInputChnageFile(input)
      input.addEventListener("change",handlerfn)
      input.click()
      setImageURL("")
    },
    [],
  )
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
        <div className=" border-b-2 flex mt-3 ml-2  p-2 m-3">
             <div className=" col-span-1">
              {user && user.profileimageURL &&<Image
              src={user?.profileimageURL}
              alt=" profile image"
              height={50}
              width={50}
              />}
             </div>
             <div className=" w-full col-span-11">
              <textarea
               value={content}
               onChange={e=>setcontent(e.target.value)}
               className=" p-2  w-full m-2 ml-2 mr-1 hover:border-slate-700 bg-transparent"
               placeholder="what's happening!"/>
               {imageURL &&  <Image src={imageURL} alt="tweet-image" height={400} width={400}/> }
               <div className=" justify-between flex text-xl">
               <FaRegImage onClick={handleimage} className=" mt-2 ml-2 " />
              <button onClick={handleCreateTweet} className="  flex p-1 justify-center m-2 hover:bg-blue-800 rounded-lg h-fit  bg-blue-600">Tweet</button>
              </div>
             </div>
          
          </div>
          {
            tweets?.map((tweet)=><Feedcard key={tweet?.id} data={ tweet as Tweet } />)
          }
          
        
      </div>
      <div id="sidebar" className=" col-span-3 ">
            {!user && <div className=" hover:cursor-pointer text-xl  mt-3 rounded-lg p-2 w-fit flex text-white">
                  <button className=" text-white bg-slate-500"><GoogleLogin onSuccess={handlegoogletoken}/></button>
                </div>}
      </div>
      
    </div>
    
  </div>
        
  )}