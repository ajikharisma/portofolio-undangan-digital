import { motion } from "framer-motion";

function Gallery({ photos = [] }) {
    return (
        <section className="py-16 px-4 max-w-4xl mx-auto text-center space-y-8">
            {/* Heading Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-2"
            >
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light">
                    Momen Bahagia
                </p>
                <h2 className="text-3xl font-serif text-amber-100 font-bold">
                    Galeri Foto
                </h2>
                <p className="text-xs text-slate-400 font-light max-w-xs mx-auto">
                    Kenangan indah perjalanan cinta kami menuju hari bahagia.
                </p>
            </motion.div>

            {/* Grid Foto */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="overflow-hidden rounded-2xl border border-amber-500/20 shadow-lg group bg-slate-800"
                    >
                        <img
                            src={photo}
                            alt={`Prewedding ${index + 1}`}
                            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;