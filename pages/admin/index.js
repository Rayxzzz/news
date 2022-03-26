import React from 'react'
import { useEffect, useState } from 'react'
import Footer from '../../component/article/Footer'
import Header from '../../component/Header'
import { axiosInstance } from '../../helper/axiosIntance'
import socket from '../../helper/socket'

const Admin = () => {
  let token
  let statusa
  const [message, setMessage] = useState('')
  const [publish, setPublish] = useState('')
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    statusa = localStorage.getItem('status')
    token = localStorage.getItem('token')
  }
  useEffect(() => {
    socket.emit('userOnline', (0))
    socket.on('admin', (data) => {
      setMessage(data)
    })
    socket.on('post', (data) => {
      setPublish(data)
    })
  }, [socket])

  const acceptRequest = () => {
    socket.emit('accept', ('author'))
    setMessage('')
  }

  const acceptPost = () => {
    axiosInstance.put(`/app/post/${publish.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res)
        setPublish('')

      }).catch((err) => console.log(err.response))
  }


  if (statusa === 'member' || statusa === 'author') {
    router.push('/')
  }
  console.log(publish)

  return (
    <>
      <Header />
      <div className='h-screen '>
        <div className='ml-20 mt-12'>
          {publish ?
            <div className='flex items-center justify-between w-[60rem]'>
              <div className='ml-12'>
                <p className='text-2xl mb-3'>user want to publish article <i>{publish.head}</i></p>
              </div>
              <div className='flex justify-end flex-col'>
                <button onClick={acceptPost} className="rounded-lg text-white py-3 px-11 w-40 bg-blue-700">Accept</button>
                <button className="rounded-lg text-white py-3 px-11 w-40 mt-5 bg-blue-700">Decline</button>
              </div>
            </div>
            :
            null
          }
          {message ?
            <div className='flex items-center justify-between w-[60rem] mt-10'>
              <div className='ml-12'>
                <p className='text-2xl mb-3'>{message}</p>
              </div>
              <div className='flex justify-end flex-col'>
                <button onClick={acceptRequest} className="rounded-lg text-white py-3 px-11 w-40 bg-blue-700">Accept</button>
                <button className="rounded-lg text-white py-3 px-11 w-40 mt-5 bg-blue-700">Decline</button>
              </div>
            </div>
            :
            null
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Admin