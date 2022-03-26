import Image from "next/image"
import news from "../src/asset/image/Facebook.svg"
import Link from "next/link"
import Profile from "./Profile"


const Header = (props) => {
    return (
        <>
            <div className={`py-3 flex items-center bg-opacity-0 ${props.type} w-full justify-between`}>
                <h1 className="text-3xl font-serif font-bold ml-20">News Today</h1>
                <div className="flex ">
                    <Link href="/">
                        <a className={`mr-12 ${props.home}`}>Home</a>
                    </Link>
                    <Link href="/article" passHref={true}>
                        <a className={`mr-12 ${props.article}`}>Article</a>
                    </Link>
                    <Link href="/category" passHref={true}>
                        <a className={`mr-12 ${props.category}`}>Category</a>
                    </Link>
                    <Link href="/about" passHref={true}>
                    <a className={`mr-12 ${props.about}`}>About</a>
                    </Link>
                </div>
                <Profile/>
            </div>
        </>
    )
}

export default Header