import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "SERN Stack Developer",
                    "Android App Developer",
                    "AI & ML Enthusiast",
                    "Cybersecurity Enthusiast",
                    "Data Science Practitioner",
                    "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 45,
            }}
        />
    );
}

export default Type;