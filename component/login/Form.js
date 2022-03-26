import 'tailwindcss/tailwind.css'
import { useForm } from "react-hook-form";
import { axiosInstance } from '../../helper/axiosIntance';
import { useRouter } from 'next/router';


const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter()
    const onSubmit = data => {
        axiosInstance.post('/app/login', data)
            .then((res) => {
                console.log(data)
                console.log(res.data.data.token)
                localStorage.setItem('token', res.data.data.token)
                localStorage.setItem('status', res.data.data.status)
                router.push('/')
            }).catch((err) => {
                console.log(err)
            })
    };

    return (
        <>
            <form className='w-full flex flex-col mt-10' onSubmit={handleSubmit(onSubmit)}>
                <p className="mb-4">Email Address :</p>
                <input {...register("email", { required: true })} className="py-3 px-5 rounded-xl border-2 border-blue-600" type="email" id="email" placeholder="Enter your email address" />
                <p className='mt-5 mb-4'>Password :</p>
                <input {...register("password", { required: true })} className="py-3 px-5 rounded-xl  border-2 border-blue-600" type="password" placeholder="Enter your password" />
                <button className='w-full shadow-xl py-3 mt-10 bg-blue-700 rounded-xl text-white font-semibold'>Login</button>
            </form>
        </>
    )
}

export default Form