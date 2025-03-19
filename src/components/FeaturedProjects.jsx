import { FaProjectDiagram, FaCode, FaMusic, FaFilm, FaRobot, FaGamepad } from "react-icons/fa";

const projects = [
    {
        title: "RiffRadar",
        description: "An innovative Android app designed to enhance the concert-going experience by simplifying ticket purchasing and event planning. Users can browse concerts, purchase tickets, and manage schedules with real-time updates and seamless ticket integration.",
        techStack: ["Java", "External API", "MySQL", "Websockets"],
        image: "src/assets/projects/radar.png",
        date: "Jan 2024 - May 2024",
        link: "https://drive.google.com/file/d/1IP2S-tGqmLZWMsyaH4BO5EBswIaA4chn/view",
        icon: <FaMusic className="text-blue-500 text-2xl" />
    },
    {
        title: "CineScope",
        description: "A dynamic movie recommendation website covering films from 2001 to 2024 across multiple languages. Built using React.js and Node.js, it offers personalized recommendations and an intuitive user interface.",
        techStack: ["React.js", "Node.js", "MongoDB"],
        image: "src/assets/projects/ca.png",
        date: "Jan 2024 - May 2024",
        link: "https://drive.google.com/file/d/19Y-h6HdeeraqWB2rMyukbP3AuGzps10T/view",
        icon: < FaFilm className="text-red-500 text-2xl" />
    },
    {
        title: "Archive Message Reconstructor",
        description: "A data reconstruction tool that processes encoded messages, using Java and Data Structures for decoding and pattern recognition.",
        techStack: ["Java", "Data Structures"],
        image: "src/assets/projects/monalisa.png",
        date: "Nov 2023 - Dec 2023",
        link: "https://github.com/pranava-sai/BinaryTreeMessageDecoder",
        icon: <FaRobot className="text-indigo-500 text-2xl" />
    },
    {
        title: "Interactive Puzzle Game",
        description: "A Java-based interactive puzzle-solving game featuring OOP principles and algorithmic problem-solving to engage players in logical challenges.",
        techStack: ["Java", "OOP"],
        image: "src/assets/projects/puzzle.png",
        date: "Mar 2023 - Apr 2023",
        link: "https://github.com/pranava-sai/InteractivePuzzleGame",
        icon: <FaCode className="text-orange-500 text-2xl" />
    },
    {
        title: "CommandTune",
        description: "A command-line music player that enables users to play, pause, and navigate songs using keyboard commands. Developed using Python and PyGame for seamless audio control.",
        techStack: ["Python", "PyGame"],
        image: "src/assets/projects/ct.png",
        date: "Nov 2022 - Dec 2022",
        link: "https://drive.google.com/file/d/1c_PkSsZt3kQ0bmO7kpO4EJl2kVfA7VPu/view",
        icon: <FaMusic className="text-green-500 text-2xl" />
    },
    {
        title: "Dungeon Crawl",
        description: "A turn-based combat and exploration game featuring strategic player choices and immersive narrative elements, developed in a terminal-based Python interface.",
        techStack: ["Python"],
        image: "src/assets/projects/dc.png",
        date: "Oct 2022 - Nov 2022",
        link: "https://github.com/pranava-sai/DungeonCrawlPyGame",
        icon: <FaGamepad className="text-purple-500 text-2xl" />
    },
];

// const FeaturedProjects = () => {
//     console.log("Projects Data:", projects); // ✅ Debugging to ensure data is loaded

//     return (
//         <div className="py-12 px-6 md:px-10 lg:px-16">
//             <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center">
//                 <FaProjectDiagram className="text-blue-500 mr-2" /> Featured Projects
//             </h2>

//             <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
//                 {/* ✅ Timeline Line - Only for Large Screens */}
//                 <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gray-300 top-0 bottom-0"></div>

//                 {projects.map((project, index) => (
//                     <div key={index} className="relative flex w-full md:w-[100%] items-center">
//                         {/* ✅ Timeline Icon */}
//                         <div className="hidden md:flex w-10 h-10 bg-white border-2 border-blue-600 rounded-full items-center justify-center shadow-md absolute left-1/2 transform -translate-x-1/2">
//                             {project.icon && project.icon}
//                         </div>

//                         {/* ✅ Alternating Left-Right Layout */}
//                         <div className={`bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 w-full md:w-[45%] ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
//                             {/* ✅ Project Image */}
//                             {project.image && (
//                                 <img
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="w-32 md:w-40 lg:w-48 h-auto mb-4 rounded-lg"
//                                 />
//                             )}

//                             {/* ✅ Project Title */}
//                             <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
//                             <p className="text-gray-700 text-sm md:text-base">{project.description}</p>

//                             {/* ✅ Tech Stack */}
//                             <div className="flex flex-wrap gap-2 my-3">
//                                 {project.techStack?.map((tech, i) => (
//                                     <span key={i} className="px-3 py-1 bg-gray-200 text-sm rounded-full">{tech}</span>
//                                 ))}
//                             </div>

//                             {/* ✅ Date & Link */}
//                             <p className="text-gray-500 text-xs mt-1">{project.date}</p>
//                             <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition inline-block">
//                                 {project.link.includes("github.com") ? "View on GitHub" : "Watch Demo"}
//                             </a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FeaturedProjects;

const FeaturedProjects = () => {
    return (
        <div className="py-12 px-6 md:px-10 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center">
                <FaProjectDiagram className="text-blue-500 mr-2" /> Featured Projects
            </h2>

            <div className="relative grid grid-cols-1 gap-10 md:max-w-3xl lg:max-w-4xl mx-auto">
                {/* ✅ Timeline Line - Only for Large Screens */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gray-300 top-0 bottom-0"></div>

                {projects.map((project, index) => (
                    <div key={index} className="relative flex items-center w-full">
                        {/* ✅ Timeline Icon */}
                        <div className="hidden md:flex w-10 h-10 bg-white border-2 border-blue-600 rounded-full items-center justify-center shadow-md absolute left-1/2 transform -translate-x-1/2">
                            {project.icon && project.icon}
                        </div>

                        {/* ✅ Date Text Positioned Next to Icons */}
                        <div className={`hidden md:block absolute text-gray-600 text-sm ${index % 2 === 0 ? "left-[56%]" : "right-[56%]"}`}>
                            {project.date}
                        </div>

                        {/* ✅ Alternating Left-Right Layout */}
                        <div className={`bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 w-[100%] md:w-[45%] ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                            {/* ✅ Project Image */}
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-32 md:w-40 lg:w-48 h-auto mb-4 rounded-lg mx-auto"
                                />
                            )}

                            {/* ✅ Project Title */}
                            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                            <p className="text-gray-700 text-sm md:text-base">{project.description}</p>

                            {/* ✅ Tech Stack */}
                            <div className="flex flex-wrap gap-2 my-3">
                                {project.techStack?.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-200 text-sm rounded-full">{tech}</span>
                                ))}
                            </div>

                            {/* ✅ View Project Button */}
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition inline-block">
                                {project.link.includes("github.com") ? "View on GitHub" : "Watch Demo"}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProjects;