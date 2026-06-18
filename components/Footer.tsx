import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="bg-brand-dark pt-16 pb-8 border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                        
                        {/*  Brand Info  */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center">
                                    <i className="ph-fill ph-scales text-brand-dark text-xl"></i>
                                </div>
                                <span className="font-bold text-xl text-white tracking-tight">LegalBiz<span className="text-brand-gold">.</span></span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">Partner terpercaya untuk pendirian perusahaan dan pengurusan legalitas bisnis di seluruh Indonesia. Cepat, aman, dan profesional.</p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-dark transition-colors"><i className="ph-fill ph-instagram-logo text-xl"></i></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-dark transition-colors"><i className="ph-fill ph-linkedin-logo text-xl"></i></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-dark transition-colors"><i className="ph-fill ph-facebook-logo text-xl"></i></a>
                            </div>
                        </div>

                        {/*  Quick Links  */}
                        <div>
                            <h4 className="text-white font-bold mb-6">Perusahaan</h4>
                            <ul className="space-y-3">
                                <li><Link href="/tentang-kami" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Tentang Kami</Link></li>
                                <li><Link href="/studi-kasus" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Studi Kasus</Link></li>
                                <li><Link href="/faq" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Kamus Legalitas & FAQ</Link></li>
                                <li><Link href="/blog" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Blog & Edukasi</Link></li>
                                <li><Link href="/syarat-ketentuan" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Syarat & Ketentuan</Link></li>
                                <li><Link href="/kebijakan-privasi" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Kebijakan Privasi</Link></li>
                                <li><Link href="/kontak" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Hubungi Kami</Link></li>
                            </ul>
                        </div>

                        {/*  Services Links  */}
                        <div>
                            <h4 className="text-white font-bold mb-6">Layanan Populer</h4>
                            <ul className="space-y-3">
                                <li><Link href="/layanan" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Pendirian PT Umum</Link></li>
                                <li><Link href="/layanan" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Pendirian PT Perorangan</Link></li>
                                <li><Link href="/layanan" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Pembuatan CV</Link></li>
                                <li><Link href="/layanan" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Daftar Merek (HAKI)</Link></li>
                                <li><Link href="/layanan" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Pengurusan NIB & OSS</Link></li>
                            </ul>
                        </div>

                        {/*  Newsletter  */}
                        <div>
                            <h4 className="text-white font-bold mb-6">Newsletter</h4>
                            <p className="text-gray-400 text-sm mb-4">Dapatkan update regulasi bisnis terbaru dan penawaran khusus.</p>
                            <form  className="flex gap-2">
                                <input type="email" required placeholder="Email Anda" className="w-full bg-brand-blue border-none rounded-lg p-3 text-sm text-white focus:ring-1 focus:ring-brand-gold outline-none" />
                                <button type="submit" className="bg-brand-gold text-brand-dark px-4 rounded-lg font-bold hover:bg-white transition-colors"><i className="ph-bold ph-paper-plane-right"></i></button>
                            </form>
                        </div>

                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm">© 2026 LegalBiz Indonesia. All rights reserved.</p>
                        <div className="flex gap-4">
                            <img src="https://placehold.co/80x30/1C2541/ffffff?text=Kemenkumham" alt="Badge" className="h-6 opacity-50 grayscale" />
                            <img src="https://placehold.co/80x30/1C2541/ffffff?text=OSS+RBA" alt="Badge" className="h-6 opacity-50 grayscale" />
                        </div>
                    </div>
                </div>
            </footer>

            {/*  Floating WhatsApp Button  */}
            <a href="/kontak" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-green-600 transition-all z-50 group">
                <i className="ph-fill ph-whatsapp-logo text-3xl"></i>
                <span className="absolute right-16 bg-white text-brand-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat Konsultan</span>
            </a>

            {/*  Sticky Mobile CTA  */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 z-40 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)]">
                <a href="/kontak" className="w-full block text-center bg-brand-dark text-brand-gold font-bold py-3 rounded-lg text-sm">Konsultasi Sekarang</a>
            </div>
        </>
    );
}
