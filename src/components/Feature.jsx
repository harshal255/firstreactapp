import React from 'react'



const Feature = ({ icon, title,text }) => {
    

    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" className='m-6 text-center border-solid border-2 border-purple-600  rounded-[52px] p-10 hover:brightness-200 w-[40rem] h-[25rem]' >
            <div className="Feature flex flex-col items-center text-[2rem">
                <div className="icon">
                    <img  src={require(`../img/${icon}.png`)} alt="music" className='w-[5rem]' />
                </div>
                <span className='mt-5 text-3xl font-semibold'>{title}</span>
            </div>

            <span className='text-[#707070] mt-4 inline-block'>{text}</span>

            <span className="text-[#E600FF] underline mt-[1rem] hover:cursor-pointer inline-block items-center">Learn More</span>

        </div>


    )
}

export default Feature