import React from 'react';

export default function TentangKami() {
    return (
        <main className="flex-grow flex flex-col pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Tentang LegalBiz</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-6">Sahabat Legalitas Bisnis Anda</h1>
                    <p className="text-lg text-slate-600">Kami hadir untuk menyederhanakan proses birokrasi dan legalitas hukum agar Anda bisa lebih fokus pada pengembangan bisnis.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <img src="/hero_image.jpg" alt="Tentang LegalBiz" className="rounded-2xl shadow-2xl object-cover w-full h-[400px]" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-brand-dark mb-6">Lebih dari Sekadar Biro Jasa</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            LegalBiz didirikan dari keresahan para pengusaha dan startup lokal yang merasa kesulitan dengan rumitnya birokrasi pendirian usaha di Indonesia. Ketidaktransparanan harga dan proses yang memakan waktu seringkali menjadi penghalang lahirnya inovasi.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Oleh karena itu, kami menggabungkan keahlian hukum profesional dengan pemanfaatan teknologi untuk menciptakan ekosistem layanan legal yang cepat, transparan, dan mudah diakses oleh semua lapisan pelaku usaha, mulai dari UMKM hingga korporasi besar.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-3xl font-black text-brand-dark mb-1">500+</h3>
                                <p className="text-sm text-slate-500">Klien Terbantu</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="text-3xl font-black text-brand-dark mb-1">100%</h3>
                                <p className="text-sm text-slate-500">Tingkat Kesuksesan</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-brand-dark rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <i className="ph-fill ph-quotes text-5xl text-brand-gold mb-6 inline-block"></i>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                            "Misi kami adalah memastikan setiap ide bisnis yang brilian di Indonesia tidak pernah terkendala oleh masalah legalitas."
                        </h2>
                        <p className="text-gray-400">Founder, LegalBiz Indonesia</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
