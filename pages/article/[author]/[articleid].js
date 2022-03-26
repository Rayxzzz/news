import { useRouter } from 'next/router'
import Header from '../../../component/Header'
import ArticleDetail from '../../../component/article/articleDetail'
import back from '../../../src/asset/image/back.png'
import Image from 'next/image'
import share from '../../../src/asset/image/share.png'
import Comment from '../../../component/article/Comment'
import Footer from '../../../component/article/Footer'
import save from '../../../src/asset/image/saveA.png'
import like from '../../../src/asset/image/likeA.png'
import { axiosInstance } from '../../../helper/axiosIntance'
import { useEffect, useState } from 'react'


const Productid = () => {
    let token
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        token = localStorage.getItem('token')
      }
    const [post, setPost] = useState([])
    const router = useRouter()
    const { author, articleid } = router.query
    console.log(articleid)
   
    useEffect(()=>{
        axiosInstance.get(`/app/post/${articleid}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
              }
        })
        .then((res)=>{
            console.log(res.data.data[0])
            setPost(res.data.data[0])
        }).catch((err)=>{
            console.log(err.response)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(post)
    return (
        <>
            <Header />
            <div className='flex justify-between mt-16 w-screen px-20'>
                <div className='flex items-center'>
                    <Image src={back} alt="back" />
                    <h1 className='ml-6'>Back</h1>
                </div>
                <h1 className='font-bold text-xl'>Article Viewer</h1>
                <div>
                    <Image src={share} alt="share" />
                </div>
            </div>
            <ArticleDetail like={post.like} author={author} title={post.head} content={post.article}/>
            <Comment/>
            {/* <Footer/> */}
        </>
    )
}

export default Productid