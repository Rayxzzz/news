import React from 'react'
import Image from 'next/image'
import plus from '../../src/asset/image/+.png'
import custom from '../../src/asset/image/CUSTOMAREA.png'
import { useForm } from "react-hook-form";
import { axiosInstance } from '../../helper/axiosIntance';
import { useRouter } from 'next/router';
import { useState } from 'react'
import socket from '../../helper/socket';


const PostForm = () => {
    const [form, setForm] = useState({
        head: '',
        category: '',
        article: ''
    })
    let token
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        token = localStorage.getItem('token')
    }

    const router = useRouter()
    const onSubmit = data => console.log(data)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        axiosInstance.post('/app/post', {
            head: form.head,
            category: form.category,
            article: form.article
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                socket.emit('post', res.data.data)
                router.push('/')
            }).catch((err) => {
                console.log(err)
            })
    };

    return (
        <>
            <div className='flex mt-16 px-20 mb-12 outline-none'>
                <div>
                    <div className='w-[342px] h-[535px] border-2 border-blue-400 rounded-[16px]'>
                        <div className='border-2 h-[450px] flex items-center justify-center border-blue-400 m-10 border-dashed rounded-[16px]'>
                            <div className=''>
                                <Image src={plus} alt="plus" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='w-full shadow-xl py-3 mt-10 bg-zinc-900 rounded-xl text-white font-semibold'>Choose Cover Photo</button>
                    </div>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className='flex ml-6 w-[800px]'>
                        <input name='head' className="py-3 px-5 mr-4 outline-none rounded-xl border-2 w-1/2 border-blue-400" type="text" placeholder="Article Title" onChange={handleChange} />
                        <input name='category' className="py-3 px-5 rounded-xl outline-none border-2 w-1/2 border-blue-400" type="text" placeholder="Article Category" onChange={handleChange} />
                    </div>
                    <div className='flex items-center ml-6 mt-5 mb-3'>
                        <input name='category' className="py-3 px-5 rounded-xl outline-none border-2 w-1/2 border-blue-400" type="text" placeholder="Sub Title" onChange={handleChange} />

                        <h1 className='font-bold mb-1 ml-4 text-blue-700'>Attachment:</h1>
                        <div className='ml-6'>
                            <Image src={custom} alt="" />
                        </div>
                    </div>
                    <textarea name="article" className='break-all w-[800px] border-2 p-5 outline-none border-blue-500 ml-6 rounded-xl h-[404px]' type="text" id="" onChange={handleChange} />
                    <button className='w-[800px] ml-6 shadow-xl py-3 mt-9 bg-blue-700 rounded-xl text-white font-semibold'>Request Publish Article</button>
                </form>
            </div>
        </>
    )
}

export default PostForm