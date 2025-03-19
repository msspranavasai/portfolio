import { useState } from "react";
import { FaCertificate } from "react-icons/fa";
import completionCertImg from "../assets/certificates/cybersecurity/images/Cybersecurity.png";
import course1 from "../assets/certificates/cybersecurity/images/Course_1.png";
import course2 from "../assets/certificates/cybersecurity/images/Course_2.png";
import course3 from "../assets/certificates/cybersecurity/images/Course_3.png";
import course4 from "../assets/certificates/cybersecurity/images/Course_4.png";
import course5 from "../assets/certificates/cybersecurity/images/Course_5.png";
import course6 from "../assets/certificates/cybersecurity/images/Course_6.png";
import course7 from "../assets/certificates/cybersecurity/images/Course_7.png";
import course8 from "../assets/certificates/cybersecurity/images/Course_8.png";

const courseCertificates = [
    { title: "Foundations of Cybersecurity", img: course1, desc: "In the first course in the Google Cybersecurity Certificate. This course provided a comprehensive introduction to cybersecurity, covering the evolution of the field, the importance of cybersecurity in business, and the role of an entry-level cybersecurity analyst. Guided by Google employees, I engaged in hands-on activities and simulations, learning about security domains, frameworks, ethics, and common tools. This foundational course has equipped me with essential skills and knowledge for a career in cybersecurity." },
    { title: "Play It Safe: Manage Security Risks", img: course2, desc: "In the second course in the Google Cybersecurity Certificate, which delved deeper into key cybersecurity concepts introduced in the first course. This course emphasized the use of frameworks and controls by cybersecurity professionals to safeguard business operations. I learned about risk management steps, common threats, and vulnerabilities, and how to use SIEM data to respond to incidents. The hands-on activities, guided by Google cybersecurity experts, significantly boosted my skills, preparing me for entry-level cybersecurity roles." },
    { title: "Connect and Protect: Networks and Security", img: course3, desc: "In the third course in the Google Cybersecurity Certificate, which focused on network fundamentals and security. I learned how networks connect devices and allow communication, and explored the TCP/IP model and network hardware like routers and modems. The course emphasized network security, teaching me to recognize vulnerabilities and secure networks using firewalls, system hardening, and VPNs. Through hands-on activities, I gained practical skills, preparing me for entry-level cybersecurity roles." },
    { title: "Tools of the Trade: Linux and SQL", img: course4, desc: "In the fourth course of the Google Cybersecurity Certificate, I learned essential computing skills needed for a cybersecurity analyst role. I practiced using Linux, navigating the file system, and authenticating users with the Bash shell. Additionally, I gained experience in SQL, communicating with databases, and applying filters to queries. Guided by Google employees, the course included hands-on activities that simulated real-world cybersecurity tasks, thoroughly preparing me for entry-level roles in the field." },
    { title: "Assets, Threats, and Vulnerabilities", img: course5, desc: "In the fifth course of the Google Cybersecurity Certificate, I learned to classify assets, identify common threats and vulnerabilities, and implement security controls to protect valuable information. I practiced threat modeling and developed an attacker mindset to stay ahead of security breaches. The course also covered data handling processes, encryption, hashing, authentication, authorization, and analyzing attack surfaces. By the end, I was equipped to apply for entry-level cybersecurity roles with practical skills and knowledge from industry professionals." },
    { title: "Sound the Alarm: Detection and Response", img: course6, desc: "In the sixth course of the Google Cybersecurity Certificate, I learned about incident detection and response. I gained skills in defining and managing security incidents, understanding the incident response lifecycle, and using tools like packet sniffers, IDS, and SIEM for detecting and analyzing security incidents. I also practiced analyzing network communications and investigating artifacts to verify security incidents. This hands-on experience has prepared me for entry-level roles in cybersecurity, focusing on effective incident management and response strategies." },
    { title: "Automate Cybersecurity Tasks with Python", img: course7, desc: "In the seventh course of the Google Cybersecurity Certificate, I learned to automate tasks using Python. The course covered foundational concepts such as data types, variables, and control structures. I practiced developing functions, using libraries, and debugging code. Additionally, I enhanced my skills in working with strings, lists, file handling, and applying regular expressions. Guided by experienced Google cybersecurity professionals, this course provided a comprehensive and practical learning experience." },
    { title: "Put It to Work: Prepare for Cybersecurity Jobs", img: course8, desc: "In the eighth course of the Google Cybersecurity Certificate, I learned how to make critical decisions and escalate incidents to stakeholders effectively. I developed strong communication and collaboration skills essential for influencing stakeholders within an organization. The course emphasized the importance of ethical behavior in cybersecurity and provided insights into engaging with the cybersecurity community. Additionally, I explored job opportunities in the field, practiced interviews, and prepared a resume and cover letter to apply for entry-level cybersecurity roles." },
];

const Certifications = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold text-center mt-15 mb-10">Certifications</h2>

            <div className="mt-6 flex justify-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    {showAll ? "Hide All Certificates" : "Show All Certificates"}
                </button>
            </div>
            <br />

            {!showAll ? (
                <div className="p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-600 w-full max-w-3xl mx-auto">
                    <h3 className="text-xl font-bold flex items-center">
                        Google Cybersecurity Professional Certificate
                    </h3>
                    <p className="text-gray-700"><strong>Offered by:</strong> Google on Coursera</p>
                    <p className="text-gray-600"><strong>Date:</strong> June 2024</p>
                    <p className="mt-2">The Google Cybersecurity Professional Certificate is an 8-course series designed to prepare individuals for a career in cybersecurity. In this program, I gained in-demand skills from Google experts, learning to safeguard against cyber threats and unauthorized access. The courses covered topics such as Python, Linux, SQL, SIEM tools, and Intrusion Detection Systems (IDS). I engaged in hands-on labs and real-world cybersecurity scenarios, enhancing my problem-solving, analysis, communication, and collaboration skills.</p>

                    <div className="mt-4 flex justify-center">
                        <img src={completionCertImg} alt="Completion Certificate" className="w-full max-w-md rounded-lg shadow-lg" />
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {courseCertificates.map((cert, index) => (
                        <div key={index} className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-500">
                            <h4 className="text-lg font-semibold text-center">{cert.title}</h4>
                            <div className="">
                                <p>{cert.desc}</p>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <img src={`${cert.img}`} alt={cert.title} className="w-full max-w-md rounded-lg shadow-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-6 flex justify-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    {showAll ? "Hide All Certificates" : "Show All Certificates"}
                </button>
            </div>
        </div>
    );
};

export default Certifications;