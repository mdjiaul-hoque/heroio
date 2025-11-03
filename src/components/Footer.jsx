import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
                    {/* Logo / Brand */}
                    <div className="text-white text-2xl font-bold">
                        AppZone
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="/" className="hover:text-white transition">Home</a>
                        <a href="/apps" className="hover:text-white transition">Apps</a>
                        <a href="/installation" className="hover:text-white transition">Installed Apps</a>
                        <a href="/contact" className="hover:text-white transition">Contact</a>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition"><FaFacebook size={20} /></a>
                        <a href="#" className="hover:text-white transition"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-white transition"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-white transition"><FaLinkedin size={20} /></a>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-700" />

                {/* Copyright */}
                <p className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} AppZone. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
