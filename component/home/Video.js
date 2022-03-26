import Image from "next/image"
import video from "../../src/asset/image/Video.png"

const Video = () => {
  return (
    <>
      <div className="flex mt-6 w-full bg-gray-400 py-32 justify-center">
        <div className="mr-20">
          <p className="text-3xl font-serif font-bold mt-10">Lets hear about</p>
          <p className="text-3xl font-serif font-bold mt-2">Kayla`s success story</p>
          <p className="text-lg mt-16">See how well News Today works in a</p>
          <p className="text-lg mt-2">real user`s life</p>
          <button className="bg-blue-700 text-white py-3 px-3 mt-12 rounded">Let`s get started</button>
        </div>
        <div>
          <Image src={video} alt="video"/>
        </div>
      </div>
    </>
  )
}

export default Video