import React from 'react'
import ArticleChild from './articleChild'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '../../src/asset/image/arrow.png'

const Category = (props) => {
  return (
    <>
    <div className="mt-5 mb-16 ml-32 mr-5">
        <h1 className="font-bold text-xl">{props.head}</h1>
        <div className="w-full text-right">
          <Link href="/"><a className="text-right pr-8 text-blue-600">View More</a></Link>
        </div>
        <div className="flex mt-8 overflow-hidden h-96">
         <ArticleChild/>
         <ArticleChild/>
         <ArticleChild/>
         <ArticleChild/>
        </div>
      </div>
    </>
  )
}

export default Category