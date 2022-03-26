import Image from "next/image"
import picture from "../../src/asset/image/login.png"
import style from "../../styles/login.module.css"
import Form from "../../component/login/Form"
import Logo from "../../component/login/logo"
import Footer from "../../component/login/Footer"


const index = () => {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div className="bg-login bg-cover h-login">
        </div>
        <div className="flex items-center pt-20 flex-col px-28">
          <h1 className="w-full text-left font-bold text-4xl">Login</h1>
          <Form/>
          <Logo/>
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default index