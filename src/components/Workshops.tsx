import React from 'react'

const WorkshopCard = ({ workshop }: any) => {
    return (
        <div className='rounded-lg bg-primaryred w h-40 p-4 m-2'>
            <h3 className='text-lg font-semibold'>{workshop.title}</h3>
            <a href={workshop.contestLink} className='text-blue-500'>Join Contest</a>
            <div className='mt-1'>
                {workshop.tags.map((tag: string, index: number) => (
                    <span key={index} className='inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-medium text-gray-700 mr-2'>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

const Workshops = () => {
    const workshops = [
        {
            title: "Introduction to Programming", contestLink: "#", tags: [
                "Beginner", "Programming", "Basics", "Maths", "Logic", "Problem Solving", "Data Structures",
            ]
        },
    ];
    return (
        <div className='border-y-2 border-primaryblue p-4'>
            {workshops.map((workshop, index) => (
                <WorkshopCard key={index} workshop={workshop} />
            ))}
        </div>
    )
}

export default Workshops