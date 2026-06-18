import React from 'react';

export default function StudiKasus() {
    const cases = [
        {
            title: "Ekspansi Startup F&B: Izin Edar BPOM dan Pendaftaran HAKI",
            client: "PT Rasa Nusantara Maju",
            industry: "Food & Beverage",
            time: "14 Hari Kerja",
            challenge: "Klien ingin meluncurkan produk minuman kemasan baru ke pasar retail nasional secara agresif, namun terkendala karena belum memiliki izin BPOM dan merek mereka rentan dibajak pesaing.",
            solution: "Tim LegalBiz mengambil alih seluruh proses pendaftaran sistematis. Kami memulai pendaftaran perlindungan HAKI di DJKI pada hari yang sama, dan mendampingi kelengkapan dokumen Cara Produksi Pangan Olahan yang Baik (CPPOB) untuk mempercepat keluarnya nomor BPOM MD.",
            result: "Sertifikat merek berstatus terdaftar (dalam perlindungan), dan izin edar BPOM keluar 3 minggu lebih cepat dari estimasi reguler. Produk sukses rilis tanpa kendala hukum."
        },
        {
            title: "Restrukturisasi Bisnis Keluarga menjadi Perseroan Terbatas",
            client: "Toko Sinar Jaya",
            industry: "Retail & Distribusi",
            time: "7 Hari Kerja",
            challenge: "Bisnis keluarga yang sudah berjalan 20 tahun ingin mengikuti tender pengadaan barang BUMN namun ditolak karena masih berbadan hukum perorangan dan tidak memiliki NIB Risiko Menengah Tinggi.",
            solution: "Melakukan pendirian PT Umum dengan 3 pemegang saham keluarga. Kami memastikan Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) yang dipilih tepat agar izin usahanya sesuai dengan kualifikasi tender BUMN.",
            result: "PT Sinar Jaya Abadi resmi berdiri lengkap dengan Akta, SK, NIB dan NPWP Badan dalam waktu 1 minggu. Klien berhasil mengikuti dan memenangkan tender BUMN tersebut."
        },
        {
            title: "Legalitas untuk Foreign Direct Investment (PMA)",
            client: "TechSolutions Pte Ltd (Singapore)",
            industry: "Teknologi Informasi",
            time: "21 Hari Kerja",
            challenge: "Investor asing ingin membuka cabang perusahaan teknologi di Jakarta, namun tidak paham tentang aturan kepemilikan saham asing (DNI) dan pengurusan KITAS untuk direktur ekspatriat.",
            solution: "LegalBiz memberikan konsultasi komprehensif mengenai struktur modal PT PMA, mengurus Akta Pendirian dan persetujuan BKPM, serta menangani pengajuan visa kerja (KITAS).",
            result: "PT PMA berdiri sah secara hukum Indonesia dengan rasio kepemilikan 100% asing (karena masuk sektor prioritas). Direktur ekspatriat dapat bekerja secara legal di Jakarta."
        }
    ];

    return (
        <main className="flex-grow flex flex-col pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Portofolio Klien</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mt-4 mb-6">Studi Kasus Kesuksesan</h1>
                    <p className="text-lg text-slate-600">Pelajari bagaimana kami memecahkan masalah birokrasi dan membantu perusahaan dari berbagai industri mencapai target mereka dengan cepat dan aman.</p>
                </div>

                <div className="space-y-12">
                    {cases.map((c, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10">
                            
                            {/* Summary Column */}
                            <div className="md:w-1/3 bg-brand-gray p-6 rounded-2xl flex flex-col justify-center">
                                <h4 className="text-sm font-bold text-slate-400 mb-1 uppercase tracking-wider">Klien</h4>
                                <p className="font-bold text-brand-dark text-lg mb-4">{c.client}</p>
                                
                                <h4 className="text-sm font-bold text-slate-400 mb-1 uppercase tracking-wider">Industri</h4>
                                <p className="font-bold text-brand-dark text-lg mb-4">{c.industry}</p>
                                
                                <h4 className="text-sm font-bold text-slate-400 mb-1 uppercase tracking-wider">Waktu Penyelesaian</h4>
                                <p className="font-bold text-brand-gold text-lg">{c.time}</p>
                            </div>

                            {/* Content Column */}
                            <div className="md:w-2/3">
                                <h3 className="text-2xl font-bold text-brand-dark mb-6">{c.title}</h3>
                                
                                <div className="space-y-6 text-slate-600">
                                    <div>
                                        <h4 className="font-bold text-brand-dark mb-2 flex items-center gap-2">
                                            <i className="ph-fill ph-warning-circle text-red-500"></i> Tantangan
                                        </h4>
                                        <p className="text-sm leading-relaxed">{c.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-dark mb-2 flex items-center gap-2">
                                            <i className="ph-fill ph-lightbulb text-brand-gold"></i> Solusi LegalBiz
                                        </h4>
                                        <p className="text-sm leading-relaxed">{c.solution}</p>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                        <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                                            <i className="ph-fill ph-check-circle"></i> Hasil Akhir
                                        </h4>
                                        <p className="text-sm text-green-800 leading-relaxed">{c.result}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="/kontak" className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-gold hover:text-brand-dark transition-all">
                        Diskusikan Studi Kasus Anda <i className="ph-bold ph-arrow-right"></i>
                    </a>
                </div>
            </div>
        </main>
    );
}
