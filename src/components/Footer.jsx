import React from 'react';

const Footer = () => {
    return (
        <footer className="relative border-t border-white/8 py-8 px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-white/25 text-sm">
                    © 2026 Shivam Surati. All rights reserved.
                </p>

                <p className="text-white/20 text-xs">
                    Built with React &amp; Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
