"use client";
import React, { useState } from 'react';

export default function Kontak() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleContact = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 5000);
        }, 1500);
    };

    return (
        <main className="flex-grow flex flex-col pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Hubungi Kami</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-6">Kami Siap Membantu Anda</h1>
                    <p className="text-lg text-slate-600">Punya pertanyaan seputar legalitas bisnis atau ingin mendiskusikan kebutuhan perusahaan Anda? Jangan ragu untuk menghubungi kami.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-premium overflow-hidden border border-gray-100 max-w-6xl mx-auto">
                    
                    {/*  Contact Info & Map  */}
                    <div className="lg:w-2/5 bg-brand-dark p-8 md:p-12 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                            
                            <div className="space-y-6 mb-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <i className="ph-fill ph-map-pin text-brand-gold text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-300">Kantor Pusat</h4>
                                        <p className="text-sm mt-1 leading-relaxed">Menara LegalBiz Lt. 12<br />Jl. Jendral Sudirman Kav. 21<br />Jakarta Selatan, 12920</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <i className="ph-fill ph-phone text-brand-gold text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-300">Telepon / WhatsApp</h4>
                                        <p className="text-sm mt-1">+62 811-2233-4455</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <i className="ph-fill ph-envelope text-brand-gold text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-300">Email</h4>
                                        <p className="text-sm mt-1">halo@legalbiz.co.id</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <i className="ph-fill ph-clock text-brand-gold text-xl"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-300">Jam Operasional</h4>
                                        <p className="text-sm mt-1">Senin - Jumat: 09:00 - 17:00 WIB<br/>Sabtu - Minggu: Tutup</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="w-full h-48 rounded-xl overflow-hidden mt-8 border border-gray-700">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d126920.24037561845!2d106.7455859!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/*  Contact Form  */}
                    <div className="lg:w-3/5 p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-brand-dark mb-6">Kirim Pesan</h3>
                        <form id="contact-form"  className="space-y-5" onSubmit={handleContact}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap *</label>
                                    <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nomor WhatsApp *</label>
                                    <input type="tel" required className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all" placeholder="0812..." />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all" placeholder="john@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Layanan yang Dibutuhkan</label>
                                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all">
                                    <option>Pendirian PT</option>
                                    <option>Pendirian CV</option>
                                    <option>Pembuatan NIB / OSS</option>
                                    <option>Konsultasi Hukum</option>
                                    <option>Lainnya</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Pesan / Detail Kebutuhan *</label>
                                <textarea rows={5} required className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all" placeholder="Jelaskan secara singkat kebutuhan Anda..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors flex justify-center items-center gap-2 mt-4">
                                {isSubmitting ? (
                                    <><i className="ph-bold ph-spinner animate-spin"></i> Mengirim...</>
                                ) : (
                                    <>Kirim Permintaan <i className="ph-bold ph-paper-plane-right"></i></>
                                )}
                            </button>
                            
                            {/*  Success Message Holder  */}
                            <div id="form-success" className={`${showSuccess ? 'flex' : 'hidden'} mt-4 p-3 bg-green-100 text-green-700 text-sm rounded-lg border border-green-200 items-center gap-2`}>
                                <i className="ph-fill ph-check-circle text-lg"></i> Pesan berhasil dikirim. Tim kami akan segera menghubungi Anda.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
