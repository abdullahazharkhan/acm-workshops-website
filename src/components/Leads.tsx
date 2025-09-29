import React from 'react'

const LeadsCard = ({ lead, index }: any) => {
    return (
        <div
            className={`relative rounded-lg border-4 border-primaryred
                 bg-center bg-cover bg-no-repeat h-72 md:h-80 my-4 min-[490px]:my-0 w-[300px] min-[490px]:w-[200px] md:w-[250px] lg:w-[300px] ${index === 1 ? "min-[705px]:-mt-12" : ""}`}
            style={{ backgroundImage: `url(${lead.image})` }}
        >
            <div className="bg-white px-2 md:px-4 py-1 rounded absolute -bottom-5
                      mx-auto translate-x-1/2 right-1/2 shadow-md
                      w-[200px] ]md:w-[250px] flex items-center flex-col justify-center">
                <h1 className="text-primaryblue font-bold text-md md:text-xl">{lead.name}</h1>
                <h1 className="text-primaryred font-light text-sm md:text-base">{lead.role}</h1>
            </div>
        </div>
    );
};

const Leads = () => {
    const leads = [
        {
            name: "Ammar Kaboolio",
            role: "Technical Co-Lead",
            image: "/leads/Taaha.jpg"
        },
        {
            name: "Asfandyar Khanzada",
            role: "Technical Lead",
            image: "/leads/Taaha.jpg"
        },
        {
            name: "Muhammad Taaha",
            role: "Technical Co-Lead",
            image: "/leads/Taaha.jpg"
        }
    ];
    return (
        <div className='mt-12 space-y-8 p-8'>
            <h1 className='text-center text-5xl font-bold text-primaryblue underline decoration-primaryred decoration-8'>Leading the Charge</h1>
            <div className='flex gap-4 justify-center items-center flex-wrap mt-16'>
                {leads.map((lead, index) => (
                    <LeadsCard key={index} lead={lead} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Leads