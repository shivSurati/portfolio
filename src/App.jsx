import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="relative min-h-screen bg-[#0d0d0f] text-white">
            {/* Global background blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute w-[700px] h-[600px] rounded-full bg-violet-600/40 blur-[120px] top-[-100px] left-[30%]" />
                <div className="absolute w-[400px] h-[400px] rounded-full bg-pink-600/40 blur-[100px] top-[40%] right-[5%]" />
                <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-600/35 blur-[80px] bottom-[10%] left-[10%]" />
            </div>

            {/* All sections */}
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default App;
