
"use client";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isSimulating, setIsSimulating] = useState(false);
    const [showSimResult, setShowSimResult] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        AOS.init({
            once: true,
            offset: 50,
            duration: 600,
            easing: 'ease-out-cubic',
        });

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

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleSimulate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSimulating(true);
        setTimeout(() => {
            setIsSimulating(false);
            setShowSimResult(true);
        }, 800);
    };

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
        <main className="font-sans text-brand-text bg-white antialiased">
            

    <header id="header" className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm ${scrolled ? "shadow-md py-1" : "py-0"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                {/*  Logo  */}
                <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                    <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center">
                        <i className="ph-fill ph-scales text-brand-gold text-2xl"></i>
                    </div>
                    <span className="font-bold text-2xl text-brand-dark tracking-tight">LegalBiz<span className="text-brand-gold">.</span></span>
                </div>

                {/*  Desktop Menu  */}
                <nav className="hidden md:flex space-x-8">
                    <a href="#beranda" className="text-sm font-medium text-brand-dark hover:text-brand-gold transition-colors">Beranda</a>
                    <a href="#layanan" className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors">Layanan</a>
                    <a href="#harga" className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors">Paket Harga</a>
                    <a href="#proses" className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors">Proses</a>
                    <a href="#tentang" className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors">Tentang Kami</a>
                    <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-brand-gold transition-colors">FAQ</a>
                </nav>

                {/*  CTA Button Desktop  */}
                <div className="hidden md:flex">
                    <a href="#kontak" className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 shadow-md">
                        Konsultasi Gratis
                    </a>
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
        <div id="mobile-menu" className={`hidden md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg ${isMenuOpen ? "" : "hidden"}`}>
            <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#beranda" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-brand-dark border-b border-gray-50">Beranda</a>
                <a href="#layanan" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 border-b border-gray-50">Layanan</a>
                <a href="#harga" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 border-b border-gray-50">Paket Harga</a>
                <a href="#proses" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 border-b border-gray-50">Proses</a>
                <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 border-b border-gray-50">Tentang Kami</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 border-b border-gray-50">FAQ</a>
                <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 mt-2 text-center text-base font-semibold bg-brand-dark text-white rounded-lg">Konsultasi Gratis</a>
            </div>
        </div>
    </header>

    <section id="beranda" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-dark hero-pattern">
        {/*  Background Accents  */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue to-transparent opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/*  Text Content  */}
                <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/50 border border-brand-gold/30 text-brand-lightgold text-sm font-medium mb-6">
                        <i className="ph-fill ph-check-circle text-brand-gold"></i>
                        Partner Legalitas Terpercaya #1 di Indonesia
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Pendirian PT & Izin Usaha <span className="text-brand-gold">Lebih Mudah</span>, Cepat, dan Aman.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Bantu urus legalitas usaha mulai dari PT, CV, NIB, OSS, NPWP, hingga izin operasional dengan proses transparan dan pendampingan ahli hukum profesional.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                        <a href="#kontak" className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-white transition-all shadow-gold flex items-center justify-center gap-2 group">
                            Konsultasi Gratis <i className="ph-bold ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </a>
                        <a href="#layanan" className="px-8 py-4 bg-transparent border border-gray-500 text-white font-semibold rounded-lg hover:border-brand-gold hover:text-brand-gold transition-all flex items-center justify-center">
                            Lihat Layanan
                        </a>
                    </div>

                    {/*  Statistics  */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-700/50">
                        <div>
                            <h3 className="text-3xl font-bold text-white">5.000+</h3>
                            <p className="text-sm text-gray-400 mt-1">Perusahaan Berdiri</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">10.000+</h3>
                            <p className="text-sm text-gray-400 mt-1">Klien Terbantu</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">99%</h3>
                            <p className="text-sm text-gray-400 mt-1">Tingkat Kepuasan</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">10+</h3>
                            <p className="text-sm text-gray-400 mt-1">Tahun Pengalaman</p>
                        </div>
                    </div>
                </div>

                {/*  Hero Image/Illustration  */}
                <div className="lg:w-1/2 relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                        {/* Using a generic placeholder for business meeting */}
                        <img src="/hero_image.jpg" alt="Konsultasi Bisnis Profesional" className="w-full h-auto object-cover opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                        
                        {/*  Floating Badge  */}
                        <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                <i className="ph-bold ph-shield-check text-white text-2xl"></i>
                            </div>
                            <div>
                                <h4 className="text-brand-dark font-bold text-sm">Legal & Terjamin 100%</h4>
                                <p className="text-xs text-slate-600">Terdaftar resmi di Kemenkumham & OSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-10 bg-brand-gray border-b border-gray-200">
        <div className="container mx-auto px-4">
            <p className="text-center text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">Dipercaya oleh ribuan startup dan perusahaan ternama</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/*  Using Text placeholders for logos to ensure no broken images  */}
                <div className="text-2xl font-black text-slate-400 flex items-center gap-2"><i className="ph-fill ph-buildings"></i> CORP.A</div>
                <div className="text-2xl font-black text-slate-400 flex items-center gap-2"><i className="ph-fill ph-storefront"></i> UMKM Hub</div>
                <div className="text-2xl font-black text-slate-400 flex items-center gap-2"><i className="ph-fill ph-rocket-launch"></i> TechStart</div>
                <div className="text-2xl font-black text-slate-400 flex items-center gap-2"><i className="ph-fill ph-factory"></i> ManuPura</div>
                <div className="text-2xl font-black text-slate-400 flex items-center gap-2"><i className="ph-fill ph-shopping-cart"></i> RetailGo</div>
            </div>
        </div>
    </section>

    <section id="layanan" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Layanan Kami</span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-4">Solusi Legalitas Bisnis Terpadu</h2>
                <p className="text-slate-600 text-lg">Kami menyediakan berbagai layanan untuk memastikan bisnis Anda berjalan aman, legal, dan sesuai regulasi di Indonesia.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/*  Service Cards  */}
                
            </div>
        </div>
    </section>

    <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/3" data-aos="fade-right">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Mengapa Memilih <span className="text-brand-gold">LegalBiz</span>?</h2>
                    <p className="text-gray-400 mb-8">Kami tidak hanya sekadar mengurus dokumen, tapi bertindak sebagai partner pertumbuhan bisnis Anda dengan pondasi legal yang kuat.</p>
                    <a href="#kontak" className="inline-block bg-white text-brand-dark font-bold px-6 py-3 rounded-lg hover:bg-brand-gold transition-colors">Mulai Konsultasi</a>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/*  Feature Cards  */}
                    <div className="bg-brand-blue/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
                        <i className="ph-fill ph-rocket text-brand-gold text-4xl mb-4"></i>
                        <h4 className="text-white font-bold mb-2">Proses Cepat</h4>
                        <p className="text-gray-400 text-sm">PT selesai dalam 3-5 hari kerja berkat sistem yang efisien.</p>
                    </div>
                    <div className="bg-brand-blue/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="200">
                        <i className="ph-fill ph-users text-brand-gold text-4xl mb-4"></i>
                        <h4 className="text-white font-bold mb-2">Tim Profesional</h4>
                        <p className="text-gray-400 text-sm">Ditangani langsung oleh Notaris & Konsultan Hukum berpengalaman.</p>
                    </div>
                    <div className="bg-brand-blue/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="300">
                        <i className="ph-fill ph-tag text-brand-gold text-4xl mb-4"></i>
                        <h4 className="text-white font-bold mb-2">Harga Transparan</h4>
                        <p className="text-gray-400 text-sm">Tidak ada biaya tersembunyi. Bayar sesuai paket yang dipilih.</p>
                    </div>
                    <div className="bg-brand-blue/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="400">
                        <i className="ph-fill ph-shield-check text-brand-gold text-4xl mb-4"></i>
                        <h4 className="text-white font-bold mb-2">Legal Terjamin</h4>
                        <p className="text-gray-400 text-sm">Dokumen sah terdaftar di Kemenkumham & sistem pemerintah.</p>
                    </div>
                    <div className="bg-brand-blue/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="500">
                        <i className="ph-fill ph-handshake text-brand-gold text-4xl mb-4"></i>
                        <h4 className="text-white font-bold mb-2">Pendampingan</h4>
                        <p className="text-gray-400 text-sm">Dikawal mulai dari konsultasi awal hingga dokumen diserahterimakan.</p>
                    </div>
                    <div className="bg-brand-blue/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="600">
                        <i className="ph-fill ph-headset text-brand-gold text-4xl mb-4"></i>
                        <h4 className="text-white font-bold mb-2">Dukungan Online</h4>
                        <p className="text-gray-400 text-sm">Layanan responsif via WhatsApp dan Email kapanpun dibutuhkan.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="harga" className="py-24 bg-brand-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Transparan & Terjangkau</span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-4">Pilih Paket Pendirian PT</h2>
                <p className="text-slate-600 text-lg">Sesuaikan dengan kebutuhan dan skala bisnis Anda. Harga sudah termasuk biaya Notaris dan PNBP.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                
                {/*  Basic Plan  */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative flex flex-col" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Paket Basic</h3>
                    <p className="text-slate-500 text-sm mb-6">Cocok untuk PT Skala Kecil dengan modal dasar minimal.</p>
                    <div className="mb-6">
                        <span className="text-3xl font-extrabold text-brand-dark">Rp 3.500.000</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">Pengecekan Nama PT</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">Akta Pendirian Notaris</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">SK Kemenkumham</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">NIB (Nomor Induk Berusaha)</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-x text-gray-300 mt-1"></i><span className="text-sm text-gray-400 line-through">NPWP Badan & SKT</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-x text-gray-300 mt-1"></i><span className="text-sm text-gray-400 line-through">Izin Lokasi / Tata Ruang</span></li>
                    </ul>
                    <div className="bg-gray-50 rounded-lg p-3 mb-6 flex items-center justify-center gap-2 text-sm text-slate-600 font-medium">
                        <i className="ph ph-clock"></i> Estimasi: 5-7 Hari Kerja
                    </div>
                    <a href="#kontak" className="w-full block text-center py-3 rounded-lg border-2 border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white transition-colors">Pilih Basic</a>
                </div>

                {/*  Professional Plan (Highlighted)  */}
                <div className="bg-brand-dark rounded-2xl p-8 shadow-premium transform lg:-translate-y-4 relative flex flex-col ring-4 ring-brand-gold ring-opacity-50 z-10" data-aos="fade-up" data-aos-delay="200">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-dark px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                        Most Popular
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Paket Professional</h3>
                    <p className="text-gray-400 text-sm mb-6">Ideal untuk operasional langsung, dokumen super lengkap.</p>
                    <div className="mb-6">
                        <span className="text-3xl font-extrabold text-white">Rp 5.500.000</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-brand-gold mt-1"></i><span className="text-sm text-gray-300">Pengecekan Nama PT</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-brand-gold mt-1"></i><span className="text-sm text-gray-300">Akta Pendirian Notaris</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-brand-gold mt-1"></i><span className="text-sm text-gray-300">SK Kemenkumham</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-brand-gold mt-1"></i><span className="text-sm text-gray-300">NIB & Sertifikat Standar</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-brand-gold mt-1"></i><span className="text-sm text-gray-300">NPWP Badan & SKT</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-brand-gold mt-1"></i><span className="text-sm text-white font-medium">Stempel Perusahaan</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-brand-gold mt-1"></i><span className="text-sm text-white font-medium">Drafting Perjanjian Pemegang Saham</span></li>
                    </ul>
                    <div className="bg-white/10 rounded-lg p-3 mb-6 flex items-center justify-center gap-2 text-sm text-gray-300 font-medium">
                        <i className="ph ph-clock"></i> Estimasi: 3-5 Hari Kerja
                    </div>
                    <a href="#kontak" className="w-full block text-center py-3 rounded-lg bg-brand-gold text-brand-dark font-bold hover:bg-white transition-colors shadow-gold">Pesan Sekarang</a>
                </div>

                {/*  Premium Plan  */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative flex flex-col md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full" data-aos="fade-up" data-aos-delay="300">
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Paket Premium</h3>
                    <p className="text-slate-500 text-sm mb-6">Layanan all-in-one termasuk Virtual Office 1 Tahun.</p>
                    <div className="mb-6">
                        <span className="text-3xl font-extrabold text-brand-dark">Rp 8.500.000</span>
                    </div>
                    <ul className="space-y-4 mb-8 flex-grow">
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">Semua Fitur Paket Pro</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600 font-bold">Virtual Office 1 Tahun (JKT)</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">Surat Keterangan Domisili</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">Pendaftaran Hak Merek (HAKI)</span></li>
                        <li className="flex items-start gap-3"><i className="ph-bold ph-check text-green-500 mt-1"></i><span className="text-sm text-slate-600">Konsultasi Pajak Awal</span></li>
                    </ul>
                    <div className="bg-gray-50 rounded-lg p-3 mb-6 flex items-center justify-center gap-2 text-sm text-slate-600 font-medium">
                        <i className="ph ph-clock"></i> Estimasi: 7-10 Hari Kerja
                    </div>
                    <a href="#kontak" className="w-full block text-center py-3 rounded-lg border-2 border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white transition-colors">Pilih Premium</a>
                </div>

            </div>
            <p className="text-center text-sm text-slate-500 mt-8">*Harga dapat menyesuaikan tergantung domisili dan jenis perizinan khusus.</p>
        </div>
    </section>

    <section id="proses" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/*  Timeline Alur Proses  */}
                <div>
                    <div className="mb-10" data-aos="fade-right">
                        <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Cara Kerja</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">Alur Proses Pendirian PT</h2>
                        <p className="text-slate-600">Proses sistematis yang memastikan legalitas Anda selesai tepat waktu.</p>
                    </div>

                    <div className="relative timeline-line pl-10 md:pl-0" data-aos="fade-up">
                        
                        {/*  Step 1  */}
                        <div className="relative md:w-1/2 md:pr-12 md:ml-0 mb-8 md:text-right">
                            <div className="absolute left-[-28px] md:left-auto md:right-[-16px] top-1 w-8 h-8 rounded-full bg-brand-dark text-brand-gold border-4 border-white flex items-center justify-center font-bold shadow-sm z-10 text-sm">1</div>
                            <h4 className="text-lg font-bold text-brand-dark">Konsultasi & Pilih Paket</h4>
                            <p className="text-sm text-slate-500 mt-1">Diskusi kebutuhan bisnis dan penentuan nama PT.</p>
                        </div>

                        {/*  Step 2  */}
                        <div className="relative md:w-1/2 md:pl-12 md:ml-auto mb-8">
                            <div className="absolute left-[-28px] md:left-[-16px] top-1 w-8 h-8 rounded-full bg-brand-dark text-brand-gold border-4 border-white flex items-center justify-center font-bold shadow-sm z-10 text-sm">2</div>
                            <h4 className="text-lg font-bold text-brand-dark">Pengumpulan Data</h4>
                            <p className="text-sm text-slate-500 mt-1">Mengisi form dan melengkapi dokumen persyaratan.</p>
                        </div>

                        {/*  Step 3  */}
                        <div className="relative md:w-1/2 md:pr-12 md:ml-0 mb-8 md:text-right">
                            <div className="absolute left-[-28px] md:left-auto md:right-[-16px] top-1 w-8 h-8 rounded-full bg-brand-dark text-brand-gold border-4 border-white flex items-center justify-center font-bold shadow-sm z-10 text-sm">3</div>
                            <h4 className="text-lg font-bold text-brand-dark">Penyusunan Akta</h4>
                            <p className="text-sm text-slate-500 mt-1">Drafting akta oleh Notaris dan penandatanganan (Minuta).</p>
                        </div>

                        {/*  Step 4  */}
                        <div className="relative md:w-1/2 md:pl-12 md:ml-auto mb-8">
                            <div className="absolute left-[-28px] md:left-[-16px] top-1 w-8 h-8 rounded-full bg-brand-dark text-brand-gold border-4 border-white flex items-center justify-center font-bold shadow-sm z-10 text-sm">4</div>
                            <h4 className="text-lg font-bold text-brand-dark">Pengesahan SK</h4>
                            <p className="text-sm text-slate-500 mt-1">Pendaftaran dan penerbitan SK Kemenkumham.</p>
                        </div>

                        {/*  Step 5  */}
                        <div className="relative md:w-1/2 md:pr-12 md:ml-0 mb-8 md:text-right">
                            <div className="absolute left-[-28px] md:left-auto md:right-[-16px] top-1 w-8 h-8 rounded-full bg-brand-dark text-brand-gold border-4 border-white flex items-center justify-center font-bold shadow-sm z-10 text-sm">5</div>
                            <h4 className="text-lg font-bold text-brand-dark">NIB & NPWP</h4>
                            <p className="text-sm text-slate-500 mt-1">Pendaftaran di sistem OSS dan DJP untuk pajak.</p>
                        </div>

                         {/*  Step 6  */}
                         <div className="relative md:w-1/2 md:pl-12 md:ml-auto">
                            <div className="absolute left-[-28px] md:left-[-16px] top-1 w-8 h-8 rounded-full bg-brand-gold text-brand-dark border-4 border-white flex items-center justify-center font-bold shadow-sm z-10 text-sm"><i className="ph-bold ph-check"></i></div>
                            <h4 className="text-lg font-bold text-brand-dark">Dokumen Selesai</h4>
                            <p className="text-sm text-slate-500 mt-1">Penyerahan seluruh dokumen legalitas kepada klien.</p>
                        </div>

                    </div>
                </div>

                {/*  Dokumen Syarat & Simulasi  */}
                <div data-aos="fade-left">
                    {/*  Checklist Card  */}
                    <div className="bg-brand-gray rounded-2xl p-8 mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <i className="ph-duotone ph-folder-open text-3xl text-brand-gold"></i>
                            <h3 className="text-2xl font-bold text-brand-dark">Dokumen yang Dibutuhkan</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check-circle text-green-500 mt-1"></i>
                                <span className="text-slate-700 text-sm">E-KTP Pendiri (Min. 2 Orang)</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check-circle text-green-500 mt-1"></i>
                                <span className="text-slate-700 text-sm">NPWP Pribadi Pendiri</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check-circle text-green-500 mt-1"></i>
                                <span className="text-slate-700 text-sm">Email Aktif Perusahaan</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check-circle text-green-500 mt-1"></i>
                                <span className="text-slate-700 text-sm">Nomor Telepon Pendiri</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check-circle text-green-500 mt-1"></i>
                                <span className="text-slate-700 text-sm">3 Pilihan Nama PT</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check-circle text-green-500 mt-1"></i>
                                <span className="text-slate-700 text-sm">Surat Domisili Usaha</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check-circle text-green-500 mt-1"></i>
                                <span className="text-slate-700 text-sm">Struktur Kepemilikan Saham</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <i className="ph-fill ph-check-circle text-green-500 mt-1"></i>
                                <span className="text-slate-700 text-sm">Bidang Usaha (KBLI)</span>
                            </div>
                        </div>
                    </div>

                    {/*  Simulator UI  */}
                    <div className="bg-brand-dark rounded-2xl p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold rounded-bl-full opacity-10"></div>
                        <h3 className="text-xl font-bold mb-4">Simulasi Biaya & Waktu</h3>
                        <form id="sim-form" className="space-y-4 relative z-10" onSubmit={handleSimulate}>
                            <div>
                                <label className="block text-xs text-gray-400 mb-1">Jenis Badan Usaha</label>
                                <select className="w-full bg-brand-blue border border-gray-600 rounded-lg p-2.5 text-sm focus:ring-brand-gold focus:border-brand-gold outline-none">
                                    <option>PT Persekutuan Modal (Umum)</option>
                                    <option>PT Perorangan</option>
                                    <option>CV (Commanditaire Vennootschap)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs text-gray-400 mb-1">Lokasi Perusahaan</label>
                                <select className="w-full bg-brand-blue border border-gray-600 rounded-lg p-2.5 text-sm focus:ring-brand-gold focus:border-brand-gold outline-none">
                                    <option>DKI Jakarta</option>
                                    <option>Bodetabek</option>
                                    <option>Luar Jadetabek</option>
                                </select>
                            </div>
                            <button type="submit" className={`w-full bg-brand-gold text-brand-dark font-bold py-3 rounded-lg hover:bg-white transition-colors ${isSimulating ? 'opacity-75' : ''}`}>
                                {isSimulating ? 'Menghitung...' : showSimResult ? 'Hitung Ulang' : 'Hitung Estimasi'}
                            </button>
                        </form>

                        {/*  Result Area (Hidden by default)  */}
                        <div id="sim-result" className={`${showSimResult ? '' : 'hidden'} mt-6 p-4 bg-brand-blue rounded-lg border border-brand-gold/30`}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-300">Estimasi Biaya Mulai:</span>
                                <span className="text-lg font-bold text-brand-gold">Rp 4.500.000</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-300">Waktu Pengerjaan:</span>
                                <span className="text-sm font-bold text-white">4-6 Hari Kerja</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-3">*Ini adalah estimasi awal. Hubungi kami untuk penawaran akurat.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-slate-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Testimoni</span>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-4 mb-4">Apa Kata Klien Kami?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*  Testimonial 1  */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                    <div className="flex text-brand-gold mb-4 text-sm">
                        <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                    </div>
                    <p className="text-slate-600 mb-6 italic">"Proses pendirian PT startup tech kami sangat mulus. Tim LegalBiz sangat responsif menjelaskan hal-hal legal yang kami tidak pahami. NIB dan NPWP selesai lebih cepat dari estimasi."</p>
                    <div className="flex items-center gap-4">
                        <img src="/avatar_1.jpg" alt="Client" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-brand-dark text-sm">Andi Pratama</h4>
                            <p className="text-xs text-slate-500">CEO, PT Tekno Inovasi Maju</p>
                        </div>
                    </div>
                </div>

                {/*  Testimonial 2  */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                    <div className="flex text-brand-gold mb-4 text-sm">
                        <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                    </div>
                    <p className="text-slate-600 mb-6 italic">"Beralih dari usaha rumahan menjadi CV dengan bantuan LegalBiz adalah keputusan tepat. Harganya transparan, tidak ada biaya siluman. Sangat recommended untuk UMKM."</p>
                    <div className="flex items-center gap-4">
                        <img src="/avatar_2.jpg" alt="Client" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-brand-dark text-sm">Siti Nurhaliza</h4>
                            <p className="text-xs text-slate-500">Founder, CV Rasa Nusantara</p>
                        </div>
                    </div>
                </div>

                {/*  Testimonial 3  */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                    <div className="flex text-brand-gold mb-4 text-sm">
                        <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                    </div>
                    <p className="text-slate-600 mb-6 italic">"Pengurusan Izin Edar dan HAKI untuk produk kosmetik kami ditangani dengan sangat profesional. Pendampingannya full sampai tuntas. Terima kasih LegalBiz!"</p>
                    <div className="flex items-center gap-4">
                        <img src="/avatar_3.jpg" alt="Client" className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-brand-dark text-sm">Budi Wibowo</h4>
                            <p className="text-xs text-slate-500">Direktur, PT Cantik Alami</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Mini Portfolio/Stats Footer  */}
            <div className="mt-16 bg-brand-dark rounded-2xl p-8 flex flex-wrap justify-around items-center text-center gap-6" data-aos="zoom-in">
                <div>
                    <div className="text-3xl font-black text-brand-gold mb-1">1.2k+</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wide">Startup Digital</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
                <div>
                    <div className="text-3xl font-black text-brand-gold mb-1">2.5k+</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wide">UMKM & Retail</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
                <div>
                    <div className="text-3xl font-black text-brand-gold mb-1">800+</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wide">Manufaktur & Jasa</div>
                </div>
            </div>
        </div>
    </section>

    <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
            
            {/*  FAQ Section  */}
            <div className="lg:w-1/2">
                <div className="mb-10" data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-brand-dark mb-4">Pertanyaan Umum (FAQ)</h2>
                    <p className="text-slate-600">Jawaban untuk pertanyaan yang sering diajukan seputar pendirian perusahaan.</p>
                </div>

                <div className="space-y-4" id="accordion" data-aos="fade-up">
                    {/*  FAQ 1  */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button onClick={() => toggleFaq(1)} className={`faq-btn w-full px-6 py-4 text-left font-semibold text-brand-dark hover:bg-gray-100 flex justify-between items-center transition-colors ${openFaq === 1 ? 'bg-gray-100' : 'bg-gray-50'}`}>
                            <span>Berapa lama proses pendirian PT?</span>
                            <i className={`ph-bold ph-caret-down transform transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`}></i>
                        </button>
                        <div className={`faq-content px-6 py-4 text-slate-600 text-sm border-t border-gray-200 ${openFaq === 1 ? '' : 'hidden'}`}>
                            Proses standar pendirian PT memakan waktu sekitar 3-7 hari kerja terhitung sejak seluruh dokumen persyaratan kami terima dengan lengkap dan nama PT disetujui.
                        </div>
                    </div>
                    {/*  FAQ 2  */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button onClick={() => toggleFaq(2)} className={`faq-btn w-full px-6 py-4 text-left font-semibold text-brand-dark hover:bg-gray-100 flex justify-between items-center transition-colors ${openFaq === 2 ? 'bg-gray-100' : 'bg-gray-50'}`}>
                            <span>Apa syarat utama mendirikan PT?</span>
                            <i className={`ph-bold ph-caret-down transform transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`}></i>
                        </button>
                        <div className={`faq-content px-6 py-4 text-slate-600 text-sm border-t border-gray-200 ${openFaq === 2 ? '' : 'hidden'}`}>
                            Syarat utama meliputi minimal 2 orang pendiri (untuk PT Umum), KTP dan NPWP para pendiri, alamat domisili usaha yang jelas, dan penentuan modal dasar perusahaan.
                        </div>
                    </div>
                    {/*  FAQ 3  */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button onClick={() => toggleFaq(3)} className={`faq-btn w-full px-6 py-4 text-left font-semibold text-brand-dark hover:bg-gray-100 flex justify-between items-center transition-colors ${openFaq === 3 ? 'bg-gray-100' : 'bg-gray-50'}`}>
                            <span>Apakah proses bisa dilakukan Full Online?</span>
                            <i className={`ph-bold ph-caret-down transform transition-transform duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`}></i>
                        </button>
                        <div className={`faq-content px-6 py-4 text-slate-600 text-sm border-t border-gray-200 ${openFaq === 3 ? '' : 'hidden'}`}>
                            Ya, hampir seluruh proses pengumpulan data dan koordinasi dilakukan secara online. Namun, untuk penandatanganan Akta (Minuta), Anda perlu hadir di hadapan Notaris, atau kami bisa mengirimkan dokumen untuk ditandatangani jika kondisi memungkinkan sesuai prosedur.
                        </div>
                    </div>
                    {/*  FAQ 4  */}
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button onClick={() => toggleFaq(4)} className={`faq-btn w-full px-6 py-4 text-left font-semibold text-brand-dark hover:bg-gray-100 flex justify-between items-center transition-colors ${openFaq === 4 ? 'bg-gray-100' : 'bg-gray-50'}`}>
                            <span>Apakah ada biaya tambahan di luar paket?</span>
                            <i className={`ph-bold ph-caret-down transform transition-transform duration-300 ${openFaq === 4 ? 'rotate-180' : ''}`}></i>
                        </button>
                        <div className={`faq-content px-6 py-4 text-slate-600 text-sm border-t border-gray-200 ${openFaq === 4 ? '' : 'hidden'}`}>
                            Harga paket kami bersifat All-in untuk standar pembuatan akta dan perizinan dasar. Biaya tambahan hanya berlaku jika ada request khusus (seperti domisili virtual office, modal disetor sangat besar yang mempengaruhi PNBP, atau perizinan spesifik sektor tertentu).
                        </div>
                    </div>
                </div>
            </div>

            {/*  Articles Section  */}
            <div className="lg:w-1/2">
                <div className="flex justify-between items-end mb-8" data-aos="fade-left">
                    <div>
                        <h2 className="text-2xl font-bold text-brand-dark mb-2">Artikel & Edukasi</h2>
                        <p className="text-sm text-slate-600">Panduan seputar legalitas bisnis.</p>
                    </div>
                    <a href="#" className="text-sm text-brand-gold font-semibold hover:underline">Lihat Semua</a>
                </div>

                <div className="space-y-6">
                    {/*  Article 1  */}
                    <a href="#" className="group flex gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all" data-aos="fade-up" data-aos-delay="100">
                        <div className="w-24 h-24 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0">
                             <img src="/article_1.jpg" alt="Thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-brand-gold mb-1 block">Panduan</span>
                            <h4 className="font-bold text-brand-dark text-sm sm:text-base group-hover:text-brand-gold transition-colors mb-2 line-clamp-2">Perbedaan Utama PT dan CV, Mana yang Cocok untuk Bisnis Anda?</h4>
                            <p className="text-xs text-slate-500"><i className="ph ph-calendar-blank"></i> 12 Okt 2026</p>
                        </div>
                    </a>
                    {/*  Article 2  */}
                    <a href="#" className="group flex gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-24 h-24 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0">
                             <img src="/article_2.jpg" alt="Thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-brand-gold mb-1 block">Regulasi</span>
                            <h4 className="font-bold text-brand-dark text-sm sm:text-base group-hover:text-brand-gold transition-colors mb-2 line-clamp-2">Cara Mendaftar dan Mendapatkan NIB melalui Sistem OSS RBA Terbaru</h4>
                            <p className="text-xs text-slate-500"><i className="ph ph-calendar-blank"></i> 05 Okt 2026</p>
                        </div>
                    </a>
                    {/*  Article 3  */}
                    <a href="#" className="group flex gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all" data-aos="fade-up" data-aos-delay="300">
                        <div className="w-24 h-24 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0">
                             <img src="/article_3.jpg" alt="Thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-brand-gold mb-1 block">UMKM</span>
                            <h4 className="font-bold text-brand-dark text-sm sm:text-base group-hover:text-brand-gold transition-colors mb-2 line-clamp-2">Keuntungan Mendirikan PT Perorangan bagi Pelaku UMKM</h4>
                            <p className="text-xs text-slate-500"><i className="ph ph-calendar-blank"></i> 28 Sep 2026</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section className="bg-brand-gold py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Siapkan Legalitas Usaha Anda Sekarang!</h2>
            <p className="text-brand-dark/80 font-medium mb-8 max-w-2xl mx-auto">Jangan biarkan masalah legalitas menghambat pertumbuhan bisnis Anda. Konsultasikan dengan tim ahli LegalBiz hari ini.</p>
            <a href="#kontak" className="inline-block bg-brand-dark text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-brand-dark transition-all shadow-lg text-lg">
                Mulai Konsultasi Gratis
            </a>
        </div>
    </section>

    <section id="kontak" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-premium overflow-hidden border border-gray-100">
                
                {/*  Contact Info & Map  */}
                <div className="lg:w-2/5 bg-brand-dark p-10 text-white flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Hubungi Kami</h3>
                        <p className="text-gray-400 text-sm mb-8">Tim konsultan kami siap membantu menjawab semua pertanyaan Anda.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ph-fill ph-map-pin text-brand-gold text-xl"></i>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-sm">Alamat Kantor</h5>
                                    <p className="text-gray-400 text-sm mt-1">Gedung LegalBiz Tower Lt. 5<br />Jl. Sudirman No. 123, Jakarta Selatan 12190</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ph-fill ph-whatsapp-logo text-brand-gold text-xl"></i>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-sm">WhatsApp / Telepon</h5>
                                    <p className="text-gray-400 text-sm mt-1">+62 812-3456-7890</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ph-fill ph-envelope-simple text-brand-gold text-xl"></i>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-sm">Email</h5>
                                    <p className="text-gray-400 text-sm mt-1">halo@legalbiz.co.id</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="ph-fill ph-clock text-brand-gold text-xl"></i>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-sm">Jam Operasional</h5>
                                    <p className="text-gray-400 text-sm mt-1">Senin - Jumat: 09.00 - 17.00 WIB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Contact Form  */}
                <div className="lg:w-3/5 p-10">
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
                            <textarea rows={4} required className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-all" placeholder="Jelaskan secara singkat kebutuhan Anda..."></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors flex justify-center items-center gap-2">
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
    </section>

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
                        <li><a href="#tentang" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Tentang Kami</a></li>
                        <li><a href="#proses" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Cara Kerja</a></li>
                        <li><a href="#harga" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Paket & Harga</a></li>
                        <li><a href="#" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Karir</a></li>
                        <li><a href="#" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Syarat & Ketentuan</a></li>
                        <li><a href="#" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Kebijakan Privasi</a></li>
                    </ul>
                </div>

                {/*  Services Links  */}
                <div>
                    <h4 className="text-white font-bold mb-6">Layanan Populer</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Pendirian PT Umum</a></li>
                        <li><a href="#" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Pendirian PT Perorangan</a></li>
                        <li><a href="#" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Pembuatan CV</a></li>
                        <li><a href="#" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Daftar Merek (HAKI)</a></li>
                        <li><a href="#" className="text-gray-400 text-sm hover:text-brand-gold transition-colors">Pengurusan NIB & OSS</a></li>
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
    <a href="#kontak" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-green-600 transition-all z-50 group">
        <i className="ph-fill ph-whatsapp-logo text-3xl"></i>
        <span className="absolute right-16 bg-white text-brand-dark text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat Konsultan</span>
    </a>

    {/*  Sticky Mobile CTA  */}
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 z-40 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)]">
        <a href="#kontak" className="w-full block text-center bg-brand-dark text-brand-gold font-bold py-3 rounded-lg text-sm">Konsultasi Sekarang</a>
    </div>

    

        </main>
    );
}
