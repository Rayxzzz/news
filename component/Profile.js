import Image from "next/image"
import { useEffect, useState } from 'react'
import notif from "../src/asset/image/Notification.png"
import picture from "../src/asset/image/placeholder@2x.png"
import search from "../src/asset/image/search.png"
import times from "../src/asset/image/times.png"
import { useRouter } from 'next/router';



const Profile = () => {
  const route = useRouter()
  const [token, setToken] = useState('')
  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setToken(localStorage.getItem('token'))
  },[])




  return (
    <>
    {token ? 
    <div className="flex justify-between">
        <div>
        <div className="absolute mt-3 ml-3"><Image src={search} alt="seacrh" layout="fixed"/></div>
        <div className="absolute mt-2 ml-48"><Image src={times} alt="times" layout="fixed"/></div>
        <input type="email" className="rounded-md border-2 mr-5 border-blue-400 w-56 py-2 px-12 text-sm" placeholder="Search"/>
        </div>
        <div className="mr-5">
        <Image src={notif} alt="notif" layout="fixed"/>
        </div>
        <div className="w-10 h-10 border-2 border-blue-700 rounded-full flex justify-center items-center mr-20"><Image src={picture} alt="picture"/></div>
    </div> 
    :
    <div className="mr-44">
        <button onClick={()=>route.push('/register')} className="mr-8">Sign up</button>
        <button onClick={()=>route.push('/login')} className="rounded text-white py-2 px-11 bg-blue-700">Login</button>
    </div>
    }
    
    </>
  )
}

export default Profile