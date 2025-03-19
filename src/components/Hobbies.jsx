import React from 'react';
import { MdFlight, MdOutlineInterests } from 'react-icons/md';
import { FaMusic, FaPlaneDeparture } from 'react-icons/fa';
import { BiMoviePlay, BiSwim } from 'react-icons/bi';

const hobbies = [
    {
        icon: <FaPlaneDeparture className="text-blue-500 text-4xl" />,
        name: "Travelling",
    },
    {
        icon: <MdFlight className="text-yellow-500 text-4xl" />,
        name: "Flight Simulation",
    },
    {
        icon: <FaMusic className="text-purple-500 text-4xl" />,
        name: "Music",
    },
    {
        icon: <BiMoviePlay className="text-red-500 text-4xl" />,
        name: "Movies",
    },
    {
        icon: <BiSwim className="text-teal-500 text-4xl" />,
        name: "Swimming",
    }
];

// const Hobbies = () => {
//     return (
//         <div className="py-12 text-center">
//             <h2 className="text-3xl font-bold flex items-center justify-center mb-10">
//                 <MdOutlineInterests className="text-yellow-500 mr-2 text-4xl" /> Hobbies
//             </h2>

//             {/* Grid Layout for Hobby Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
//                 {hobbies.map((hobby, index) => (
//                     <div key={index} className="p-6 bg-white shadow-md rounded-lg border-l-4 border-yellow-700 text-black w-60 text-center">
//                         <div className="flex justify-center">{hobby.icon}</div>
//                         <p className="text-xl font-semibold mt-2">{hobby.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Hobbies;

const Hobbies = () => {
    return (
        <div className="py-12 text-center">
            <h2 className="text-3xl font-bold flex items-center justify-center mb-10">
                <MdOutlineInterests className="text-yellow-500 mr-2 text-4xl" /> Hobbies
            </h2>

            {/* ✅ Responsive Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 justify-center">
                {hobbies.map((hobby, index) => (
                    <div key={index} className="p-6 bg-white shadow-md rounded-lg border-l-4 border-yellow-600 text-black w-[100%] md:w-[100%] lg:w-[100%] mx-auto flex flex-col items-center">
                        {hobby.icon}
                        <p className="text-lg font-semibold mt-3">{hobby.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hobbies;
