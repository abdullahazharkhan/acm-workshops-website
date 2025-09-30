"use client";

import React from 'react'
import Link from 'next/link';

const Hero = () => {
    const handleSmoothScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <div className='h-screen w-full flex justify-center items-center flex-col p-4'>
            <div className="space-y-4">
                <div>
                    <h1 className='text-xl sm:text-3xl text-primaryblue'>ACM NUCES Presents</h1>
                    <h1 className='text-5xl sm:text-5xl md:text-7xl xl:text-8xl font-[700] text-primaryblue'>SkillPrep Series</h1>
                </div>
                <h1 className='text-xl sm:text-2xl text-primaryred sm:text-center'>Your weekly path to coding mastery.</h1>
            </div>
            <div className='flex justify-center items-center gap-4 flex-col sm:flex-row mt-4 w-full sm:w-auto'>
                <button
                    onClick={() => handleSmoothScroll("workshops")}
                    className='w-full sm:w-auto px-6 py-2 border-primaryblue border-2 text-primaryblue rounded cursor-pointer'>Explore Itinerary</button>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdRzuAxELW4c5K2ZWQqlxmROKLNVcZiVZ2RCFLdjrs59e9Lxg/viewform" target="_blank" rel="noopener noreferrer"
                    className='w-full sm:w-auto px-6 py-2 bg-primaryblue text-white border-primaryblue border-2  rounded cursor-pointer'>Register Now!</Link>
            </div>
        </div>
    )
}

export default Hero