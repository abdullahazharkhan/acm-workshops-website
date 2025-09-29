import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center flex-col p-4'>
            <div className="space-y-4">
                <div>
                    <h1 className='text-xl sm:text-3xl text-primaryblue'>ACM NUCES Presents</h1>
                    <h1 className='text-5xl sm:text-5xl md:text-7xl xl:text-8xl font-[700] text-primaryblue'>Programming Workshops</h1>
                </div>
                <h1 className='text-xl sm:text-2xl text-primaryred sm:text-center'>Code. Compete. Conquer.</h1>
            </div>
            <div className='flex justify-center items-center gap-4 flex-col sm:flex-row mt-4 w-full sm:w-auto'>
                <button className='w-full sm:w-auto px-6 py-2 border-primaryblue border-2 text-primaryblue rounded cursor-pointer'>Explore Itinerary</button>
                <button className='w-full sm:w-auto px-6 py-2 bg-primaryblue text-white border-primaryblue border-2  rounded cursor-pointer'>Register Now!</button>
            </div>
        </div>
    )
}

export default Hero