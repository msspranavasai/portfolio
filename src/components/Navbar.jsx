// import logo from "../assets/pranava-logo.png";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <div className="flex items-center justify-between w-full px-10">
//             {/* Left Side - Logo/Text */}
//             {/* <Link to="/" className="text-5xl font-bold text-black ml-30 mt-5">
//                 Ps
//             </Link> */}

//             <Link to="/" className="font-bold tracking-light ml-30 mt-5 text-5xl bg-gradient-to-r from-violet-500 via-pink-400 to-purple-600 bg-clip-text text-transparent">
//                 Ps
//             </Link>

//             {/* Center - Navbar */}
//             <nav className="flex justify-center bg-white shadow-md rounded-full px-5 mt-5 py-4">
//                 <ul className="flex items-center gap-6 text-gray-700 font-medium">
//                     {[
//                         { name: "Home", path: "/" },
//                         { name: "About", path: "/about" },
//                         { name: "Experience", path: "/experience" },
//                         { name: "Certifications", path: "/certificates" },
//                         { name: "Contact", path: "/contact" }
//                     ].map((item) => (
//                         <li key={item.path} className="rounded-full">
//                             <Link
//                                 to={item.path}
//                                 className="block px-6 py-3 rounded-full font-semibold transition-all duration-300 
//                                     bg-transparent hover:bg-black hover:text-white text-center"
//                             >
//                                 {item.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>

//             {/* Right Side - Social Icons */}
//             <div className="flex items-center gap-6 text-xl">
//                 <a href="https://www.linkedin.com/in/pranava7" target="_blank" rel="noopener noreferrer">
//                     <FaLinkedin className="cursor-pointer hover:text-blue-600 text-4xl mt-5" />
//                 </a>
//                 <a href="https://github.com/pranava-sai" target="_blank" rel="noopener noreferrer">
//                     <FaGithub className="cursor-pointer hover:text-gray-900 text-4xl mr-20 mt-5" />
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update isMobile state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setIsOpen(false); // Auto-close menu on desktop
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full fixed top-0 left-0 z-50 flex justify-center py-3">
            {/* ✅ Mobile Header (White Background) */}
            {isMobile && (
                <div className="bg-white w-full fixed top-0 left-0 flex justify-between items-center px-6 py-4 shadow-md">
                    {/* Logo */}
                    <Link to="/" className="text-4xl font-bold bg-gradient-to-r from-violet-500 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                        Ps
                    </Link>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            )}

            {/* ✅ Desktop Navigation - Rounded Navbar */}
            <div className="hidden md:flex justify-between items-center max-w-6xl w-full px-6 md:px-10">
                {/* Logo */}
                <Link to="/" className="text-4xl font-bold bg-gradient-to-r from-violet-500 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                    Ps
                </Link>

                {/* Rounded Navbar */}
                <div className="hidden md:flex items-center bg-white shadow-md px-6 py-3 rounded-full">
                    <nav className="flex space-x-6 text-gray-700 font-medium">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Experience", path: "/experience" },
                            { name: "Certifications", path: "/certificates" },
                            { name: "Contact", path: "/contact" }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Social Icons (Only on Desktop) */}
                <div className="hidden md:flex space-x-4 text-xl">
                    <a href="https://www.linkedin.com/in/pranava7" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-600 text-3xl" />
                    </a>
                    <a href="https://github.com/pranava-sai" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-gray-900 text-3xl" />
                    </a>
                </div>
            </div>

            {/* ✅ Mobile Navigation Menu */}
            {isMobile && isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <nav className="flex flex-col items-center py-4">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Experience", path: "/experience" },
                            { name: "Certifications", path: "/certificates" },
                            { name: "Contact", path: "/contact" }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="px-6 py-3 w-full text-center hover:bg-black hover:text-white rounded-full transition"
                                onClick={() => setIsOpen(false)} // Close menu when clicking
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
