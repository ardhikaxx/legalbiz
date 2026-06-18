import React from 'react';
import Link from 'next/link';

export default function Layanan() {
    return (
        <main className="flex-grow flex flex-col pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Layanan Kami</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-6">Solusi Legalitas Bisnis Terpadu</h1>
                    <p className="text-lg text-slate-600">Pilih layanan yang sesuai dengan kebutuhan bisnis Anda. Kami bantu urus semua dokumen legalitas dengan cepat dan transparan.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* PT Umum */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                            <i className="ph-fill ph-buildings text-3xl text-brand-gold group-hover:text-brand-dark transition-colors"></i>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">Pendirian PT Umum</h3>
                        <p className="text-slate-500 text-sm mb-6">Cocok untuk bisnis skala menengah ke atas dengan minimal 2 orang pendiri dan pemegang saham.</p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">Akta Notaris & SK Kemenkumham</span></li>
                            <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">NIB & Sertifikat Standar</span></li>
                            <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">NPWP Badan</span></li>
                        </ul>
                        <Link href="/#kontak" className="text-brand-gold font-bold hover:text-brand-dark transition-colors flex items-center gap-2">
                            Pesan Sekarang <i className="ph-bold ph-arrow-right"></i>
                        </Link>
                    </div>

                    {/* PT Perorangan */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                            <i className="ph-fill ph-user-circle text-3xl text-brand-gold group-hover:text-brand-dark transition-colors"></i>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">Pendirian PT Perorangan</h3>
                        <p className="text-slate-500 text-sm mb-6">Solusi hemat untuk UMKM. Dirikan PT cukup dengan 1 orang pendiri tanpa syarat minimum modal.</p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">Sertifikat Pendirian Kemenkumham</span></li>
                            <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">NIB (Nomor Induk Berusaha)</span></li>
                            <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">NPWP PT Perorangan</span></li>
                        </ul>
                        <Link href="/#kontak" className="text-brand-gold font-bold hover:text-brand-dark transition-colors flex items-center gap-2">
                            Pesan Sekarang <i className="ph-bold ph-arrow-right"></i>
                        </Link>
                    </div>

                    {/* CV */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                            <i className="ph-fill ph-storefront text-3xl text-brand-gold group-hover:text-brand-dark transition-colors"></i>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">Pendirian CV</h3>
                        <p className="text-slate-500 text-sm mb-6">Badan usaha fleksibel untuk usaha perdagangan dan jasa dengan sistem sekutu aktif dan pasif.</p>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">Akta Notaris Pendirian</span></li>
                            <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">Pendaftaran SABU Kemenkumham</span></li>
                            <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">NPWP CV & NIB</span></li>
                        </ul>
                        <Link href="/#kontak" className="text-brand-gold font-bold hover:text-brand-dark transition-colors flex items-center gap-2">
                            Pesan Sekarang <i className="ph-bold ph-arrow-right"></i>
                        </Link>
                    </div>

                    {/* NIB & OSS */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                            <i className="ph-fill ph-file-text text-3xl text-brand-gold group-hover:text-brand-dark transition-colors"></i>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">Pembuatan NIB & OSS RBA</h3>
                        <p className="text-slate-500 text-sm mb-6">Perizinan dasar yang wajib dimiliki oleh semua pelaku usaha di Indonesia. Proses 1 hari kerja.</p>
                        <Link href="/#kontak" className="text-brand-gold font-bold hover:text-brand-dark transition-colors flex items-center gap-2 mt-auto pt-4">
                            Konsultasi <i className="ph-bold ph-arrow-right"></i>
                        </Link>
                    </div>

                    {/* HAKI */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                            <i className="ph-fill ph-shield-star text-3xl text-brand-gold group-hover:text-brand-dark transition-colors"></i>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">Pendaftaran HAKI & Merek</h3>
                        <p className="text-slate-500 text-sm mb-6">Lindungi brand, logo, dan karya cipta Anda dari plagiarisme dengan pendaftaran resmi ke DJKI.</p>
                        <Link href="/#kontak" className="text-brand-gold font-bold hover:text-brand-dark transition-colors flex items-center gap-2 mt-auto pt-4">
                            Konsultasi <i className="ph-bold ph-arrow-right"></i>
                        </Link>
                    </div>
                    
                    {/* Virtual Office */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                        <div className="w-14 h-14 bg-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                            <i className="ph-fill ph-map-pin text-3xl text-brand-gold group-hover:text-brand-dark transition-colors"></i>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">Sewa Virtual Office</h3>
                        <p className="text-slate-500 text-sm mb-6">Gunakan alamat bisnis prestisius di pusat bisnis Jakarta tanpa harus menyewa ruang kantor fisik.</p>
                        <Link href="/#kontak" className="text-brand-gold font-bold hover:text-brand-dark transition-colors flex items-center gap-2 mt-auto pt-4">
                            Cek Lokasi <i className="ph-bold ph-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
