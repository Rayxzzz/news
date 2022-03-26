import Header from "../../component/Header"
import Footer from "../../component/login/Footer"
import filter from "../../src/asset/image/Filter.png"
import Image from "next/image"
import ArticleChild from "../../component/article/articleChild"
import Link from "next/link"
import CategoryList from "../../component/category/CategoryList" 


export default function Category() {
  return (
    <>
      <Header category="font-bold" type="absolute"/>
      <div className="h-screen bg-category bg-cover bg-no-repeat flex flex-col justify-center">
        <div className="ml-32 mb-32 animate-fade">
          <div className="font-serif font-bold">
            <p className="text-6xl">Choose Article by</p>
            <p className="text-6xl mt-2">Category</p>
          </div>
          <div className="mt-5 w-[43%]">
            <p className="text-xl leading-[31px]">Category helps you to read another article that you haven’t thought before. You able to read all articles for free. Enjoy the reading!</p>
          </div>
        </div>
      </div>
      <div className="ml-32 flex mt-16 mb-12">
        <div className="bg-blue-200 pt-3 pb-2 px-3 rounded-lg">
          <Image src={filter} alt="filter" />
        </div>
        <h1 className="ml-5 bg-blue-200 text-blue-800 font-bold pt-3 pb-2 px-3 rounded-lg">+ Write an Article</h1>
      </div>
      <div className="">
          <CategoryList/>
      </div>
      
      <div className='flex w-full justify-center mb-16 mt-16' >
      <h1 className="text-gray-400 text-xl text-center">We have no category left</h1>
      </div>
      <Footer />
    </>
  )
}