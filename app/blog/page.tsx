import React from 'react';
import Link from 'next/link';

export default function Blog() {
    const articles = [
        {
            title: "Panduan Lengkap: Memilih Antara PT dan CV untuk Startup Anda",
            category: "Panduan",
            image: "/article_1.jpg",
            desc: "Pahami perbedaan mendasar dari segi permodalan, tanggung jawab hukum, dan proses pendirian agar Anda tidak salah pilih."
        },
        {
            title: "Cara Mendapatkan NIB via OSS RBA dengan Mudah",
            category: "Regulasi",
            image: "/article_2.jpg",
            desc: "Langkah-langkah praktis dan syarat yang perlu disiapkan untuk mendaftarkan usaha Anda secara resmi di sistem OSS."
        },
        {
            title: "PT Perorangan: Solusi Legalitas Mudah untuk UMKM",
            category: "UMKM",
            image: "/article_3.jpg",
            desc: "Segala hal yang perlu Anda ketahui tentang PT Perorangan, mulai dari syarat pendirian hingga kewajiban pelaporan pajaknya."
        }
    ];

    return (
        <main className="flex-grow flex flex-col pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Blog & Edukasi</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-6">Wawasan Hukum Bisnis</h1>
                    <p className="text-lg text-slate-600">Pelajari regulasi terbaru, tips bisnis, dan panduan legalitas yang disusun langsung oleh tim ahli kami.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group flex flex-col">
                            <div className="h-48 overflow-hidden relative">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-gold transition-colors">{article.title}</h3>
                                <p className="text-slate-500 text-sm mb-6 flex-grow">{article.desc}</p>
                                <Link href="#" className="text-sm font-bold text-brand-dark flex items-center gap-2 mt-auto hover:text-brand-gold transition-colors">
                                    Baca Selengkapnya <i className="ph-bold ph-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
