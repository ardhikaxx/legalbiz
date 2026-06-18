"use client";
import React, { useState } from 'react';

export default function FAQ() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqCategories = [
        {
            title: "Pendirian Perseroan Terbatas (PT)",
            questions: [
                { q: "Berapa minimal jumlah pendiri untuk PT Umum?", a: "PT Umum wajib didirikan oleh minimal 2 orang (bisa WNI atau WNA jika berstatus PMA). Jika Anda sendirian, Anda bisa mempertimbangkan untuk mendirikan PT Perorangan." },
                { q: "Berapa modal dasar yang dibutuhkan untuk PT?", a: "Sesuai UU Cipta Kerja terbaru, tidak ada lagi syarat minimal modal dasar sebesar 50 Juta Rupiah. Modal dasar ditentukan berdasarkan kesepakatan para pendiri, namun kami merekomendasikan minimal modal disetor adalah 25% dari modal dasar." },
                { q: "Apakah saya perlu memiliki kantor fisik untuk mendirikan PT?", a: "Tidak wajib memiliki kantor fisik. Anda bisa menggunakan layanan Virtual Office yang legal dan diakui pemerintah sebagai alamat domisili resmi perusahaan Anda." }
            ]
        },
        {
            title: "Perizinan NIB dan OSS",
            questions: [
                { q: "Apa itu NIB dan apakah wajib?", a: "Nomor Induk Berusaha (NIB) adalah identitas pelaku usaha yang diterbitkan oleh OSS. Saat ini NIB bersifat mutlak dan wajib dimiliki oleh semua perusahaan dan UMKM agar usahanya legal." },
                { q: "Berapa lama proses pembuatan NIB?", a: "Jika seluruh data sudah lengkap dan valid (KTP, NPWP, Akta, SK), pembuatan NIB melalui sistem OSS RBA dapat diselesaikan dalam 1 hari kerja (1x24 jam)." }
            ]
        },
        {
            title: "Hak Kekayaan Intelektual (HAKI)",
            questions: [
                { q: "Kapan saya harus mendaftarkan Merek (HAKI)?", a: "Sebaiknya sejak awal sebelum produk/layanan Anda dikenal luas. Di Indonesia menganut sistem 'First to File', artinya siapa yang mendaftar lebih dulu, dia yang diakui oleh negara." },
                { q: "Berapa lama proses keluarnya Sertifikat Merek?", a: "Proses resmi dari DJKI Kemenkumham memakan waktu sekitar 1 hingga 2 tahun hingga sertifikat fisik keluar. Namun, status pelindungan hukum sudah berlaku sejak tanggal penerimaan pendaftaran (Filing Date)." }
            ]
        }
    ];

    return (
        <main className="flex-grow flex flex-col pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Pusat Bantuan</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-6">Kamus Legalitas & FAQ</h1>
                    <p className="text-lg text-slate-600">Temukan jawaban cepat untuk pertanyaan-pertanyaan yang paling sering diajukan seputar birokrasi dan legalitas bisnis di Indonesia.</p>
                </div>

                <div className="space-y-12">
                    {faqCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h2 className="text-2xl font-bold text-brand-dark mb-6 border-b-2 border-brand-gold inline-block pb-2">{category.title}</h2>
                            <div className="space-y-4">
                                {category.questions.map((faq, qIndex) => {
                                    const index = catIndex * 100 + qIndex; // unique id
                                    return (
                                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                                            <button 
                                                onClick={() => toggleFaq(index)} 
                                                className={`w-full px-6 py-4 text-left font-semibold text-brand-dark flex justify-between items-center transition-colors ${openFaq === index ? 'bg-brand-blue text-white' : 'bg-gray-50 hover:bg-gray-100'}`}
                                            >
                                                <span>{faq.q}</span>
                                                <i className={`ph-bold ph-caret-down transform transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-brand-gold' : ''}`}></i>
                                            </button>
                                            <div className={`px-6 py-4 text-slate-600 text-sm border-t border-gray-200 bg-white ${openFaq === index ? 'block' : 'hidden'}`}>
                                                <p className="leading-relaxed">{faq.a}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Masih Memiliki Pertanyaan Lain?</h3>
                    <p className="text-slate-600 mb-6">Konsultan legal kami selalu siap membantu Anda secara langsung.</p>
                    <a href="/kontak" className="inline-flex items-center gap-2 bg-brand-dark text-brand-gold px-6 py-3 rounded-lg font-bold hover:bg-brand-gold hover:text-brand-dark transition-all">
                        Hubungi Tim Kami <i className="ph-bold ph-headset"></i>
                    </a>
                </div>
            </div>
        </main>
    );
}
