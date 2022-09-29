import React from 'react'
import Feature from './Feature'

const Experience = () => {


    return (
        <div id='experience' className='experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-12rem] relative z-[2] rounded-b-[5rem] ' >
            

            {/* heading */}
            <div className="heading text-4xl mt-2">An Amazing App can change your daily life</div>
            <span className='text-5xl mt-4'>
                <b >Music Experience</b>
            </span>
            {/* feature */}
            <div className="feature flex items-center justify-around mt-[3rem] w-[100%]">
                <Feature icon="g2" title="For Live Music" text="Discover more music you'll love based on what you're already listening to with Listen Now." />
                <Feature icon="musicicon" title="For Daily Music" text="Tune in to live radio stations playing today's hits, classics and country.2" />
                <Feature icon="g4" title="For Artists" text="Experience even more immersive sound with dynamic head tracking on AirPods (3rd generation), AirPods Pro and AirPods Max.1"/>
            </div>
        </div>

    )
}

export default Experience