import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primaryblue/5 p-4 flex justify-between max-w-7xl mx-auto'>
            <p className='text-center text-primaryblue'>© 2025 ACM NUCES.</p>
            <p className='text-center text-primaryblue'>{"</>"} by <Link href={"https://abdullahazhar.vercel.app"} target='_blank' className='underline'>abbdullah</Link></p>
        </div>
    )
}

export default Footer