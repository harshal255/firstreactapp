import React from 'react'


const CenterMenu = () => {

  const listyle = "m-4 hover:border-b-2";
  return (
    <nav className="">
        <ul className='menu flex w-[100%] justify-between h-[4rem]' >
            <li className={listyle}><a href="#Hero"> Home</a></li>
            <li className={listyle}><a href="#experience"> About</a></li>
            <li className={listyle}><a href="#search"> Preformerer</a></li>
            <li className={listyle}><a href="#download"> Event Shedule</a></li>
        </ul>
    </nav>
  )
}

export default CenterMenu