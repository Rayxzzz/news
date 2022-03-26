import Link from "next/link"

const Tags = () => {
    return (
        <>
            <div className="mt-16 ml-32">
                <h1 className="font-bold text-xl">Popular Tags</h1>
                <div className="w-full text-right">
                <Link href="/"><a className="text-right pr-8 text-blue-600">More</a></Link>    
                </div>
                <div className="flex mt-8 overflow-hidden">
                    <div className="bg-blue-300 px-2 py-1 rounded font-bold text-blue-900">#ladygaga</div>
                    <div className="bg-blue-300 px-2 py-1 rounded font-bold text-blue-900 ml-5">#ladygaga</div>
                    <div className="bg-blue-300 px-2 py-1 rounded font-bold text-blue-900 ml-5">#ladygaga</div>
                    <div className="bg-blue-300 px-2 py-1 rounded font-bold text-blue-900 ml-5">#ladygaga</div>
                    <div className="bg-blue-300 px-2 py-1 rounded font-bold text-blue-900 ml-5">#ladygaga</div>
                    <div className="bg-blue-300 px-2 py-1 rounded font-bold text-blue-900 ml-5">#ladygaga</div>
                    <div className="bg-blue-300 px-2 py-1 rounded font-bold text-blue-900 ml-5">#ladygaga</div>
                    <div className="bg-blue-300 px-2 py-1 rounded font-bold text-blue-900 ml-5">#ladygaga</div>
                    <div className="bg-blue-300 px-2 py-1 rounded font-bold text-blue-900 ml-5">#ladygaga</div>
                    <div className="bg-blue-300 px-2 py-1 rounded font-bold text-blue-900 ml-5">#ladygaga</div>
                </div>
            </div>
        </>
    )
}

export default Tags