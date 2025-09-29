import Link from 'next/link';
import React from 'react'

const WorkshopCard = ({ workshop, index }: any) => {
    return (
        <div className='rounded-lg sm:h-48 flex sm:flex-row flex-col-reverse bg-primaryblue/5'>
            <div className="w-full sm:w-1/3 bg-primaryblue text-white sm:rounded-l-lg rounded-b-lg flex justify-center items-center font-[700] sm:flex-col py-2">
                <p className='text-3xl sm:text-9xl relative mr-8 sm:mr-0'>{index + 1}
                    <span className='text-xl sm:text-3xl absolute top-0'>{workshop.week}</span>
                </p>
                <p className='text-3xl'>week</p>
            </div>
            <div className="w-full sm:w-2/3">
                <div className="p-4 flex flex-col justify-between h-full">
                    <div>
                        <h2 className='text-2xl font-bold text-primaryblue'>{workshop.title}</h2>
                        <div>
                            {workshop.tags.map((tag: string, idx: number) => (
                                <div key={idx} className="inline-block bg-primaryblue/10 text-primaryblue text-xs px-2 py-1 rounded-full mr-2 mt-2">{tag}</div>
                            ))}
                        </div>
                    </div>

                    <Link href={workshop.contestLink} className={`text-primaryred text-sm ${workshop.contestLink === "#" ? "cursor-default" : "hover:underline"}`}>{workshop.contestLink === "#" ? "Registrations not open yet" : "Join Contest"}</Link>
                </div>
            </div>
        </div>
    );
}

const Workshops = () => {
    const workshops = [
        {
            week: "st", title: "Introduction to Programming", contestLink: "#", tags: [
                "Beginner", "Programming", "Basics", "Maths", "Logic",
            ]
        },
        {
            week: "nd", title: "Data Structures and Algorithms", contestLink: "#", tags: [
                "Intermediate", "Algorithms", "Data Structures", "Sorting",
            ]
        },
        {
            week: "rd", title: "Advanced Web Development", contestLink: "#", tags: [
                "Advanced", "Web Development", "React", "Node.js", "APIs",
            ]
        },
        {
            week: "th", title: "Machine Learning Basics", contestLink: "#", tags: [
                "Beginner", "Machine Learning", "AI", "Data Science",
            ]
        },
        {
            week: "th", title: "Competitive Programming", contestLink: "#", tags: [
                "Advanced", "Competitive Programming", "Contests", "Problem Solving",
            ]
        },
        {
            week: "th", title: "Mobile App Development", contestLink: "#", tags: [
                "Intermediate", "Mobile Development", "Flutter", "React Native", "UI/UX",
            ]
        },
        {
            week: "th", title: "Cybersecurity Fundamentals", contestLink: "#", tags: [
                "Beginner", "Cybersecurity", "Networking", "Ethical Hacking",
            ]
        },
        {
            week: "th", title: "Cloud Computing Essentials", contestLink: "#", tags: [
                "Beginner", "Cloud Computing", "AWS", "Azure", "DevOps",
            ]
        }
    ];
    return (
        <div className='p-4 grid md:grid-cols-2 justify-center items-center gap-4'>
            {workshops.map((workshop, index) => (
                <WorkshopCard key={index} workshop={workshop} index={index} />
            ))}
        </div>
    )
}

export default Workshops