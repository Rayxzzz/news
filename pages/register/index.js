import Form from "../../component/register/Form"
import Logo from "../../component/register/logo"
import Footer from "../../component/register/Footer"

const index = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-login bg-cover h-login">
        </div>
        <div className="flex items-center pt-14 flex-col px-28">
          <h1 className="w-full text-left font-bold text-4xl">Sign Up</h1>
          <Form/>
          <Logo/>
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default index