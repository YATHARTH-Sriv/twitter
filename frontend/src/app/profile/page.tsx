"use client"

import React from 'react'
import Layouttwitter from '../../../components/layouttwitter'
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from 'next/image';
import Feedcard from '../../../components/feedcard/page';
import { useGetAllTweets } from '../../../hooks/tweet';
import { Tweet } from '../../../gql/graphql';
import { useCurrentUser } from '../../../hooks/user';

function Profile() {
    const {user}=useCurrentUser()
    return (
        <div>
          <Layouttwitter>
            <div className='border flex gap-4 p-2 pt-2'>
            <FaArrowLeftLong className=' text-3xl rounded-full bg-slate-800  p-2' />
            <div className=' grid-flow-col '>
            <p className=' text-2xl'>{user?.firstname}</p>
            <p className=' text-sm'>{user?.tweets?.length}</p>
            </div>
            </div>
            <div className='border grid grid-cols-12 '>
                <div className=' col-span-4'>
                {user&& user.profileimageURL &&<Image src={user?.profileimageURL} height={200} width={200} alt="profile-image" className='ml-2 mt-2 mb-2 rounded-full'/>}
                </div>
                <div className=" col-span-8">
                <p className='mt-2 text-3xl'>{user?.firstname}{user?.lastname}</p>
                <button className=' mt-2 border text-xl text-white bg-blue-900 w-fit h-fit'>Follow</button>
                </div>   
            </div>
            <div>
            {

            user &&  user.tweets && user?.tweets.map((tweet)=><Feedcard key={tweet?.id} data={ tweet as Tweet } />)
            }
            </div>
          </Layouttwitter>
        </div>
    )
}

export default Profile