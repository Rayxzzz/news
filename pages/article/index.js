import Header from "../../component/Header"
import Footer from "../../component/login/Footer"
import filter from "../../src/asset/image/Filter.png"
import Image from "next/image"
import ArticleChild from "../../component/article/articleChild"
import Link from "next/link"
import Category from "../../component/article/Category"
import { useRouter } from 'next/router';


const Article = () => {
  const router = useRouter()
  return (
    <>
      <Header article="font-bold" type="absolute"/>
      <div className="h-screen bg-article bg-cover bg-no-repeat flex flex-col justify-center">
        <div className="ml-32 mb-32 animate-fade">
          <div className="font-serif font-bold">
            <p className="text-6xl mt-16">Start Writing an</p>
            <p className="text-6xl mt-2">Article</p>
          </div>
          <div className="mt-5 w-[43%]">
            <p className="text-xl leading-[31px]">You can be an author by being active in reading artciles in a month or you can request to be an author if you have been a member for three months.</p>
          </div>
          <button onClick={()=>{router.push('/post')}} className="bg-blue-700 text-white py-3 px-3 mt-12 rounded">Start Writing</button>
        </div>
      </div>
      <div className="ml-32 flex mt-16 mb-12">
        <div className="bg-blue-200 pt-3 pb-2 px-3 rounded-lg">
          <Image src={filter} alt="filter" />
        </div>
        <h1 className="ml-5 bg-blue-200 text-blue-800 font-bold pt-3 pb-2 px-3 rounded-lg">+ Write an Article</h1>
      </div>
      <Category head="Lastest News" />
      <Category head="Today`s Popular" />
      <Category head="Sport" />
      <Category head="Politics" />
      <Category head="Today`s Popular" />
      <div className='flex w-full justify-center mb-16' >
        <Link href="/article/ridho/2">
          <a className='py-3 mt-10 bg-none rounded-xl underline font-semibold'>Load another 30+ category</a>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Article
