import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white px-6 sm:px-8 lg:px-12 py-12">
            <div className="max-w-6xl mx-auto text-center space-y-4">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Unblock Agency. All rights reserved.
                </p>
                <nav className="flex flex-wrap justify-center gap-6 text-sm">
                    <a href="/#pilot" className="cursor-pointer hover:text-gray-300 transition">Pilot</a>
                    <a href="/#about" className="cursor-pointer hover:text-gray-300 transition">About</a>
                    <a href="/#process" className="cursor-pointer hover:text-gray-300 transition">Process</a>
                    <a href="/#team" className="cursor-pointer hover:text-gray-300 transition">Team</a>
                    <a href="/#contact" className="cursor-pointer hover:text-gray-300 transition">Contact</a>
                </nav>
            </div>
        </footer>
    );
}
