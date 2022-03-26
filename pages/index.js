import Header from "../component/Header"
import Category from "../component/home/Category"
import LastN from "../component/home/LastN"
import Recomended from "../component/home/Recomended"
import Tags from "../component/home/Tags"
import Video from "../component/home/Video"
import Footer from "../component/login/Footer"

export default function Home() {
  return (
  <>
    <Header home="font-bold" type="absolute"/>
    <div className="h-screen bg-home bg-cover bg-no-repeat flex flex-col justify-center">
      <div className="ml-32 mb-32 animate-fade">
      <div className="font-serif font-bold">
      <p className="text-6xl mt-16">Share Information</p>
      <p className="text-6xl mt-2">and Educate People</p>
      </div>
      <div className="mt-5 w-1/2">
      <p className="text-xl leading-[31px]">Everyone has their point of view of something.but just dont be afraid to express the facts. Be an author and share you prespective of something to the world</p>
      </div>
      <button className="bg-blue-700 text-white py-3 px-3 mt-12 rounded">Start Exploring</button>
      </div>
    </div>
    <Tags/>
    <Category/>
    <Recomended/>
    <Video/>
    <LastN/>
    <Footer/>
  </>
    )
}
