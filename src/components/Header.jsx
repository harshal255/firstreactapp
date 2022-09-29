import React from 'react'
import CenterMenu from './CenterMenu'


const Header = () => {

  const buttons =''
  const buttonStyle =' px-[25px] py-[7px] mx-1 my-[7px] hover:bg-[#232A3F] border-[2px] rounded-[10px] border-[#232A4E]'
  // const hover ='hover:bg-yellow-300';
  return (
    <div className="fixed w-[100%] z-50 bg-[#020917] flex items-center justify-between px-[5rem] py-[0.6rem] text-white h-[5rem]">

    {/* logo */}
       
        <img src={require('../img/logo.png')} alt="music" className='h-12 pt-2'/>

        {/* side menu */}

        <CenterMenu></CenterMenu>

        {/* buttons */}
        <div className={buttons}>

        <button className={buttonStyle}>Sign up</button>
        <button className={buttonStyle}>Log in</button>
        </div>

    </div>
  )
}

export default Header