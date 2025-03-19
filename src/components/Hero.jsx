// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/pranava.png";
// import FeaturedProjects from "./FeaturedProjects";
// import Achievements from "./Achievements";
// import Hobbies from "./Hobbies";
// import Type from "./Type";

// const Hero = () => {
//     return (
//         <div className="px-10 mt-20 lg:px-16">
//             {/* Hero Section */}
//             <div className="pb-4 lg:mb-35 flex flex-col-reverse lg:flex-row items-center lg:items-start">

//                 {/* Left Section (Text & Icons) */}
//                 <div className="lg:w-1/2">
//                     <h1 className="pb-4 text-6xl font-extrabold tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-violet-700 via-pink-600 to-purple-800 bg-clip-text text-transparent">
//                         Pranava Sai
//                     </h1>
//                     <span className="bg-gradient-to-r from-violet-500 via-pink-400 to-purple-600 bg-clip-text text-transparent text-4xl inline-block">
//                         <Type />
//                     </span>

//                     {/* About Content */}
//                     <p className="my-2 max-w-xl py-6 font-light tracking-tight text-xl">
//                         {HERO_CONTENT}
//                     </p>
//                 </div>

//                 {/* Right Section (Profile Image) */}
//                 <div className="lg:w-1/2 lg:p-7 flex justify-center">
//                     <img
//                         src={profilePic}
//                         alt="Pranava"
//                         className="w-110 h-110 rounded-lg shadow-lg object-cover"
//                     />
//                 </div>
//             </div>

//             <FeaturedProjects />
//             <Achievements />
//             <Hobbies />
//         </div>
//     );
// };

// export default Hero;


import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pranava.png";
import FeaturedProjects from "./FeaturedProjects";
import Achievements from "./Achievements";
import Hobbies from "./Hobbies";
import Type from "./Type";

const Hero = () => {
    return (
        <div className="px-6 md:px-10 lg:px-16 text-center md:text-left">
            {/* Hero Section */}
            <div className="flex flex-col-reverse md:flex-row items-center">

                {/* ✅ Left Section (Text & Icons) */}
                <div className="md:w-1/2 mt-30">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-violet-700 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                        Pranava Sai
                    </h1>
                    <span className="text-xl md:text-3xl inline-block bg-gradient-to-r from-violet-500 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                        <Type />
                    </span>

                    {/* ✅ About Content - More Responsive */}
                    <p className="text-lg md:text-xl lg:text-2xl my-4 max-w-lg md:max-w-xl font-light tracking-tight">
                        {HERO_CONTENT}
                    </p>
                </div>

                {/* ✅ Right Section (Profile Image) */}
                <div className="lg:w-1/2 mt-30 flex justify-center md:justify-end">
                    <img
                        src={profilePic}
                        alt="Pranava"
                        className="w-110 h-110 lg:w-100 rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>

            {/* ✅ Sections Below Hero */}
            <FeaturedProjects />
            <Achievements />
            <Hobbies />
        </div>
    );
};

export default Hero;
