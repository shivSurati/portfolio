import React from 'react';

const skills = [
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'REST APIs',
    'JWT Auth',
    'Git',
    'GitHub',
    'Vite',
    'Postman',
    'Gemini AI',
    'Puppeteer',
];

const About = () => {
    return (
        <section id="about" className="relative py-32 px-6 max-w-4xl mx-auto">
            <p className="text-white/30 text-xs tracking-[3px] uppercase mb-4">
                About Me
            </p>

            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
                Developer. Problem solver.{' '}
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    Lifelong learner.
                </span>
            </h2>

            <div className="flex flex-col gap-4 mb-16 max-w-2xl">
                <p className="text-white/55 text-base leading-relaxed">
                    I enjoy turning ideas into real products — whether that is a
                    clean UI that feels effortless to use, or a backend that
                    handles things quietly in the background. The MERN stack is
                    my comfort zone, but I am always picking up what the project
                    needs.
                </p>
                <p className="text-white/55 text-base leading-relaxed">
                    GATE 2026 qualified and open to both private-sector and PSU
                    roles. Most recently built hireReady — an AI-powered
                    interview prep platform using React, Node.js, MongoDB, and
                    the Gemini API. The kind of project where I learned more by
                    shipping than by reading.
                </p>
            </div>

            {/* Skills marquee */}
            <div id="skills" />
            <p className="text-white/30 text-xs tracking-[3px] uppercase mb-5">
                Tech Stack
            </p>

            <div className="marquee-container">
                <div className="marquee-track">
                    {[...skills, ...skills].map((skill, i) => (
                        <span key={i} className="marquee-pill">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
