import React from 'react';

const Footer = () => {
    return (
        <footer className="relative z-10 w-full py-8 text-center text-gray-500 text-sm">
            <div className="max-w-7xl mx-auto px-6">
                <p>&copy; {new Date().getFullYear()} ikhwanda. Dibuat dengan Bakso dan Kopi.</p>
            </div>
        </footer>
    );
};

export default Footer;
