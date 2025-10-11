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

                    <Link href={workshop.contestLink} className={`text-primaryred text-sm ${workshop.contestLink === "#" ? "cursor-default" : "hover:underline"}`}>{workshop.contestLink === "#" ? "Registrations for the contest are not open yet" : "Join Contest"}</Link>
                </div>
            </div>
        </div>
    );
}

const Workshops = () => {
    const workshops = [
        {
            week: "st", title: "Intro to C++ and STL Basics", contestLink: "#", tags: [
                "C++Basics", "STL", "VectorsVsArrays", "CP", "FastIO",
            ]
        },
        {
            week: "nd", title: "Basic Maths + Arrays", contestLink: "#", tags: [
                "MathForCP", "PrimeNumbers", "ArrayBasics", "ElementaryMath", "LogicBuilding",
            ]
        },
        {
            week: "rd", title: "Time Complexity and Running Time", contestLink: "#", tags: [
                "TimeComplexity", "BigO", "RuntimeAnalysis", "OptimizationTricks",
            ]
        },
        {
            week: "th", title: "Intro to STL Data Structures", contestLink: "#", tags: [
                "STLStructures", "StackQueue", "PriorityQueue", "DSInCP", "HandsOnSTL",
            ]
        },
        {
            week: "th", title: "Intro to Sets & Maps", contestLink: "#", tags: [
                "SetsAndMaps", "STLUsage", "Hashing", "ComplexityMyths", "EfficientLookup",
            ]
        },
        {
            week: "th", title: "Common Sorting Algorithms", contestLink: "#", tags: [
                "Sorting", "MergeSort", "QuickSort", "SortingComplexity", "WhyWeSort",
            ]
        },
        {
            week: "th", title: "Greedy Problems", contestLink: "#", tags: [
                "GreedyAlgorithms", "GreedyChoice", "ProblemSolving", "WhenGreedyWorks", "GreedyVsDP"
            ]
        },
        {
            week: "th", title: "Binary Search", contestLink: "#", tags: [
                "BinarySearch", "OptimalSearch", "DivideAndConquer", "SearchAlgorithms", "BicycleStory",
            ]
        }
    ];
    return (
        <div className='p-8 space-y-8' id="workshops">
            <div>
                <h1 className='text-center text-5xl font-bold text-primaryblue underline decoration-primaryred decoration-8'>Workshops Itinerary</h1>
                <p className='text-center text-primaryblue mt-4 w-full sm:w-2/3 mx-auto'>Join us for a series of engaging workshops designed to elevate your programming skills. Our workshops cover a range of topics to assist you grow and succeed in the tech world.</p>
            </div>
            <div className='grid lg:grid-cols-2 justify-center items-center gap-4'>
                {workshops.map((workshop, index) => (
                    <WorkshopCard key={index} workshop={workshop} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Workshops