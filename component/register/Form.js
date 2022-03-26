import 'tailwindcss/tailwind.css'
import { useForm } from "react-hook-form";
import { axiosInstance } from '../../helper/axiosIntance';
import { useRouter } from 'next/router';



const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter()
    const onSubmit = data => {
        axiosInstance.post('/app/register', data)
        .then((res) => {
            console.log(res)
            router.push('/login')
            // localStorage.setItem('token', res.data.data.token)
        }).catch((err) => {
            console.log(err.response)
        })
    };


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col mt-10'>
            <p className="mb-4">Email Address :</p>
            <input {...register("email", { required: true })} className="py-3 px-5 rounded-xl border-2 border-blue-600" type="email" id="email" placeholder="Enter your email address"/>
            <p className='mt-5 mb-4'>Password :</p>
            <input {...register("password", { required: true })} className="py-3 px-5 rounded-xl  border-2 border-blue-600" type="password" placeholder="Enter your password"/>
            <p className='mt-5 mb-4'>Phone Number :</p>
            <input {...register("phone", { required: true })} className="py-3 px-5 rounded-xl  border-2 border-blue-600" type="text" placeholder="Enter your phone number"/>
            <button className='w-full shadow-xl py-3 mt-10 bg-blue-700 rounded-xl text-white font-semibold'>Sign Up</button>
        </form>
        </>
    )
}

export default Form