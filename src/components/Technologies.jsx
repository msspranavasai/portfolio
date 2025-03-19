import {
    FaPython, FaJava, FaDatabase, FaAndroid, FaApple, FaCss3, FaGithub, FaGitlab,
    FaHtml5, FaLinux, FaWindows, FaAws, FaReact, FaNodeJs
} from "react-icons/fa";
import {
    SiKotlin, SiMysql, SiMongodb, SiFirebase, SiKaggle, SiLatex, SiNeo4J, SiMacos, SiNpm, SiNodemon, SiScikitlearn, SiPandas, SiNumpy, SiOpenai, SiPostman, SiBitbucket
} from "react-icons/si";
import { RiJavascriptLine, RiTailwindCssLine } from "react-icons/ri";
import { BiLogoCPlusPlus, BiCodeCurly } from "react-icons/bi"
import { motion } from "framer-motion";

// // Categories Data
// const categories = [
//     {
//         title: "Programming Languages",
//         icons: [FaPython, FaJava, SiKotlin, RiJavascriptLine, FaHtml5, FaCss3, BiLogoCPlusPlus, BiCodeCurly, SiLatex]
//     },
//     {
//         title: "Frameworks & Libraries",
//         icons: [FaReact, FaNodeJs, RiTailwindCssLine, SiOpenai, SiNpm, SiNodemon]
//     },
//     {
//         title: "Mobile Development & APIs",
//         icons: [FaAndroid, FaApple, SiPostman]
//     },
//     {
//         title: "Databases & Storage",
//         icons: [SiMysql, SiMongodb, SiFirebase, FaDatabase, FaAws, SiNeo4J]
//     },
//     {
//         title: "Machine Learning & Data Science",
//         icons: [SiScikitlearn, SiPandas, SiNumpy, SiKaggle]
//     },
//     {
//         title: "Version Control & Collaboration",
//         icons: [FaGithub, FaGitlab, SiBitbucket]
//     },
//     {
//         title: "Operating Systems",
//         icons: [FaLinux, FaWindows, SiMacos]
//     }
// ];

const categories = [
    {
        title: "Programming Languages",
        icons: [
            { icon: FaPython, color: "#3776AB", title: "Python", description: "High-level programming language" },
            { icon: FaJava, color: "#007396", title: "Java", description: "Object-Oriented Programming" },
            { icon: SiKotlin, color: "#7F52FF", title: "Kotlin", description: "Modern Android development" },
            { icon: RiJavascriptLine, color: "#F7DF1E", title: "JavaScript", description: "Web development language" },
            { icon: FaHtml5, color: "#E34F26", title: "HTML", description: "Markup language for web" },
            { icon: FaCss3, color: "#1572B6", title: "CSS", description: "Stylesheet language for web" },
            { icon: BiLogoCPlusPlus, color: "#00599C", title: "C++", description: "Object-Oriented Programming" },
            { icon: BiCodeCurly, color: "#6A737D", title: "C", description: "Low-level programming language" },
            { icon: SiLatex, color: "#008080", title: "LaTeX", description: "Typesetting system for documents" }
        ]
    },
    {
        title: "Databases & Storage",
        icons: [
            { icon: SiMysql, color: "#4479A1", title: "MySQL", description: "Relational database" },
            { icon: SiMongodb, color: "#47A248", title: "MongoDB", description: "NoSQL document database" },
            { icon: SiFirebase, color: "#FFCA28", title: "Firebase", description: "Google’s backend platform" },
            { icon: FaDatabase, color: "#FF9900", title: "SQL Databases", description: "Structured data storage" },
            { icon: FaAws, color: "#FF9900", title: "AWS S3", description: "Cloud storage service" },
            { icon: SiNeo4J, color: "#008CC1", title: "Neo4j", description: "Graph database" }
        ]
    },
    {
        title: "Frameworks & Libraries",
        icons: [
            { icon: FaReact, color: "#61DAFB", title: "React", description: "JavaScript UI library" },
            { icon: FaNodeJs, color: "#68A063", title: "Node.js", description: "JavaScript runtime for backend" },
            { icon: RiTailwindCssLine, color: "#06B6D4", title: "Tailwind CSS", description: "CSS framework" },
            { icon: SiOpenai, color: "#3B5998", title: "OpenAI", description: "AI research and tools" },
            { icon: SiNpm, color: "#CB3837", title: "NPM", description: "JavaScript package manager" },
            { icon: SiNodemon, color: "#76D04B", title: "Nodemon", description: "Auto-restart Node.js server" }
        ]
    },
    {
        title: "Machine Learning & Data Science",
        icons: [
            { icon: SiScikitlearn, color: "#F89939", title: "Scikit-learn", description: "ML library for Python" },
            { icon: SiPandas, color: "#150458", title: "Pandas", description: "Data analysis library" },
            { icon: SiNumpy, color: "#013243", title: "NumPy", description: "Scientific computing library" },
            // { icon: SiKaggle, color: "#20BEFF", title: "Kaggle", description: "ML & Data Science platform" }
        ]
    },
    {
        title: "Version Control & Collaboration",
        icons: [
            { icon: FaGithub, color: "#181717", title: "GitHub", description: "Version control hosting" },
            { icon: FaGitlab, color: "#FCA121", title: "GitLab", description: "DevOps platform" },
            { icon: SiBitbucket, color: "#0052CC", title: "Bitbucket", description: "Git repository hosting" }
        ]
    },
    {
        title: "Operating Systems",
        icons: [
            { icon: FaLinux, color: "#FCC624", title: "Linux", description: "Open-source OS" },
            { icon: FaWindows, color: "#0078D6", title: "Windows", description: "Microsoft OS" },
            { icon: SiMacos, color: "#000000", title: "macOS", description: "Apple desktop OS" }
        ]
    },
    {
        title: "Mobile Development & APIs",
        icons: [
            { icon: FaAndroid, color: "#3DDC84", title: "Android", description: "Mobile OS by Google" },
            { icon: FaApple, color: "#A2AAAD", title: "iOS", description: "Apple’s mobile OS" },
            { icon: SiPostman, color: "#FF6C37", title: "Postman", description: "API development tool" }
        ]
    },
];


// 🏗️ Main Component
const Technologies = () => {
    return (
        <div className="pb-16 px-6">
            <h1 className="text-center text-4xl font-bold mb-10">Technologies & Skills</h1>

            {/* 🏗️ FLEX GRID: Programming Languages - One Full Row */}
            <div className="flex flex-wrap justify-center">
                {categories
                    .filter(category => category.title === "Programming Languages")
                    .map((category, index) => (
                        <div key={index} className="text-center bg-gray-100 p-8 rounded-lg shadow-md w-full">
                            <h2 className="mb-4 text-2xl font-semibold text-neutral-900">{category.title}</h2>

                            <div
                                className="grid gap-6 justify-center"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`, // ✅ Dynamic columns for mobile
                                    maxWidth: "100%", // ✅ Prevents overflow
                                    margin: "0 auto",
                                    placeItems: "center",
                                }}
                            >
                                {category.icons.map(({ icon: Icon, color, title, description }, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex flex-col items-center justify-center rounded-lg p-4 border border-gray-300 bg-white shadow-sm h-32 w-32 md:w-28"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {Icon && <Icon className="text-4xl" style={{ color: color }} />}
                                        <p className="mt-2 text-sm font-medium text-gray-900">{title}</p>
                                        {description && <p className="text-xs text-gray-600 text-center leading-tight">{description}</p>}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>

            {/* 🏗️ FLEX GRID: Databases & Frameworks - One Row or Two Rows */}
            <div className="flex flex-wrap justify-center mt-10 gap-8">
                {categories
                    .filter(category => category.title === "Databases & Storage" || category.title === "Frameworks & Libraries")
                    .map((category, index) => (
                        <div key={index} className="text-center bg-gray-100 p-8 rounded-lg shadow-md"
                            style={{
                                flex: "1 1 100%",  // ✅ Full width on mobile
                                maxWidth: "clamp(280px, 80%, 550px)",  // ✅ Dynamically adjusts width
                                md: { flex: "1 1 45%" },  // ✅ Two columns on desktops
                            }}

                        >
                            <h2 className="mb-4 text-2xl font-semibold text-neutral-900">{category.title}</h2>

                            <div
                                className="grid gap-6 justify-center"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`,
                                    maxWidth: "600px",
                                    placeItems: "center",
                                }}
                            >
                                {category.icons.map(({ icon: Icon, color, title, description }, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex flex-col items-center justify-center rounded-lg p-4 border border-gray-300 bg-white shadow-sm h-32 w-28"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {Icon && <Icon className="text-4xl" style={{ color: color }} />}
                                        <p className="mt-2 text-sm font-medium text-gray-900">{title}</p>
                                        {description && <p className="text-xs text-gray-600 text-center leading-tight">{description}</p>}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>

            {/* 🏗️ FLEX GRID: Remaining Categories - Fit into One Row */}
            <div className="flex flex-wrap mt-10 justify-center gap-8">
                {categories
                    .filter(category =>
                        category.title !== "Programming Languages" &&
                        category.title !== "Databases & Storage" &&
                        category.title !== "Frameworks & Libraries"
                    )
                    .map((category, index) => (
                        <div key={index} className="text-center bg-gray-100 p-8 rounded-lg shadow-md"
                            style={{
                                flex: "1 1 100%",  // ✅ Full width on mobile
                                maxWidth: "clamp(280px, 80%, 550px)",  // ✅ Dynamically adjusts width
                                md: { flex: "1 1 45%" },  // ✅ Two columns on desktops
                            }}
                        >
                            <h2 className="mb-4 text-2xl font-semibold text-neutral-900">{category.title}</h2>

                            <div
                                className="grid gap-6 justify-center"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`,
                                    maxWidth: "450px",
                                    placeItems: "center",
                                }}
                            >
                                {category.icons.map(({ icon: Icon, color, title, description }, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex flex-col items-center justify-center rounded-lg p-4 border border-gray-300 bg-white shadow-sm h-32 w-28"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        {Icon && <Icon className="text-4xl" style={{ color: color }} />}
                                        <p className="mt-2 text-sm font-medium text-gray-900">{title}</p>
                                        {description && <p className="text-xs text-gray-600 text-center leading-tight">{description}</p>}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>

        </div >
    );
};

export default Technologies;