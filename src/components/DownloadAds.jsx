import React from 'react'

const DownloadAds = () => {

   const downloadimgstyle = ' border-[2px] border=[#232A4E] rounded-[13px] h-[3rem] w-[10rem] m-3'
  return (
   <div className="download">
    <div className="download_images flex justify-between ">
    <img src={require('../img/appstore.png')} alt="music" className={downloadimgstyle} />
    <img src={require('../img/playstore.png')} alt="music" className={downloadimgstyle} />
    </div>
   </div>
  )
}

export default DownloadAds