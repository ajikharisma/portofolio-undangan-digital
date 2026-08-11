import { useState } from 'react';
import { motion } from 'framer-motion';

function RSVPForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        attendance: 'hadir',
        message: '',
    });

    // Computed Property Name: 1 handler untuk semua input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasi sederhana (nama wajib diisi)
        if (!formData.name.trim()) return;

        // Kirim data ke parent (App.jsx)
        onSubmit({
            ...formData,
            id: Date.now(), // Unique ID untuk key/identifikasi
            createdAt: new Date().toISOString(),
        });

        // Reset Form
        setFormData({ name: '', attendance: 'hadir', message: '' });
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-12 px-4 max-w-xl mx-auto text-center"
        >
            <div className="space-y-2 mb-8">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light">
                    Konfirmasi Kehadiran
                </p>
                <h2 className="text-3xl font-serif text-amber-100 font-bold">
                    RSVP &amp; Ucapan
                </h2>
                <p className="text-xs text-slate-400 font-light max-w-xs mx-auto">
                    Berikan konfirmasi kehadiran dan kirimkan doa restu untuk kami.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-amber-500/20 shadow-xl space-y-4 text-left"
            >
                {/* Input Nama */}
                <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-medium text-slate-300">
                        Nama Lengkap <span className="text-amber-400">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: Budi Santoso"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                </div>

                {/* Select Status Kehadiran */}
                <div className="space-y-1">
                    <label htmlFor="attendance" className="text-xs font-medium text-slate-300">
                        Konfirmasi Kehadiran
                    </label>
                    <select
                        id="attendance"
                        name="attendance"
                        value={formData.attendance}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    >
                        <option value="hadir">Hadir</option>
                        <option value="tidak_hadir">Tidak Dapat Hadir</option>
                        <option value="ragu">Masih Ragu-ragu</option>
                    </select>
                </div>

                {/* Textarea Pesan / Ucapan */}
                <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-medium text-slate-300">
                        Ucapan &amp; Doa Restu
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tuliskan ucapan & doa restu Anda di sini..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                    />
                </div>

                {/* Tombol Submit */}
                <button
                    type="submit"
                    className="w-full py-3 px-6 mt-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all active:scale-[0.99] cursor-pointer"
                >
                    Kirim Ucapan &amp; Konfirmasi
                </button>
            </form>
        </motion.section>
    );
}

export default RSVPForm;