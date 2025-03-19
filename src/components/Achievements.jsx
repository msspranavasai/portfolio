import { FaAward } from "react-icons/fa";
import deans2025 from "../assets/Deans-2024.png"

const achievements = [
    {
        title: "Dean's List",
        description: "Recognized for outstanding academic performance.",
        count: 4,
        image: deans2025,
        semesters: "Fall 2022, Spring 2023, Spring 2024, Fall 2024"
    },
    {
        title: "Student Employee Of The Year (Nominee)",
        description: "Nominated for the Student Employee of the Year Award at Iowa State University for exceptional contributions as an Undergraduate Teaching Assistant for COM S 1270. Recognized for leadership, collaboration, and dedication to student success, including conducting review sessions, assisting with labs, and improving course materials",
        count: 1,
        semesters: "2024"
    }
];

const Achievements = () => {
    return (
        <div className="py-12 px-6 md:px-10 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center">
                <FaAward className="text-yellow-500 mr-2" /> Achievements
            </h2>

            {/* ✅ Responsive Grid: 1 Column (Mobile), 2 Columns (Large Screens) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className={`bg-white shadow-md rounded-lg p-6 flex flex-col border-l-4 border-yellow-500 items-center h-[100%] ${achievement.image ? "w-[100%]" : "md:w-[100%] lg:w-[100%] min-h-[400px] flex justify-center"
                            }`}
                    >
                        {/* ✅ Centered Count Above the Image */}
                        <div className="text-3xl font-bold text-gray-900 mb-4 text-center">
                            {achievement.count}
                        </div>

                        {/* ✅ Conditionally Render Image */}
                        {achievement.image && (
                            <img
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-100 h-auto rounded-md mb-4"
                            />
                        )}

                        {/* ✅ Achievement Title and Semester Info */}
                        <h3 className={`text-xl md:text-2xl font-semibold text-gray-900 text-center ${!achievement.image ? "text-3xl" : ""}`}>
                            {achievement.title}
                        </h3>
                        <p className="text-md md:text-lg text-gray-600 italic text-center">{achievement.semesters}</p>

                        {/* ✅ Enhanced Description for Non-Image Cards */}
                        <p className={`text-gray-700 mt-3 text-center ${!achievement.image ? "text-lg leading-relaxed md:text-xl" : ""}`}>
                            {achievement.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;


// const Achievements = () => {
//     const [counts, setCounts] = useState(achievements.map(() => 0));

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCounts((prevCounts) =>
//                 prevCounts.map((count, index) =>
//                     count < achievements[index].count ? count + 4 : count
//                 )
//             );
//         }, 200);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="py-12 text-center">
//             <h2 className="text-3xl font-bold flex items-center justify-center mb-10">
//                 <FaAward className="text-yellow-500 mr-2" /> Achievements
//             </h2>

//             <div className="flex justify-center">
//                 <div className="p-6 bg-white shadow-md rounded-lg border-l-4 border-yellow-700 text-black w-80 text-center">
//                     <h3 className="text-5xl font-bold">{counts[0]}</h3>
//                     <img src={achievements[0].image} alt="deans-list-2024-certificate" />
//                     <p className="text-xl font-semibold mt-2">{achievements[0].title}</p>
//                     <p className="text-sm mt-1">{achievements[0].description}</p>
//                     <p className="text-sm mt-1 italic">{achievements[0].semesters}</p>
//                 </div>

//                 <div className="p-6 bg-white shadow-md rounded-lg ml-15 border-l-4 border-yellow-700 text-black w-80 text-center">
//                     <h3 className="text-5xl font-bold">{achievements[1].count}</h3>
//                     <p className="text-l font-semibold mt-2">{achievements[1].title}</p>
//                     <p className="text-m mt-1">{achievements[1].description}</p>
//                     <p className="text-sm mt-1 italic">{achievements[1].semesters}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Achievements;

