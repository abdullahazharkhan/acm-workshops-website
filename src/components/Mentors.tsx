import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MentorsCard = ({ lead, index }: any) => {
    const colors: { [key: string]: string } = {
        "Expert": "text-[#0000ff]",
        "Specialist": "text-[#03a89e]",
        "Candidate Master": "text-[#a000a9]"
    };
    return (
        <div className='border-4 border-primaryblue/20 rounded-lg p-4 flex min-[435]:flex-row flex-col gap-4 backdrop-blur-2xl hover:border-primaryblue duration-500 items-center h-full'>
            <Image src={lead.image} alt={lead.name} width={128} height={128} className='h-32 w-32 object-cover rounded-full' />
            <div className="flex flex-col mt-4">
                <h2 className='text-xl font-bold text-primaryblue'>{lead.name}</h2>
                <p className={`text-sm font-bold ${colors[lead.tags[1]]}`}>{lead.tags[1]} <span className='text-gray-500'>@Codeforces</span></p>
                <p className='text-gray-500'>({lead.rating})</p>
                <p className='mt-4 text-sm'>{lead.tags[0]}</p>
                <div className='flex gap-4'>
                    <Link href={lead.codeforces} className='text-gray-500 underline hover:text-primaryblue duration-200'>Codeforces</Link>
                    <Link href={lead.linkedin} className='text-gray-500 underline hover:text-primaryblue duration-200'>Linkedin</Link>
                </div>
            </div>
        </div>
    );
};

const Mentors = () => {
    const mentors = [
        {
            name: "Ashar Usmani",
            tags: ["Pakistan Top 3 on Codeforces", "Candidate Master"],
            rating: 1930,
            codeforces: "https://codeforces.com/profile/Ashar-Usmani",
            linkedin: "https://www.linkedin.com/in/muhammad-ashar-usmani/",
            image: "/Mentors/Ashar.jpg"
        },
        {
            name: "Abdul Ahad",
            tags: ["ICPC World Finalist", "Expert"],
            rating: 1656,
            codeforces: "https://codeforces.com/profile/abdul_ahad4",
            linkedin: "https://www.linkedin.com/in/abdul-ahad-munaf-354909203/",
            image: "/Mentors/AbdulAhad.jpg"
        },
        {
            name: "Valihasan Jalees",
            tags: ["Silver Medalist Ignite", "Expert"],
            rating: 1869,
            codeforces: "https://codeforces.com/profile/valiii",
            linkedin: "https://www.linkedin.com/in/valihasan-jalees/",
            image: "/Mentors/Valihasan.jpg"
        },
        {
            name: "Musaddiq Kamal",
            tags: ["Bronze Medalist Ignite", "Expert"],
            rating: 1696,
            codeforces: "https://codeforces.com/profile/Musaddiq",
            linkedin: "https://www.linkedin.com/in/musaddiq-kamal/",
            image: "/Mentors/Musaddiq.jpg"
        },
        {
            name: "Munnazzar",
            tags: ["Silver Medalist Ignite", "Specialist"],
            rating: 1496,
            codeforces: "https://codeforces.com/profile/munnazzar",
            linkedin: "https://www.linkedin.com/in/munnazzar-shahzad/",
            image: "/Mentors/Munnazzar.jpg"
        },
        {
            name: "Minhaj",
            tags: ["Bronze Medalist Ignite", "Specialist"],
            rating: 1439,
            codeforces: "https://codeforces.com/profile/minhaj03",
            linkedin: "https://www.linkedin.com/in/minhaj-mateen-302615285/",
            image: "/Mentors/Minhaj.jpg"
        },
    ];

    return (
        <div className='mt-12 space-y-8 p-8 max-w-7xl mx-auto' id="mentors">
            <h1 className='text-center text-5xl font-bold text-primaryblue underline decoration-primaryred decoration-8'>Mentors</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center items-stretch flex-wrap mt-12'>
                {mentors.map((lead, index) => (
                    <MentorsCard key={index} lead={lead} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Mentors