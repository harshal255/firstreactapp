import React from 'react'

const GoToTop = () => {

    const goToBtn = () =>{
        window.scrollTo({top:0,left :0, behavior:"smooth"})
    }
  return (
    <div className='top-btn border-2 ' onClick={goToBtn}><h1>Top Button</h1></div>
  )
}

export default GoToTop