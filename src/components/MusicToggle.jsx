import { useRef, useState, useEffect } from 'react';

function MusicToggle({ src, autoPlay }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Otomatis putar musik saat autoPlay menjadi true (setelah tombol Buka Undangan diklik)
    useEffect(() => {
        if (autoPlay && audioRef.current) {
            audioRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch((error) => console.log('Autoplay ditahan oleh browser:', error));
        }
    }, [autoPlay]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch((error) => console.log('Gagal memutar audio:', error));
        }
    };

    return (
        <div>
            {/* Elemen Audio HTML (Hidden) */}
            <audio ref={audioRef} src={src} loop />

            {/* Tombol Floating Kontrol Musik */}
            <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
                className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/90 text-amber-300 border border-amber-500/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${isPlaying ? 'ring-2 ring-amber-400/50 shadow-amber-500/20' : 'opacity-80'
                    }`}
            >
                <span className={`transform transition-transform ${isPlaying ? 'animate-spin-slow' : ''}`}>
                    {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                </span>
            </button>
        </div>
    );
}

export default MusicToggle;