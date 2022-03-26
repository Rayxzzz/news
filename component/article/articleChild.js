import united from '../../src/asset/image/united.png'
import save from '../../src/asset/image/save.png'
import like from '../../src/asset/image/like.png'
import clock from '../../src/asset/image/clock.png'
import Image from 'next/image'
import { axiosInstance } from '../../helper/axiosIntance'
import { useState, useEffect } from 'react'
import Moment from 'react-moment';


const Article = () => {
    let token
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        token = localStorage.getItem('token')
      }
    
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
    console.log(data);
    return (
        <>
        {data.map(item => <div onClick={()=>{router.push(`/article/${item.author}/${item.id}`)}} key={item.id} className='mr-8 rounded-[16px] flex flex-col items-center w-64 h-72 shadow-[0_10px_32px_rgba(0,0,0,0.2)]'>
                <div className='h-1/2 overflow-hidden'>
                    <Image src={united} alt="photo" layout='fixed' />
                </div>
                <h1 className='font-light pt-3'>{item.head}</h1>
                <p className='mt-4 mb-2 overflow-hidden w-[250px] h-[48px] text-center'>{item.subhead}</p>
                <div className='flex items-center '>
                    <div className='flex justify-center items-center mr-4'>
                        <Image src={like} alt="like" layout='fixed' />
                        <p className='ml-2 text-blue-600'>{item.like}</p>
                    </div>
                    <div className='mr-4'>
                        <div className='flex items-center'>
                            <div className='border-[2px] border-blue-700 rounded-full w-[16px] h-[16px] flex justify-center items-center'>
                                <Image src={clock} alt="clock" />
                            </div>
                            <p className='ml-1'><Moment fromNow>{item.date}</Moment></p>
                        </div>
                    </div>
                    <div className='items-center mt-1'>
                        <Image src={save} alt="save" />
                    </div>
                </div>
            </div>)}
            
        </>
    )
}

export default Article