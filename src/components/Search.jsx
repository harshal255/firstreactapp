import React from 'react'
import MusicPlayer from './MusicPlayer'

const Search = () => {
    return (
        <div className='relative h-[42rem] px-[5rem] bg-[#081730]  z-[1] flex items-center justify-between ' id='search' >
            {/* left side */}
            <div className="left flex-1"></div>
            <img src={require('../img/backgraphics.png')} alt="music" className='absolute top-[0rem] left-[-45rem]' data-aos="zoom-in-right" />
            <img src={require('../img/d1.png')} alt="music" className='w-[16rem] top-[4rem] absolute' data-aos="zoom-out-right" />
            <img src={require('../img/d2.png')} alt="music" className='w-[9rem] absolute top-[10.7rem] left-[7rem]' data-aos="zoom-in-right" />
            <img src={require('../img/d3.png')} alt="music" className='w-[9rem] top-[11rem] left-[17rem] absolute' data-aos="zoom-in-right" />
            <img src={require('../img/d4.png')} alt="music" className='w-[17rem] top-[28rem] left-[2rem] absolute' data-aos="zoom-out-right" />

            {/* right side */}
            <div className="right flex  flex-col justify-start flex-1 h-[100%] ml-[5rem]">


                <div className="seachbar flex p-3 h-[3rem] border-purple-700 border-solid border-2 hover:border-purple-600 ml-[24rem] mt-5 rounded-lg ">
                    <input type="text" placeholder='Enter the keyword or url' className=' outline-none bg-transparent ' />
                    <div className="searchIcon ">
                        <img src={require('../img/search.png')} alt="music" className='w-[1.2rem]' />
                    </div>

                    {/* tild icon */}


                </div>





                {/* paragraph */}
                <div className='tild flex flex-col justify-items-start mt-4  w-[100%] ml-5'>
                    <img src={require('../img/wave.png')} alt="music" className='w-[5rem] mb-4' d />
                    <span className='text-2xl mt-1' data-aos="fade-left">Search Music By</span>
                    <span className='text-4xl my-2' data-aos="fade-left">
                        <b data-aos="fade-left">Name or Direct URL</b>
                    </span>
                    <span className='text-gray-600' data-aos="fade-left">Listen and discover. In perfect harmony.
                        Sing along, tap ahead, share your favourite lines or just listen with lyrics view — always on and available for millions of songs.</span>
                </div>

                {/* music Player */}
                <MusicPlayer></MusicPlayer>


            </div>
        </div>
    )
}

export default Search 