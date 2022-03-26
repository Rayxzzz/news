import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import category1 from "../../src/asset/image/category1.png"
import category2 from "../../src/asset/image/category2.png"
import category3 from "../../src/asset/image/category3.png"
import category4 from "../../src/asset/image/category4.png"
import category5 from "../../src/asset/image/category5.png"
import category6 from "../../src/asset/image/category6.png"
import { useRouter } from 'next/router';


const CategoryList = () => {
   const router = useRouter()

    return (
        <>
            <div className="mt-16 ml-28 mr-12">
                <h1 className="text-gray-400 text-xl text-right">18 categories</h1>
                <h1 className="text-gray-400 text-xl text-center">Click the category to explore articles</h1>
                <div className="grid grid-cols-6 mt-8 overflow-hidden">
                    <div className="flex flex-col justify-center  mb-12">
                        <div onClick={()=>{router.push('/category/health')}} className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category2} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Health</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div onClick={()=>{router.push('/category/economy')}} className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category3} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div onClick={()=>{router.push('/category/politics')}} className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Politics</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center  mb-12">
                        <div className='h-[203.609px] mr-[34.2px] rounded-xl overflow-hidden'>
                            <div className=''>
                                <Image src={category1} alt="category1" height={203.609} width={154.828} />
                            </div>
                            <h1 className='relative z-20 bottom-32 text-white text-center w-20 ml-[39px]'>+50 Articles</h1>
                            <div className='relative bottom-[260px] bg-black opacity-40 h-[260px] w-[200px] z-10'></div>
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold pr-8">Economy</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CategoryList