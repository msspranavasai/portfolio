import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import Technologies from "./Technologies"


// const About = () => {
//     return (
//         <div className="pb-4">
//             <h1 className="my-20 text-center text-4xl">About
//                 <span className="text-neutral-500"> Me</span>
//             </h1>
//             <div className="flex flex-wrap">
//                 <div className="w-full lg:w-1/2 lg:p-8">
//                     <div className="flex items-center justify-center">
//                         <img src={aboutImg} alt="about" className="w-130 h-130 rounded-lg shadow-lg" />
//                     </div>
//                 </div>
//                 <div className="w-full lg:w-1/2 mt-2">
//                     <div className="flex justify-center lg:justify-start">
//                         <p className="my-2 max-w-xl py-6 font-light tracking-lighter text-xl">{ABOUT_TEXT}</p>
//                     </div>
//                 </div>
//             </div>

//             <Technologies />

//         </div>
//     )
// }

// export default About

const About = () => {
    return (
        <div className="pb-12 px-6 md:px-10 lg:px-16">
            <h1 className="mt-30 mb-20 text-center text-4xl font-bold">
                About <span className="text-neutral-500">Me</span>
            </h1>

            {/* Responsive Layout: Image & Text */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                {/* ✅ Centered Image on Mobile, Left-Aligned on Large Screens */}
                <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
                    <img
                        src={aboutImg}
                        alt="About Me"
                        className="w-64 md:w-80 lg:w-96 h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* ✅ Text Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <p className="text-lg text-gray-700 max-w-2xl leading-relaxed tracking-wide">
                        {ABOUT_TEXT}
                    </p>
                </div>
            </div>

            {/* ✅ Technologies Section (Properly Positioned) */}
            <div className="mt-12">
                <Technologies />
            </div>
        </div>
    );
};

export default About;