import React from 'react'
import Image from 'next/image'
import photo from '../../src/asset/image/author.png'

const Comment = () => {
  return (
    <>
    <div className='mt-16 pl-20 mb-16'>
    <h1 className="font-bold text-xl">Comments</h1>
    <div className='flex mt-10'>
        <div className='mr-5 mt-2'>
            <Image src={photo} alt="photo" width={50} height={50}/>
        </div>
        <div className=''>
            <h1 className='text-xl font-bold'>You</h1>
            <input className='border-b-2 border-gray-400 outline-none' type="text" name="" id="" />
        </div>
        <div className='flex items-center ml-6 '><button className='bg-none font-bold'>submit</button></div>
    </div>
    <div>
    <div className='flex mt-5'>
        <div className='mr-5 mt-2'>
            <Image src={photo} alt="photo" width={50} height={50}/>
        </div>
        <div className=''>
            <h1 className='text-md font-bold mt-1'>Regina - 1m ago</h1>
            <p className='mt-2'>Couldn’t agree more!</p>
        </div>
    </div>
    <div className='flex mt-5'>
        <div className='mr-5 mt-2'>
            <Image src={photo} alt="photo" width={50} height={50}/>
        </div>
        <div className=''>
            <h1 className='text-md font-bold mt-1'>Regina - 1m ago</h1>
            <p className='mt-2'>Couldn’t agree more!</p>
        </div>
    </div>
    <div className='flex mt-5'>
        <div className='mr-5 mt-2'>
            <Image src={photo} alt="photo" width={50} height={50}/>
        </div>
        <div className=''>
            <h1 className='text-md font-bold mt-1'>Regina - 1m ago</h1>
            <p className='mt-2'>Couldn’t agree more!</p>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Comment