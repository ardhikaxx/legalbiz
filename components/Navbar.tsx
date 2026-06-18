"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="header" className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm ${scrolled ? "shadow-md py-1" : "py-0"}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/*  Logo  */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center">
                                <i className="ph-fill ph-scales text-brand-gold text-2xl"></i>
                            </div>
                            <span className="font-bold text-2xl text-brand-dark tracking-tight">LegalBiz<span className="text-brand-gold">.</span></span>
                        </Link>
                    </div>

                    {/*  Desktop Menu  */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/#beranda" className="text-sm font-medium text-brand-dark hover:text-brand-gold transition-colors">Beranda</Link>
                        <Link href="/#layanan" className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors">Layanan</Link>
                        <Link href="/#harga" className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors">Paket Harga</Link>
                        <Link href="/#proses" className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors">Proses</Link>
                        <Link href="/tentang-kami" className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors">Tentang Kami</Link>
                        <Link href="/#faq" className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors">FAQ</Link>
                    </nav>

                    {/*  CTA Button Desktop  */}
                    <div className="hidden md:flex">
                        <Link href="/#kontak" className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 shadow-md">
                            Konsultasi Gratis
                        </Link>
                    </div>

                    {/*  Mobile menu button  */}
                    <div className="md:hidden flex items-center">
                        <button id="mobile-menu-btn" className="text-brand-dark hover:text-brand-gold focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className="ph ph-list text-3xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/*  Mobile Menu Panel  */}
            <div id="mobile-menu" className={`md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg ${isMenuOpen ? "" : "hidden"}`}>
                <div className="px-4 pt-2 pb-6 space-y-1">
                    <Link href="/#beranda" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-brand-dark border-b border-gray-50">Beranda</Link>
                    <Link href="/layanan" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 border-b border-gray-50">Layanan</Link>
                    <Link href="/#harga" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 border-b border-gray-50">Paket Harga</Link>
                    <Link href="/#proses" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 border-b border-gray-50">Proses</Link>
                    <Link href="/tentang-kami" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 border-b border-gray-50">Tentang Kami</Link>
                    <Link href="/#faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 border-b border-gray-50">FAQ</Link>
                    <Link href="/#kontak" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 mt-2 text-center text-base font-semibold bg-brand-dark text-white rounded-lg">Konsultasi Gratis</Link>
                </div>
            </div>
        </header>
    );
}
