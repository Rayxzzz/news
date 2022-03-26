import React from 'react'
import Image from 'next/image'
import bike from '../../src/asset/image/covid19.png'
import photo from '../../src/asset/image/author.png'
import like from '../../src/asset/image/likeA.png'
import save from '../../src/asset/image/saveA.png'

const ArticleDetail = (props) => {
  return (
    <>
      <div className='px-20 mt-16 overflow-hidden'>
        <div className='flex'>
          <Image src={bike} alt="bike" />
          <Image src={bike} alt="bike" />
          <Image src={bike} alt="bike" />
        </div>
        <div className='mt-12 flex justify-between'>
          <div className='flex items-center'>
            <Image src={photo} alt="photo" layout='fixed' />
            <dir>
              <h1 className='text-xl mb-1'>{props.author} - author</h1>
              <p className='text-gray-400'>wed, 10 mei 2022</p>
            </dir>
          </div>
          <div className='flex justify-center'>
            <div className='flex items-center'>
              <Image src={like} alt="like" />
              <h1 className='ml-3 mr-5'>{props.like}</h1>
            </div>
            <div className='mt-6'>
              <Image src={save} alt="save" />
            </div>
          </div>
        </div>
        <div>
          <h1 className='mt-12 text-2xl font-bold '>{props.title}</h1>
          <p className='break-words leading-10 mt-8'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {props.content}</p>
        </div>
      </div>
    </>
  )
}

export default ArticleDetail