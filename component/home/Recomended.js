import Image from 'next/image'
import united from '../../src/asset/image/united.png'
import save from '../../src/asset/image/save.png'
import like from '../../src/asset/image/like.png'
import clock from '../../src/asset/image/clock.png'
import Link from 'next/link'
import Article from './article'


const Recomended = () => {
    return (
        <>
            <div className="mt-16 ml-32 mb-16 mr-5">
                <h1 className="font-bold text-xl">Recomended</h1>
                <div className="w-full text-right">
                    <Link href="/"><a className="text-right pr-8 text-blue-600">More</a></Link>
                </div>
                <div className="flex mt-8 overflow-hidden h-96">
                    <Article/>
                </div>
            </div>
        </>
    )
}

export default Recomended