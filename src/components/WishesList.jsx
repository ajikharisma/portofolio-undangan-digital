import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WishesList({ wishes = [] }) {
    const [showAll, setShowAll] = useState(false);

    // Pembatasan tampilan ucapan (5 teratas jika showAll false)
    const displayedWishes = showAll ? wishes : wishes.slice(0, 5);

    // Helper Badge Kehadiran
    const renderAttendanceBadge = (status) => {
        switch (status) {
            case 'hadir':
                return (
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                        Hadir
                    </span>
                );
            case 'tidak_hadir':
                return (
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium">
                        Absen
                    </span>
                );
            case 'ragu':
            default:
                return (
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
                        Ragu-ragu
                    </span>
                );
        }
    };

    return (
        <section className="py-12 px-4 max-w-xl mx-auto text-center space-y-6">
            <h3 className="text-xl font-serif text-amber-200">
                Doa &amp; Ucapan ({wishes.length})
            </h3>

            {/* Kondisional jika belum ada ucapan */}
            {wishes.length === 0 ? (
                <p className="text-xs text-slate-400 py-6 italic">
                    Belum ada ucapan, jadilah yang pertama memberikan doa restu!
                </p>
            ) : (
                <div className="space-y-3 text-left">
                    <AnimatePresence>
                        {displayedWishes.map((item, index) => (
                            <motion.div
                                key={item.id || index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="p-4 rounded-2xl bg-slate-900/60 border border-amber-500/10 shadow-sm space-y-1.5"
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <span className="text-sm font-semibold text-amber-100">
                                        {item.name}
                                    </span>
                                    {renderAttendanceBadge(item.attendance)}
                                </div>

                                {item.message && (
                                    <p className="text-xs text-slate-300 font-light leading-relaxed whitespace-pre-line">
                                        {item.message}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Tombol Toggle "Lihat Semua" jika ucapan > 5 */}
                    {wishes.length > 5 && (
                        <div className="pt-2 text-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="text-xs text-amber-400 hover:text-amber-300 transition-colors font-medium underline underline-offset-4 cursor-pointer"
                            >
                                {showAll
                                    ? 'Sembunyikan Sebagian Ucapan'
                                    : `Lihat Semua Ucapan (${wishes.length})`}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}

export default WishesList;