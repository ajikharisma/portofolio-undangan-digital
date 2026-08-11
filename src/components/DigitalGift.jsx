import { useState } from 'react';
import { motion } from 'framer-motion';

function DigitalGift({ bankAccounts = [] }) {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (accountNumber, index) => {
        navigator.clipboard.writeText(accountNumber);
        setCopiedIndex(index);

        // Reset status tersalin setelah 2 detik
        setTimeout(() => {
            setCopiedIndex(null);
        }, 2000);
    };

    if (!bankAccounts.length) return null;

    return (
        <section className="py-12 px-4 max-w-xl mx-auto text-center space-y-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
            >
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light">
                    Tanda Kasih
                </p>
                <h2 className="text-3xl font-serif text-amber-100 font-bold">
                    Amplop Digital
                </h2>
                <p className="text-xs text-slate-400 font-light max-w-xs mx-auto leading-relaxed">
                    Doa restu Anda merupakan hadiah terindah bagi kami. Namun jika ingin memberikan hadiah, Anda dapat menyalurkannya melalui:
                </p>
            </motion.div>

            {/* Grid / Kartu Rekening */}
            <div className="grid gap-4">
                {bankAccounts.map((account, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-6 rounded-3xl bg-slate-900/80 border border-amber-500/20 shadow-xl flex flex-col items-center gap-3 relative overflow-hidden"
                    >
                        <div className="flex items-center justify-between w-full border-b border-slate-800 pb-3">
                            <span className="text-sm font-bold text-amber-300 tracking-wider">
                                {account.bank}
                            </span>
                            <span className="text-xs text-slate-400 font-light">
                                a.n {account.accountName}
                            </span>
                        </div>

                        <div className="flex items-center justify-between w-full pt-1">
                            <span className="text-lg font-mono font-bold text-slate-100 tracking-widest">
                                {account.accountNumber}
                            </span>

                            {/* Tombol Salin */}
                            <button
                                onClick={() => handleCopy(account.accountNumber, index)}
                                className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-medium transition-all active:scale-95 cursor-pointer"
                            >
                                {copiedIndex === index ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-emerald-400">Tersalin!</span>
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                        Salin
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default DigitalGift;