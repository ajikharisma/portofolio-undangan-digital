import { motion } from 'framer-motion';

function LoveStory({ loveStory = [] }) {
    if (!Array.isArray(loveStory) || loveStory.length === 0) return null;

    return (
        <section className="py-12 px-4 max-w-xl mx-auto text-center space-y-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
            >
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light">
                    Perjalanan Kami
                </p>
                <h2 className="text-3xl font-serif text-amber-100 font-bold">
                    Kisah Cinta
                </h2>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="relative border-l border-amber-500/30 ml-4 sm:ml-32 space-y-8 text-left pl-6">
                {loveStory.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="relative space-y-1"
                    >
                        {/* Titik / Node Timeline */}
                        <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-400 border-4 border-slate-900 shadow-md shadow-amber-500/50" />

                        <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                            {item.year}
                        </span>

                        <h3 className="text-base font-serif font-semibold text-amber-100 pt-1">
                            {item.title}
                        </h3>

                        <p className="text-xs text-slate-300 font-light leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default LoveStory;