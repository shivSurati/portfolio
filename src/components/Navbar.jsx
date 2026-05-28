import React from 'react';

const name = 'Shivam Surati'.split('');

const links = [
    { label: 'About', id: 'about', offset: 80 },
    { label: 'Projects', id: 'projects', offset: 80 },
    { label: 'Skills', id: 'skills', offset: 150 },
    { label: 'Contact', id: 'contact', offset: 20 },
];

const Navbar = () => {
    const scrollTo = (e, id, offset) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-4 left-1/2 flex items-center justify-between z-50 max-w-4xl w-[calc(100%-80px)] -translate-x-1/2 px-7 py-3.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl select-none">
            {/* Wave name */}
            <span className="flex text-white font-medium text-base">
                {name.map((char, i) => (
                    <span
                        key={i}
                        className="inline-block hover:-translate-y-1 transition-transform duration-150 cursor-default"
                        style={{ transitionDelay: `${i * 25}ms` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </span>

            {/* Links */}
            <div className="flex items-center gap-6">
                {links.map(({ label, id, offset }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={e => scrollTo(e, id, offset)}
                        className="relative text-white/55 hover:text-white text-sm transition-colors duration-300 group cursor-pointer"
                    >
                        {label}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                    </a>
                ))}

                <a
                    href="/shivam_resume_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-white/55 hover:text-white text-sm transition-colors duration-300 group cursor-pointer"
                >
                    Resume ↗
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
