import React from 'react';

export default function KebijakanPrivasi() {
    return (
        <main className="flex-grow flex flex-col pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Kebijakan Privasi</h1>
                    <p className="text-slate-500">Terakhir diperbarui: 18 Juni 2026</p>
                </div>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>Privasi dan keamanan data Anda sangat penting bagi kami. Kebijakan Privasi ini menjelaskan bagaimana LegalBiz mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.</p>

                    <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h2>
                    <p>Untuk mengurus legalitas bisnis Anda, kami akan meminta dokumen identitas seperti:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Kartu Tanda Penduduk (KTP) dan Nomor Pokok Wajib Pajak (NPWP) pengurus dan pemegang saham.</li>
                        <li>Informasi kontak seperti alamat email, nomor telepon, dan alamat domisili.</li>
                        <li>Detail bisnis, nama perusahaan, dan rincian modal dasar.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">2. Penggunaan Informasi</h2>
                    <p>Semua dokumen dan data yang kami kumpulkan semata-mata hanya akan digunakan untuk keperluan pendaftaran legalitas di sistem instansi negara terkait (AHU Kemenkumham, OSS BKPM, DJKI, dan instansi lain yang relevan). Kami tidak akan pernah menjual atau menyewakan data Anda kepada pihak ketiga untuk tujuan pemasaran.</p>

                    <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">3. Penyimpanan dan Keamanan Data</h2>
                    <p>Kami menerapkan sistem enkripsi dan prosedur keamanan siber standar industri untuk melindungi server kami dari akses tidak sah. Dokumen fisik yang kami terima akan disimpan dengan ketat dan hanya diakses oleh staf atau notaris yang berwenang memproses berkas Anda.</p>

                    <h2 className="text-2xl font-bold text-brand-dark mt-8 mb-4">4. Hak Pengguna</h2>
                    <p>Anda berhak untuk meminta salinan data pribadi yang kami simpan, serta berhak meminta kami untuk menghapus data Anda dari *database* kami secara permanen setelah seluruh proses legalitas Anda selesai (kecuali data yang diwajibkan oleh undang-undang untuk disimpan sebagai arsip).</p>
                    
                    <p className="mt-8 font-medium">Jika Anda memiliki pertanyaan terkait privasi data Anda, silakan hubungi kami di privasi@legalbiz.co.id.</p>
                </div>
            </div>
        </main>
    );
}
