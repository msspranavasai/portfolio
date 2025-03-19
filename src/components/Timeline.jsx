import { FaGraduationCap, FaBriefcase, FaGlobe } from "react-icons/fa";
import isudc from "../assets/isudc-crop.png"

// Experience Data
const experienceData = [
    {
        title: "Software Engineer Intern",
        company: "SoftServe",
        duration: "July 2024 - Aug 2024",
        location: "Remote",
        style: { height: "80px", width: "250px" },
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgd5mGKTA94emdzkD4kyH3c_KAe1GFKImVag&s",
        description:
            "Developed and enhanced a Python library for converting instrument data into Allotrope Simple Model (ASM) JSON outputs. Improved parser support for various instruments and ensured compliance with ASM schema guidelines. Collaborated with the team to resolve schema discrepancies, improving data integrity.",
        skills: ["Python", "JSON", "Pandas", "Data Parsing"],
    },
    {
        title: "Undergraduate Teaching Assistant",
        company: "Iowa State University",
        duration: "Jan 2024 - Present",
        location: "Ames, IA",
        style: { height: "80px", width: "250px" },
        logo: isudc,
        description:
            "Led weekly office hours and lab sessions for 25+ students, assisting with debugging, problem-solving, and coding best practices. Provided one-on-one guidance, graded assignments, and reinforced core programming concepts.",
        courses_taed: ["COM S 1270 (Python)", "COM S 2270 (OOP in Java)", "COM S 2280 (Data Structures)", "COM S 3190 (Web Dev)"],
        skills: ["Python", "Java", "OOP", "Teaching"],
    },
];

// Education Data
const educationData = [
    {
        degree: "Bachelor's in Computer Science",
        school: "Iowa State University",
        duration: "Aug 2022 - May 2026",
        location: "Ames, IA",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrSK_wy6lALTHMOao_w9ITdD9A5ytxA_2YQ&s",
        description:
            "I'm pursuing a Bachelor's in Computer Science, taking courses in Machine Learning, Data Science, and AI. My studies focus on algorithm design, AI, and software development, along with hands-on experience in Python, Java, and SQL. I enjoy working on real-world projects that involve Mobile App Development, APIs, and data-driven solutions.",
        skills: [
            "Machine Learning", "Cybersecurity", "AI", "Data Science",
            "Software Development", "Algorithm Design", "Database Management",
            "Python", "Java", "SQL", "Cloud Computing", "API Development",
            "Data Visualization", "Penetration Testing", "Statistical Modeling",
            "System Architecture"
        ],
    }

];

// InclusiveWorld Data
const inclusiveWorldData = {
    title: "Instructor & Curriculum Developer",
    organization: "InclusiveWorld",
    duration: "2024 - Present",
    logo: "https://inclusiveworld.org/wp-content/uploads/2021/12/logoinclusiveNEW-1.png",
    description:
        "Designed and taught an inclusive mobile app development curriculum for differently-abled students. Integrated AI-powered accessibility features using OpenAI and generative models to enhance usability. Developed hands-on projects with Thunkable, empowering students to build functional applications. Provided mentorship in AI-driven accessibility solutions, fostering an inclusive learning environment.",
    skills: ["Mobile Development", "AI Integration", "Inclusive Tech", "Teaching"],
};

// const Timeline = () => {
//     return (
//         <div className="py-12">
//             <h2 className="text-4xl font-bold text-center mb-10">Experience & Education</h2>

//             {/* FLEX CONTAINER TO PREVENT OVERLAP */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

//                 {/* EXPERIENCE SECTION */}
//                 <div className="relative">
//                     <h3 className="text-2xl font-semibold mb-6 flex items-center">
//                         <FaBriefcase className="mr-2 text-blue-600" /> Experience
//                     </h3>

//                     {/* Vertical Timeline Line */}
//                     <div className="absolute left-3 top-0 h-210 mt-12 w-[3px] bg-blue-500"></div>

//                     {experienceData.map((exp, index) => (
//                         <div key={index} className="relative flex items-start gap-6 mb-8">
//                             <div className="w-6 h-6 bg-blue-600 rounded-full ml-1 mt-5 absolute left-[-3px]"></div>

//                             <div className="p-5 bg-white shadow-md rounded-lg border-l-4 border-blue-600 w-full ml-8">
//                                 <img src={exp.logo} style={exp.style} alt={exp.title} /> <br />
//                                 <h4 className="text-xl font-bold">{exp.title}</h4>
//                                 <p className="text-gray-700">{exp.company} | {exp.duration}</p>
//                                 <p className="text-gray-600 italic">{exp.location}</p>
//                                 <p className="mt-2">{exp.description}</p>

//                                 {/* Display Courses for UGTA Role */}
//                                 {exp.courses_taed && (
//                                     <p className="mt-2 text-gray-700 font-semibold">Courses TA:<br />
//                                         <span className="ml-0 text-gray-600">{exp.courses_taed.join(", ")}</span>
//                                     </p>
//                                 )}

//                                 <div className="mt-3 flex flex-wrap gap-2">
//                                     {exp.skills.map((skill, i) => (
//                                         <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">
//                                             {skill}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* EDUCATION SECTION */}
//                 <div className="relative">
//                     <h3 className="text-2xl font-semibold mb-6 flex items-center">
//                         <FaGraduationCap className="mr-2 text-green-600" /> Education
//                     </h3>

//                     {/* Vertical Timeline Line */}
//                     <div className="absolute left-3 top-0 mt-12 h-120 w-[3px] bg-green-500"></div>

//                     {educationData.map((edu, index) => (
//                         <div key={index} className="relative flex items-start gap-6 mb-8">
//                             <div className="w-6 h-6 bg-green-600 rounded-full absolute ml-1 mt-5 left-[-3px]"></div>

//                             <div className="p-5 bg-white shadow-md rounded-lg border-l-4 border-green-600 w-full ml-8">
//                                 <img src={edu.logo} style={{ height: "40px" }} alt="IowaStateUniversity" /> <br />
//                                 <h4 className="text-xl font-bold">{edu.degree}</h4>
//                                 <p className="text-gray-700">{edu.school} | {edu.duration}</p>
//                                 <p className="text-gray-600 italic">{edu.location}</p>
//                                 <p className="mt-2">{edu.description}</p>
//                                 <div className="mt-3 flex flex-wrap gap-2">
//                                     {edu.skills.map((skill, i) => (
//                                         <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">
//                                             {skill}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>

//             {/* INCLUSIVE WORLD SECTION */}
//             <div className="mt-12">
//                 <h3 className="text-2xl font-semibold mb-6 flex items-center">
//                     <FaGlobe className="mr-2 text-purple-600" /> Volunteer Contribution
//                 </h3>

//                 <div className="p-5 bg-white shadow-md rounded-lg border-l-4 border-purple-600 w-full">
//                     <img src={inclusiveWorldData.logo} style={{ height: "80px", width: "240px" }} alt={inclusiveWorldData.title} />
//                     <h4 className="text-xl font-bold">{inclusiveWorldData.title}</h4>
//                     <p className="text-gray-700">{inclusiveWorldData.organization} | {inclusiveWorldData.duration}</p>
//                     <p className="mt-2">{inclusiveWorldData.description}</p>
//                     <div className="mt-3 flex flex-wrap gap-2">
//                         {inclusiveWorldData.skills.map((skill, i) => (
//                             <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">
//                                 {skill}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Timeline;

const Timeline = () => {
    return (
        <div className="py-12 px-6 md:px-10 lg:px-16">
            <h2 className="text-4xl font-bold text-center mt-15 mb-10">Experience & Education</h2>

            {/* ✅ Grid Layout for Large Screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">

                {/* EXPERIENCE SECTION */}
                <div className="relative">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                        <FaBriefcase className="mr-2 text-blue-600" /> Experience
                    </h3>

                    {/* Timeline Line beside Experience */}
                    <div
                        className="hidden lg:block absolute left-3 mt-15 top-0 w-[3px] bg-blue-500"
                        style={{ height: `${experienceData.length * 425}px` }} // Dynamic Height
                    ></div>

                    {experienceData.map((exp, index) => (
                        <div key={index} className="relative flex items-start gap-6 mb-8">
                            {/* Timeline Dot */}
                            <div className="hidden lg:flex w-6 h-6 bg-blue-600 rounded-full absolute left-[1px] top-6"></div>

                            <div className="p-5 bg-white shadow-md rounded-lg border-l-4 border-blue-600 w-full ml-8">
                                <img src={exp.logo} style={exp.style} alt={exp.title} className="mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-center">{exp.title}</h4>
                                <p className="text-gray-700 text-center">{exp.company} | {exp.duration}</p>
                                <p className="text-gray-600 italic text-center">{exp.location}</p>
                                <p className="mt-2 text-center">{exp.description}</p>

                                {exp.courses_taed && (
                                    <p className="mt-2 text-gray-700 font-semibold text-center">Courses TA:<br />
                                        <span className="text-gray-600">{exp.courses_taed.join(", ")}</span>
                                    </p>
                                )}

                                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* EDUCATION SECTION */}
                <div className="relative">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                        <FaGraduationCap className="mr-2 text-green-600" /> Education
                    </h3>

                    {/* ✅ Fixed: Timeline Line beside Education */}
                    <div
                        className="hidden lg:block absolute left-3 mt-15 top-0 w-[3px] bg-green-500"
                        style={{ height: `${educationData.length * 500}px` }} // Dynamic Height
                    ></div>

                    {educationData.map((edu, index) => (
                        <div key={index} className="relative flex items-start gap-6 mb-8">
                            {/* Timeline Dot */}
                            <div className="hidden lg:flex w-6 h-6 bg-green-600 rounded-full absolute left-[1px] top-6"></div>

                            <div className="p-5 bg-white shadow-md rounded-lg border-l-4 border-green-600 w-full ml-8">
                                <img src={edu.logo} style={{ height: "50px" }} alt="University" className="mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-center">{edu.degree}</h4>
                                <p className="text-gray-700 text-center">{edu.school} | {edu.duration}</p>
                                <p className="text-gray-600 italic text-center">{edu.location}</p>
                                <p className="mt-2 text-center">{edu.description}</p>
                                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                                    {edu.skills.map((skill, i) => (
                                        <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ✅ InclusiveWorld Below */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <FaGlobe className="mr-2 text-purple-600" /> Volunteer Contribution
                </h3>

                <div className="p-5 bg-white shadow-md rounded-lg border-l-4 border-purple-600 w-full">
                    <img src={inclusiveWorldData.logo} style={{ height: "80px", width: "240px" }} alt={inclusiveWorldData.title} className="mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-center">{inclusiveWorldData.title}</h4>
                    <p className="text-gray-700 text-center">{inclusiveWorldData.organization} | {inclusiveWorldData.duration}</p>
                    <p className="mt-2 text-center">{inclusiveWorldData.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2 justify-center">
                        {inclusiveWorldData.skills.map((skill, i) => (
                            <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Timeline;