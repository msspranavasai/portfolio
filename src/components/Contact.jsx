import { FaEnvelope, FaLinkedin, FaGithub, FaUser, FaPaperPlane } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });
    const [isSent, setIsSent] = useState(false);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission using EmailJS
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_ohixm9t", // Your EmailJS Service ID
                "template_87o1imd", // Your EmailJS Template ID
                {
                    user_name: formData.user_name,
                    user_email: formData.user_email,
                    message: formData.message,
                },
                "BBwJ6Kt0HN3Qz2Ass" // Your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log("Email successfully sent!", result.text);
                    setIsSent(true);
                    setFormData({ user_name: "", user_email: "", message: "" }); // Reset form
                },
                (error) => {
                    console.log("Failed to send email.", error.text);
                }
            );
    };

    //     return (
    //         <div className="py-12 text-center">
    //             <h2 className="text-3xl font-bold flex items-center justify-center mb-10">
    //                 <FaEnvelope className="text-blue-500 mr-2 mt-30" /> Contact Me
    //             </h2>

    //             {/* Contact Information */}
    //             <div className="flex flex-col items-center gap-6 mb-8">
    //                 <p className="text-lg">
    //                     Feel free to reach out for collaborations, inquiries, or just to say hi! 🚀
    //                 </p>
    //                 <div className="flex gap-6 text-xl">
    //                     <a href="mailto:msspranavasai@gmail.com" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
    //                         <FaEnvelope /> Email
    //                     </a>
    //                     <a href="https://www.linkedin.com/in/pranava7" target="_blank" rel="noopener noreferrer"
    //                         className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
    //                         <FaLinkedin /> LinkedIn
    //                     </a>
    //                     <a href="https://github.com/pranava-sai" target="_blank" rel="noopener noreferrer"
    //                         className="text-gray-900 hover:text-black flex items-center gap-2">
    //                         <FaGithub /> GitHub
    //                     </a>
    //                 </div>
    //             </div>

    //             {/* Contact Form */}
    //             <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-600">
    //                 {isSent ? (
    //                     <p className="text-green-600 font-semibold text-lg py-4">
    //                         ✅ Your message has been sent successfully! I'll get back to you soon.
    //                     </p>
    //                 ) : (
    //                     <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
    //                         <div>
    //                             <label className="block font-medium">Name</label>
    //                             <input
    //                                 type="text"
    //                                 name="user_name"
    //                                 value={formData.user_name}
    //                                 onChange={handleChange}
    //                                 required
    //                                 className="border rounded-lg p-2 w-full"
    //                             />
    //                         </div>

    //                         <div>
    //                             <label className="block font-medium">Email</label>
    //                             <input
    //                                 type="email"
    //                                 name="user_email"
    //                                 value={formData.user_email}
    //                                 onChange={handleChange}
    //                                 required
    //                                 className="border rounded-lg p-2 w-full"
    //                             />
    //                         </div>

    //                         <div>
    //                             <label className="block font-medium">Message</label>
    //                             <textarea
    //                                 name="message"
    //                                 value={formData.message}
    //                                 onChange={handleChange}
    //                                 required
    //                                 className="border rounded-lg p-2 w-full h-32 resize-none"
    //                             />
    //                         </div>

    //                         <button
    //                             type="submit"
    //                             className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-50 transition flex items-center justify-center gap-2"
    //                         >
    //                             <FaPaperPlane /> Send Message
    //                         </button>
    //                     </form>
    //                 )}
    //             </div>
    //         </div>
    //     );
    // };

    // export default Contact;

    return (
        <div className="py-12 text-center">
            <div className="mt-20">
                <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-10">
                    <FaEnvelope className="text-blue-500 text-4xl relative top-[2px]" />
                    <span>Contact Me</span>
                </h2>

            </div>

            <p className="text-lg mb-4">
                Feel free to reach out for collaborations, inquiries, or just to say hi! 🚀
            </p>

            <div className="flex justify-center gap-6 text-xl mb-8">
                <a href="mailto:msspranavasai@gmail.com" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <FaEnvelope /> Email
                </a>
                <a href="https://www.linkedin.com/in/pranava7" target="_blank" rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/pranava-sai" target="_blank" rel="noopener noreferrer"
                    className="text-gray-900 hover:text-black flex items-center gap-2">
                    <FaGithub /> GitHub
                </a>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg border-l-4 border-blue-600">
                {isSent ? (
                    <p className="text-green-600 font-semibold text-lg py-4">
                        ✅ Your message has been sent successfully! I'll get back to you soon.
                    </p>
                ) : (
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                        {/* Name Field */}
                        <div className="text-left">
                            <label className="block font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                required
                                className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="text-left">
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                required
                                className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="text-left">
                            <label className="block font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="border rounded-lg p-3 w-full h-32 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        {/* Send Button */}
                        <button
                            type="submit"
                            className="mt-4 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 w-full sm:w-auto mx-auto"
                        >
                            <FaPaperPlane /> Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;