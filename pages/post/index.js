import React from 'react'
import Image from 'next/image'
import Footer from '../../component/article/Footer'
import Header from '../../component/Header'
import back from '../../src/asset/image/back.png'
import PostForm from '../../component/article/PostForm'
import { useState } from 'react'
import { route } from 'next/dist/server/router'
import { useRouter } from 'next/router'
import { io } from 'socket.io-client'
import { useEffect } from 'react'
import socket from '../../helper/socket'

const Post = () => {
    const router = useRouter()
    const [token, setToken] = useState('')
    
    useEffect(()=>{
        setToken(localStorage.getItem('token'))
        socket.emit('userOnline', (0))
        socket.on('accept', (data)=>{
            console.log(data)
            setStatus('author')
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[socket])
    const sendAuthor = () => {
        socket.emit('author', ('user request to be author'))
      }

    const [status, setStatus] = useState('author')
    const [login, setLogin] = useState('author')
    
    

    return (
        <>
            <Header />
            {token ? <><div className='flex justify-between mt-16 w-screen px-20'>
                <div className='flex items-center'>
                    <Image src={back} alt="back" />
                    <h1 className='ml-6'>Back</h1>
                </div>
                <h1 className='font-bold text-xl'>Write Article</h1>
                <h1 className='font-bold text-xl'>Save as draft</h1>
            </div> 
            <PostForm/>
            </>
            : 
            <div className='w-full h-96 flex justify-center items-center flex-col'>
                <h1 className='text-center text-3xl pl-3'>only author can write article</h1>
                <button onClick={sendAuthor} className='w-[800px] ml-6 shadow-xl py-3 mt-9 bg-blue-700 rounded-xl text-white font-semibold'>Request be author</button>

            </div>

            }
            
            <Footer />
        </>
    )
}

export default Post