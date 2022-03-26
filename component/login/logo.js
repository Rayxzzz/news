import React from 'react'
import Image from 'next/image'
import google from '../../src/asset/image/iconGoogle.svg'
import facebook from '../../src/asset/image/Facebook.svg'
import twitter from '../../src/asset/image/Twitter.svg'
import Link from 'next/link'


const Logo = () => {
  return (
    <>
    <div className='w-full mt-12'>
        <p className='w-full text-center tracking-widest'>OR LOGIN WITH</p>
        <div className='flex w-full justify-center mt-7'>
            <div className='mr-8'>
            <Image src={google} alt="google"/>
            </div>
            <div className='mr-8'>
            <Image src={facebook} alt='facebook'/>
            </div>
            <Image src={twitter} alt='twitter'/>
        </div>
        <div className='flex justify-between mt-16'>
            <div><div className='border-t-2 border-t-black w-32 mt-2'></div></div>
            <div className='flex justify-center text-xs'>Dont have an account?</div>
            <div><div className='border-t-2 border-t-black w-32 mt-2'></div></div>
        </div>
        <button className='w-full py-3 mt-10 bg-black rounded-xl text-white font-sans font-bold'>Sign Up Now</button>
        <div className='flex w-full justify-center' >
        <Link  href="/">
        <a className='py-3 mt-10 bg-none rounded-xl underline font-semibold'>Back to Home Page</a>
        </Link>
        </div>
    </div>
    </>
  )
}

export default Logo