import React from 'react'

const MusicPlayer = () => {
  return (
    <div className='flex flex-col px-5 m-5 w-[100%] border-2 border-black py-3 bg-[#232A4E] rounded-xl mt-5 ' data-aos="zoom-in-down">
    {/* upperpart */}
        <div className="upperpart flex items-center justify-between">
            {/* profile */}
            <div className="profile flex ">
            <img src={require('../img/circle.png')} alt="music" className='w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full m-1' />
            </div>
            <div className="details  flex flex-col ml-[-24rem]">
                <span className='text-[1rem] mx-1'>Harshal Kahar</span>
                <span className='text-sm text-gray-500 mx-1'>Unknown Artist</span>
            </div>
            <div className="path">
            <img src={require('../img/path.png')} alt="music" className='h-[1rem]' />

            </div>
        </div>
        <div className="lowerpart flex">
            <div className="track flex justify-between text-sm text-gray-500 flex-[2] items-center ">
            <span>11:30</span>
            <img src={require('../img/g9.png')} alt="music" className='w-[16rem]' data-aos="flip-down" />
            <span>3:30</span>
            </div>

            {/* Controls */}
            <div className="control flex items-center justify-around mx-[35px]">
            <img src={require('../img/pre.png')} alt="music" className='w-[2rem] m-2' data-aos="zoom-in-right"/>
            <img src={require('../img/push.png')} alt="music" className='w-[2rem] m-2' data-aos="zoom-in-down"/>
            <img src={require('../img/next.png')} alt="music" className='w-[2rem] m-2 ' data-aos="zoom-in-left"/>
            </div>

        </div>
        
    </div>
  )
}

export default MusicPlayer