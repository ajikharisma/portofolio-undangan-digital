import { time } from "framer-motion";
import { div } from "framer-motion/client";
import { useState, useEffect } from "react";

function CountdownTimer({ targetDate }){
    // 1. Helper function untuk menghitung sisa waktu
    const calculateTimerLeft = () => {
        const difference = new Date(targetDate) - new Date();

        // Jika waktu target sudah lewat
        if (difference <=0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        // Kalkulasi hari, jam, menit, dan detik
        return{
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    // 2. State untuk menyimpan hasil perhitungan waktu
    const [timeLeft, setTimeLeft] = useState(calculateTimerLeft());

    // 3. useEffect untuk memperbarui timer setiap detik
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimerLeft());
        },1000);

        // CLEANUP FUNCTION: menghapus interval saat komponen unmount atau targetDate berubah
        return() => clearInterval(timer);
    }, [targetDate]);

    // Helper Untuk format angka menjadi 2 digit
    const formatTwoDigits = (num) => num.toString().padStart(2, '0');

    const timeBlocks = [
        { label: 'Hari', value: formatTwoDigits(timeLeft.days) },
        { label: 'Jam', value: formatTwoDigits(timeLeft.hours) },
        { label: 'Menit', value: formatTwoDigits(timeLeft.minutes) },
        { label: 'Detik', value: formatTwoDigits(timeLeft.seconds) },
    ];

    return(
        <div className="w-full max-w-md mx-auto my-6 px-2">
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {timeBlocks.map((block, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-900/70 backdrop-blur-md border border-amber-500/30 shadow-md shadow-amber-500/5"
                    >
                        <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-200 tracking-wider">
                            {block.value}
                        </span>
                        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 mt-1 font-medium">
                            {block.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountdownTimer;