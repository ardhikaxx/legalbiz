import React from 'react';

export default function SyaratKetentuan() {
    return (
        <main className="flex-grow flex flex-col pt-24 pb-16 lg:pt-32 lg:pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Syarat & Ketentuan</h1>
                    <p className="text-slate-500">Terakhir diperbarui: 18 Juni 2026</p>
                </div>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>Selamat datang di LegalBiz. Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan berikut ini. Harap membacanya dengan saksama.</p>

                    <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. Layanan Kami</h2>
                    <p>LegalBiz menyediakan jasa konsultasi dan pengurusan perizinan serta legalitas bisnis (termasuk pendirian PT, CV, pendaftaran HAKI, pembuatan NIB/OSS, dan layanan terkait) di Indonesia. Kami bertindak sebagai fasilitator antara klien dengan notaris maupun instansi pemerintah terkait.</p>

                    <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Kewajiban Klien</h2>
                    <p>Klien wajib memberikan informasi, dokumen, dan data-data yang akurat, lengkap, serta valid guna keperluan pengurusan legalitas. Keterlambatan atau kesalahan yang timbul akibat data yang tidak valid sepenuhnya menjadi tanggung jawab klien.</p>

                    <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Pembayaran dan Pengembalian Dana</h2>
                    <p>Proses pekerjaan baru akan dimulai setelah kami menerima down payment (DP) sebesar 50% atau pembayaran penuh sesuai kesepakatan. Apabila proses tidak dapat dilanjutkan karena kesalahan teknis dari instansi (misal: nama PT ditolak), biaya PNBP yang telah disetorkan tidak dapat dikembalikan. Refund hanya berlaku jika pembatalan dilakukan sebelum berkas diproses ke notaris.</p>

                    <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Waktu Pengerjaan</h2>
                    <p>Waktu estimasi pengerjaan yang tercantum pada situs web atau penawaran adalah perkiraan hari kerja aktif. LegalBiz tidak bertanggung jawab atas keterlambatan yang disebabkan oleh gangguan sistem pada portal pemerintah (seperti AHU Online atau OSS) maupun *Force Majeure*.</p>

                    <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">5. Perubahan Syarat</h2>
                    <p>LegalBiz berhak mengubah syarat dan ketentuan ini kapan saja. Klien diharapkan memeriksa halaman ini secara berkala untuk mengetahui perubahan apa pun.</p>
                </div>
            </div>
        </main>
    );
}
