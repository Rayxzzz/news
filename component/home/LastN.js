import Image from 'next/image'
import united from '../../src/asset/image/united.png'
import save from '../../src/asset/image/save.png'
import like from '../../src/asset/image/like.png'
import News from './news'

const LastN = () => {
  return (
    <>
      <div className='mx-32 mt-16 overflow-hidden mb-28'>
        <h1 className="font-bold text-xl">Lastest News</h1>
        <div className='h-[44rem] overflow-hidden'>
          <News/>
          <News/>
          <News/>
          <News/>
        </div>
      </div>
    </>
  )
}

export default LastN