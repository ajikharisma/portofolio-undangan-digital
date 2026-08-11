import { motion } from "framer-motion";

function CoupleInfo({ couple }) {
    const {
        groomName,
        groomNickname,
        groomParents,
        groomPhoto,
        brideName,
        brideNickname,
        brideParents,
        bridePhoto,
    } = couple;

    return (
        <section className="py-16 px-4 mx-w-4xl mx-auto text-center overflow-hidden">
            {/* Header judul section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12 space-y-2"
            >
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light">
                    Mempelai
                </p>

                <h2 className="text-3xl font-serif text-amber-100 font-bold">
                    Mempelai Pria &amp; Wanita
                </h2>

                <p className="text-xs text-slate-400 max-w-xs mx-auto loading-relaxed">
                    Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
                </p>
            </motion.div>

            {/* Kartu Mempelai (Responsive: Mobile Stack, Desktop Side-by-Side) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
                {/* Kartu Mempelai Pria (Animasi Masuk dari Kiri) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center p-6 bg-slate-900/60 rounded-3xl border border-amber-500/20 shadow-xl max-w-xs w-full"
                >
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-amber-400/50 shadow-lg mb-4">
                        <img
                            src={groomPhoto}
                            alt={groomName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h3 className="text-2xl font-serif text-ambar-200 font-bold mb-1">
                        {groomNickname}
                    </h3>

                    <p className="text-sm font-medium text-slate-200 mb-2">{groomName}</p>
                    {groomParents && (
                        <p className="text-xs text-slate-400 font-light leading-relaxed">
                            {groomParents}
                        </p>
                    )}
                </motion.div>

                {/* Simbol Dan / Ikon Pemisah */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="my-2 md:my-0 text-amber-400 font-serif text-4xl font-light"
                >
                    &amp;
                </motion.div>

                {/* Kartu Mempelai Wanita (Animasi Masuk dari Kanan) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center p-6 bg-slate-900/60 rounded-3xl border border-amber-500/20 shadow-xl max-w-xs w-full"
                >
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-amber-400/50 shadow-lg mb-4">
                        <img
                            src={bridePhoto}
                            alt={brideName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-serif text-amber-200 font-bold mb-1">
                        {brideNickname}
                    </h3>
                    <p className="text-sm font-medium text-slate-200 mb-2">{brideName}</p>
                    {brideParents && (
                        <p className="text-xs text-slate-400 font-light leading-relaxed">
                            {brideParents}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

export default CoupleInfo;