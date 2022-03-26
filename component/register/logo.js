import React from 'react'
import Image from 'next/image'
import google from '../../src/asset/image/iconGoogle.svg'
import facebook from '../../src/asset/image/Facebook.svg'
import twitter from '../../src/asset/image/Twitter.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Logo = () => {
  const route = useRouter()

  return (
    <>
    <div className='w-full mt-5'>
        <p className='w-full text-center tracking-widest'>OR SIGN UP WITH</p>
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
            <div className='flex justify-center text-xs'>Already have an account?</div>
            <div><div className='border-t-2 border-t-black w-32 mt-2'></div></div>
        </div>
        <button onClick={()=>route.push('/login')} className='w-full py-3 mt-10 bg-black rounded-xl text-white font-sans font-bold'>Login Here</button>
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