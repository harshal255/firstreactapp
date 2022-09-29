import React, { useEffect } from 'react'
import DownloadAds from './DownloadAds'
// import style from '../style/Hero.css'
import AOS from 'aos';



const Hero = () => {
   
   
    return (
       
        
        
        <div className='hero mt-[11rem]' id='Hero'>

            <div className="wrapper  bg-[#081730] flex items-center px-[5rem] rounded-b-[5rem] w-[100%] h-[34rem] relative justify-between z-[3]" >
                {/* left side */}
                <div className="headings flex flex-col items-start justify-center h-[100%] text-[2rem]" data-aos="zoom-out-right">
                    <span>
                        Experience The
                    </span>{" "}
                    <span className='text-[4rem]'><b>
                        Best Quality Music
                    </b>

                    </span>
                    <span className='text-[1rem] text-[#525D6E]'>
                    Listen and discover. In perfect harmony. <br />
                    Sing along, tap ahead, share your favourite lines or just listen with lyrics view — always on and available for millions of songs.</span>

                    {/* download ads */}
                    <div>
                        <span className='text-xl'>Download now on IOS and Anroid :</span>
                        <DownloadAds></DownloadAds>
                    </div>
                   

                </div>

                {/* <div className="center">Center</div> */}
                {/* right side */}
                

                <div className="images relative w-[50%]" >
                <img src={require('../img/backgraphics.png')} alt="music" className='absolute top-[-8rem] left-[19rem] z-[-2]' data-aos="zoom-in-left"  data-aos-duration="1000"/>
                <img src={require('../img/p1.png')} alt="music" className='absolute top-[-15rem] h-[34rem] left-[13rem]' data-aos="zoom-in-left"/>
                <img src={require('../img/p2.png')} alt="music" className='absolute left-[235px] top-[94px] w-[175px] ' data-aos="zoom-in-up"   />
                <img src={require('../img/p3.png')} alt="music" className='absolute h-[75px] top-[185px] left-[215px]' data-aos="flip-right"/>
                <img src={require('../img/p4.png')} alt="music" className='absolute h-[100px] top-[175px] left-[198px]' data-aos="fade-down-left" />
               
                </div>
            </div>
        </div>
       
    )
}

export default Hero