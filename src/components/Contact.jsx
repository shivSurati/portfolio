import React from 'react';

const ContactLink = ({ href, external, icon, label, sublabel }) => (
    <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-4 px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white/55 hover:text-white hover:border-violet-400/35 hover:bg-violet-400/5 transition-all duration-300 group"
    >
        <span className="text-white/35 group-hover:text-violet-400 transition-colors flex-shrink-0">
            {icon}
        </span>
        <div className="flex flex-col">
            <span className="text-sm font-medium text-white/75 group-hover:text-white transition-colors">
                {label}
            </span>
            <span className="text-xs text-white/35">{sublabel}</span>
        </div>
        <span className="ml-auto text-white/20 group-hover:text-white/60 text-sm transition-colors">
            ↗
        </span>
    </a>
);

const EmailIcon = () => (
    <svg
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const GitHubIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013-.404c1.02.005 2.047.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const Contact = () => {
    return (
        <section id="contact" className="relative py-32 px-6 max-w-4xl mx-auto">
            <p className="text-white/30 text-xs tracking-[3px] uppercase mb-4">
                Contact
            </p>

            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                {"Let's work "}
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    together.
                </span>
            </h2>

            <p className="text-white/45 text-base leading-relaxed max-w-lg mb-12">
                Open to full-time MERN stack roles, frontend positions, and PSU
                opportunities. Based in Surat — remote friendly. Pick any
                channel below and I will get back to you within a day.
            </p>

            {/* Links */}
            <div className="flex flex-col gap-3 max-w-lg">
                <ContactLink
                    href="mailto:shivamsurati@gmail.com"
                    icon={<EmailIcon />}
                    label="shivamsurati@gmail.com"
                    sublabel="Best way to reach me"
                />
                <ContactLink
                    href="https://www.linkedin.com/in/shivam-surati/"
                    external
                    icon={<LinkedInIcon />}
                    label="LinkedIn"
                    sublabel="linkedin.com/in/shivam-surati"
                />
                <ContactLink
                    href="https://github.com/shivSurati"
                    external
                    icon={<GitHubIcon />}
                    label="GitHub"
                    sublabel="github.com/shivSurati"
                />
            </div>

            {/* Availability badge */}
            <div className="mt-8 flex items-center gap-2 text-white/30 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Currently available for new opportunities
            </div>
        </section>
    );
};

export default Contact;
