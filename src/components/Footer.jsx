
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
// import CenterMenu from './CenterMenu'



const Footer = () => {

    const SocialStyle = "rounded-full border-2 border-whit  mr-[2rem] hover:cursor-pointer pt-[9px] pr-[12px] pb-[10px] pl-[11px]  hover:text-[#081730] hover:bg-white "
    return (
        <div className='footer flex flex-col items-center justify-start  bg-[#081730] h-[15rem]  mt-[-10rem] relative  text-white '>
           
            {/* social icons */}
            <div className="flex w-[100%] justify-center mt-14">
                <div className={SocialStyle}>
                    <GitHub></GitHub>
                </div>
                <div className={SocialStyle}>
                    <LinkedIn></LinkedIn>
                </div>
                <div className={SocialStyle}>
                    <Twitter></Twitter>
                </div>
                <div className={SocialStyle}>
                    <Instagram></Instagram>
                </div>


            </div>
            {/* detail */}
            <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[2rem]">
                Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
                Vestibulum ullamcorper volutpat varius.
            </span>
        </div>
    )
}

export default Footer