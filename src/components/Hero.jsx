import React from 'react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24"
        >
            {/* Greetings */}
            <p className="text-white/50 text-xs tracking-[3px] uppercase mb-4">
                Hi there 👋
            </p>

            {/* Big Headline */}
            <h1 className="text-white text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-3">
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    Shivam Surati
                </span>
            </h1>

            {/* Role */}
            <h1 className="text-white text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
                MERN Stack Developer.
            </h1>

            {/* Subtitle */}
            <p className="text-white/45 text-base leading-relaxed max-w-md mb-8">
                Full-stack developer · GATE 2026 Qualified · Open to work
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mb-10">
                <a
                    href="#projects"
                    className="bg-white text-black font-semibold text-sm px-6 py-2.5 rounded-lg hover:opacity-85 transition-opacity duration-300"
                >
                    View Projects
                </a>
                <a
                    href="#contacts"
                    className="border border-white/15 text-white text-sm px-6 py-2.5 rounded-lg hover:bg-white/5 transition-colors duration-300"
                >
                    Get in Touch
                </a>
            </div>

            {/* Social icons for Github and Linkedin and Status*/}
            <div className="flex items-center gap-4 mb-10">
                {/* GitHub */}
                <a
                    href="https://github.com/shivSurati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors duration-300"
                    aria-label="GitHub"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.047.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>

                {/* Vertical divider */}
                <span className="w-px h-5 bg-white/15" />

                {/* Linkedin */}
                <a
                    href="https://www.linkedin.com/in/shivam-surati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors duration-300"
                    aria-label="LinkedIn"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>

                {/* Vertical divider */}
                <span className="w-px h-5 bg-white/15" />

                {/* Status */}
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white/60 text-sm">
                        Open to new opportunities
                    </span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-white/30 text-xs tracking-[2px] uppercase">
                    Scroll
                </span>
                <div className="animate-bounce">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-white/30"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
