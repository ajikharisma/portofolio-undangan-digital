import { motion } from "framer-motion";
import weddingData from "../data/weddingData";

// 1. Tambahkan { onOpen } di parameter
function CoverScreen({ onOpen }) {
    // 2. Ambil query parameter 'to' dari URL
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const guestName = params.get('to') || 'Tamu Undangan';

    // 3. Perbaiki kapitalisasi (gunakan groomNickname & brideNickname dengan 'n' kecil)
    const { groomNickname, brideNickname } = weddingData.couple;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 text-center text-white bg-slate-950 overflow-hidden"
        >
            {/* Background foto dengan Dark Overlay & blur */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 filter blur-[3px] opacity-40"
                style={{
                    backgroundImage: `url('${weddingData.gallery[0] || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'}')`
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90" />

            {/* Konten Utama */}
            <div className="relative z-10 max-w-md w-full flex flex-col items-center gap-6 px-4 py-8">
                {/* Header Teks */}
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light"
                >
                    The Wedding Of
                </motion.p>

                {/* Nama Mempelai */}
                <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-serif tracking-wide text-amber-100 font-bold leading-tight"
                >
                    {groomNickname} <span className="text-amber-400 font-sans text-3xl font-light">&amp;</span> {brideNickname}
                </motion.h1>

                {/* Garis Pembatas */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="w-20 h-[1px] bg-amber-400/50 my-1"
                />

                {/* Kartu Nama Tamu */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col items-center gap-2 bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl border border-amber-500/20 w-full shadow-xl"
                >
                    <p className="text-xs text-slate-300 font-light">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
                    <h2 className="text-xl sm:text-2xl font-semibold text-amber-200 capitalize tracking-wide">
                        {guestName}
                    </h2>
                    <p className="text-[11px] text-slate-400 font-light">
                        *Mohon maaf bila ada kesalahan penulisan nama atau gelar
                    </p>
                </motion.div>

                {/* Tombol Buka Undangan */}
                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onOpen}
                    className="mt-2 inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-medium text-sm rounded-full shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Buka Undangan
                </motion.button>
            </div>
        </motion.div>
    );
}

export default CoverScreen;