import Image from 'next/image'
import united from '../../src/asset/image/united.png'
import save from '../../src/asset/image/save.png'
import like from '../../src/asset/image/like.png'
import clock from '../../src/asset/image/clock.png'
import { axiosInstance } from '../../helper/axiosIntance'
import { useState, useEffect } from 'react'
import React  from 'react';
import Moment from 'react-moment';
import { useRouter } from 'next/router'


const News = () => {
  let token
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        token = localStorage.getItem('token')
      }

   const router = useRouter()

      
     
    useEffect(()=>{
        axiosInstance.get('app/lastnews', {
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
        .then((res)=>{
            console.log(res)
            setData(res.data.data)
        }).catch((err)=>{
            console.log(err.response)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const [data, setData] = useState([])
  return (
    <>
    {data.map(item => <div key={item.id} className='mt-12'>
        <div className='flex items-center w-full'>
          <Image src={united} alt="united" />
          <div className='w-64 ml-12'>
            <h1 className='font-light mb-4'>{item.head}</h1>
            <p className='mb-2 w-[245.25px] h-[48px] overflow-hidden'>{item.subhead}</p>
            <p className='text-gray-400 mb-3'>Writted by {item.author}</p>
            <div className='flex items-center '>
              <div className='flex justify-center items-center mr-4'>
                <Image src={like} alt="like" layout='fixed' />
                <p className='ml-2 text-blue-600'>{item.like}</p>
              </div>
              <div className='mr-4'>
                <div className='flex items-center'>
                  <div className='border-[2px] border-blue-700 rounded-full w-[16px] h-[16px] flex justify-center items-center p-1'>
                    <Image src={clock} alt="clock" />
                  </div>
                  <p className='ml-1'><Moment fromNow>{item.date}</Moment></p>
                </div>
              </div>
              <div className='items-center mt-1'>
                <Image src={save} alt="save" />
              </div>
            </div>
          </div>
          <div className='w-1/2 flex justify-end'>
            <button onClick={()=>{router.push(`/article/${item.author}/${item.id}`)}} className="rounded-lg text-white py-3 px-11 bg-blue-700">Read now</button>
          </div>
        </div>
      <hr className='border-1 border-gray-300 mt-5' />
      </div>)}
      
    </>
  )
}

export default News