import React from 'react';

const projects = [
    {
        title: 'hireReady',
        tag: 'Featured',
        description:
            'An AI-powered interview prep platform built solo from scratch. Generates role-specific questions, evaluates your answers in real time, and exports a full PDF report — all powered by Google Gemini API.',
        stack: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Gemini AI',
            'JWT',
            'Puppeteer',
        ],
        github: 'https://github.com/shivSurati/hireReady',
        live: 'https://hireready-frontend.vercel.app',
        featured: true,
    },
];

const GitHubIcon = ({ size = 20 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.047.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const StackPill = ({ label }) => (
    <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/55">
        {label}
    </span>
);

const Projects = () => {
    const featured = projects.filter(p => p.featured);
    const rest = projects.filter(p => !p.featured);

    return (
        <section
            id="projects"
            className="relative py-32 px-6 max-w-4xl mx-auto"
        >
            <p className="text-white/30 text-xs tracking-[3px] uppercase mb-4">
                Projects
            </p>

            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-12">
                Things I&apos;ve{' '}
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    built.
                </span>
            </h2>

            <div className="flex flex-col gap-4">
                {/* Featured — full width */}
                {featured.map(p => (
                    <div
                        key={p.title}
                        className="rounded-2xl border border-violet-400/25 bg-violet-400/5 p-8"
                    >
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div>
                                <span className="inline-block text-xs px-3 py-1 rounded-full border border-violet-400/30 bg-violet-400/10 text-violet-300 mb-3">
                                    Featured
                                </span>
                                <h3 className="text-white text-2xl font-bold tracking-tight">
                                    {p.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-4 flex-shrink-0 mt-1">
                                {p.live && (
                                    <a
                                        href={p.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/50 hover:text-white text-sm transition-colors duration-300"
                                    >
                                        Live ↗
                                    </a>
                                )}
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/40 hover:text-white transition-colors duration-300"
                                    aria-label="GitHub"
                                >
                                    <GitHubIcon size={20} />
                                </a>
                            </div>
                        </div>

                        <p className="text-white/50 text-base leading-relaxed mb-6 max-w-2xl">
                            {p.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {p.stack.map(s => (
                                <StackPill key={s} label={s} />
                            ))}
                        </div>
                    </div>
                ))}

                {/* Regular cards */}
                <div className="grid md:grid-cols-2 gap-4">
                    {rest.map(p => (
                        <div
                            key={p.title}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4"
                        >
                            <div className="flex items-start justify-between">
                                <h3 className="text-white text-lg font-semibold tracking-tight">
                                    {p.title}
                                </h3>
                                <div className="flex items-center gap-3">
                                    {p.live && (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/40 hover:text-white text-xs transition-colors duration-300"
                                        >
                                            Live ↗
                                        </a>
                                    )}
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/35 hover:text-white transition-colors duration-300"
                                        aria-label="GitHub"
                                    >
                                        <GitHubIcon size={18} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-white/50 text-sm leading-relaxed flex-1">
                                {p.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {p.stack.map(s => (
                                    <StackPill key={s} label={s} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
