import { motion } from 'framer-motion';

function EventDetail({ event }) {
    const { akadTime, resepsiTime, location, address, mapsEmbedUrl, mapsLocationUrl, date } = event;

    // Format tanggal ke Bahasa Indonesia (contoh: "Jumat, 25 Desember 2026")
    const formattedDate = new Date(date).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto text-center space-y-12">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
            >
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light">
                    Rangkaian Acara
                </p>
                <h2 className="text-3xl font-serif text-amber-100 font-bold">
                    Waktu &amp; Lokasi
                </h2>
                <p className="text-xs text-slate-400 font-light">
                    {formattedDate}
                </p>
            </motion.div>

            {/* 2 Blok Informasi: Akad & Resepsi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card Akad Nikah */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-6 rounded-3xl bg-slate-900/70 border border-amber-500/20 shadow-xl flex flex-col justify-between space-y-4"
                >
                    <div className="space-y-2">
                        <h3 className="text-xl font-serif text-amber-300 font-semibold">Akad Nikah</h3>
                        <p className="text-sm font-medium text-amber-100">{formattedDate}</p>
                        <p className="text-xs text-amber-200/80 bg-amber-500/10 py-1.5 px-4 rounded-full inline-block font-mono border border-amber-500/20">
                            {akadTime}
                        </p>
                    </div>
                    <div className="space-y-1 text-xs text-slate-300 pt-4 border-t border-slate-800">
                        <p className="font-semibold text-slate-200">{location}</p>
                        <p className="text-slate-400 font-light leading-relaxed">{address}</p>
                    </div>
                </motion.div>

                {/* Card Resepsi */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-6 rounded-3xl bg-slate-900/70 border border-amber-500/20 shadow-xl flex flex-col justify-between space-y-4"
                >
                    <div className="space-y-2">
                        <h3 className="text-xl font-serif text-amber-300 font-semibold">Resepsi</h3>
                        <p className="text-sm font-medium text-amber-100">{formattedDate}</p>
                        <p className="text-xs text-amber-200/80 bg-amber-500/10 py-1.5 px-4 rounded-full inline-block font-mono border border-amber-500/20">
                            {resepsiTime}
                        </p>
                    </div>
                    <div className="space-y-1 text-xs text-slate-300 pt-4 border-t border-slate-800">
                        <p className="font-semibold text-slate-200">{location}</p>
                        <p className="text-slate-400 font-light leading-relaxed">{address}</p>
                    </div>
                </motion.div>

            </div>

            {/* Embedded Google Maps */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
            >
                <div className="rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl bg-slate-900">
                    <iframe
                        src={mapsEmbedUrl}
                        width="100%"
                        height="320"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Peta Lokasi Acara"
                    />
                </div>

                {mapsLocationUrl && (
                    <a
                        href={mapsLocationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-medium text-xs rounded-full shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Buka Google Maps
                    </a>
                )}
            </motion.div>
        </section>
    );
}

export default EventDetail;