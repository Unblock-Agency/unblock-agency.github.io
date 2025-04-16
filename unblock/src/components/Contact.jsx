import React from 'react';

export default function Contact({ id = 'contact' }) {
    return (
        <section
            id={id}
            className="scroll-mt-36 w-full bg-gray-100 px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32 flex items-center"
        >
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <header className="space-y-4">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Let’s Connect
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
                        Ready to build something better? Whether you're interested in our pilot or just want to chat, we’re here to help your team thrive.
                    </p>
                </header>
                <a
                    href="https://calendly.com/aritro-unblockagency/pilot-program?embed_domain=www.unblockagency.com&embed_type=Inline&hide_gdpr_banner=1&month=2025-04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                >
                    <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
                        Schedule a Call
                    </button>
                </a>
            </div>
        </section>
    );
}
