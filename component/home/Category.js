import Image from "next/image"
import history from "../../src/asset/image/history.png"
import covid from "../../src/asset/image/covid.png"
import Link from "next/link"
const Category = () => {
    return (
        <>
            <div className="mt-16 ml-32">
                <h1 className="font-bold text-xl">Category</h1>
                <div className="w-full text-right">
                    <Link href="/"><a className="text-right pr-8 text-blue-600">More</a></Link>
                </div>
                <div className="flex mt-8 overflow-hidden">
                    <div className="flex flex-col justify-center">
                        <div>
                            <Image src={covid} alt="history" width={204} height={222} />
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold">Goverment</h1>
                    </div>
                    <div className="flex flex-col justify-center ml-8">
                        <div>
                            <Image src={covid} alt="history" width={204} height={222} />
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center ml-8">
                        <div>
                            <Image src={covid} alt="history" width={204} height={222} />
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center ml-8">
                        <div>
                            <Image src={covid} alt="history" width={204} height={222} />
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold">Economy</h1>
                    </div>
                    <div className="flex flex-col justify-center ml-8">
                        <div>
                            <Image src={covid} alt="history" width={204} height={222} />
                        </div>
                        <h1 className="w-full text-center text-lg mt-5 font-bold">Economy</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category