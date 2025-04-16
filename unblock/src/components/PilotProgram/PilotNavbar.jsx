import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function PilotNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { hash } = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const linkClass = (targetHash) =>
        `cursor-pointer hover:text-gray-300 transition-colors ${hash === targetHash ? 'underline underline-offset-4 text-gray-300' : ''
        }`;

    return (
        <header className="sticky top-0 z-50 bg-black text-white shadow-md backdrop-blur">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <HashLink smooth to="/" aria-label="Go to homepage" className="cursor-pointer">
                    <img src="/ua-white-rect.png" alt="Unblock Agency" className="h-10 w-auto" />
                </HashLink>
                <button
                    onClick={toggleMenu}
                    className="cursor-pointer text-white text-2xl md:hidden focus:outline-none"
                    aria-label="Toggle navigation menu"
                >
                    &#9776;
                </button>
                <nav className="hidden md:flex items-center space-x-6 text-sm md:text-base font-medium">
                    <HashLink smooth to="#pilot-hero" className={linkClass('#pilot-hero')}>Pilot Program</HashLink>
                    <HashLink smooth to="#wte" className={linkClass('#wte')}>What to Expect</HashLink>
                    <HashLink smooth to="#deliverables-container" className={linkClass('#deliverables-container')}>Key Deliverables</HashLink>
                    <HashLink smooth to="#pilot-contact" className={linkClass('#pilot-contact')}>Contact Us</HashLink>
                </nav>
            </div>
            <nav
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                    }`}
            >
                <div className="flex flex-col gap-4 bg-white text-black rounded-md shadow-md px-6 py-4 mx-4">
                    <HashLink smooth to="#pilot-hero" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-gray-700 font-medium">
                        Pilot Program
                    </HashLink>
                    <HashLink smooth to="#wte" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-gray-700 font-medium">
                        What to Expect
                    </HashLink>
                    <HashLink smooth to="#deliverables-container" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-gray-700 font-medium">
                        Key Deliverables
                    </HashLink>
                    <HashLink smooth to="#pilot-contact" onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-gray-700 font-medium">
                        Contact Us
                    </HashLink>
                </div>
            </nav>
        </header>
    );
}
