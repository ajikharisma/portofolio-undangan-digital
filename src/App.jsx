import { useState, useEffect } from 'react';
import weddingData from './data/weddingData';
import CoverScreen from './components/CoverScreen';
import CountdownTimer from './components/CountdownTimer';
import CoupleInfo from './components/CoupleInfo';
import EventDetail from './components/EventDetail';
import Gallery from './components/Gallery';
import MusicToggle from './components/MusicToggle';
import RSVPForm from './components/RSVPForm';
import WishesList from './components/WishesList';
import DigitalGift from './components/DigitalGift';
import LoveStory from './components/LoveStory';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  // 1. Inisialisasi state ucapan dari localStorage
  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('wishes');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Sync state wishes ke localStorage setiap kali ada perubahan
  useEffect(() => {
    localStorage.setItem('wishes', JSON.stringify(wishes));
  }, [wishes]);

  // 3. Handler untuk menambah ucapan baru
  const handleAddWish = (newWish) => {
    // Menaruh ucapan baru di urutan terdepan (paling atas)
    setWishes((prevWishes) => [newWish, ...prevWishes]);
  };

  const handleOpenInvitation = () => {
    setIsOpened(true);
  };

  const { couple, event, gallery, music, bankAccounts, loveStory } = weddingData;

  const formattedHeaderDate = new Date(event.date).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Cover Screen */}
      {!isOpened && <CoverScreen onOpen={handleOpenInvitation} />}

      {/* Konten Utama Undangan */}
      {isOpened && (
        <div className="max-w-md md:max-w-2xl mx-auto min-h-screen bg-slate-900 border-x border-slate-800/80 shadow-2xl relative pb-16">

          {/* Section 1: Hero Header */}
          <section className="relative py-20 px-6 text-center flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
            {/* Background Foto Prambanan */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-[1px]"
              style={{ backgroundImage: `url('${weddingData.heroBackground || gallery[0]}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />

            {/* Teks Nama & Tanggal Mempelai */}
            <div className="relative z-10 space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80 font-light">
                Undangan Pernikahan
              </p>

              <h1 className="text-4xl sm:text-5xl font-serif text-amber-100 font-bold tracking-wide">
                {couple.groomNickname} <span className="text-amber-400 font-sans text-3xl font-light">&amp;</span> {couple.brideNickname}
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 font-light pt-2">
                {formattedHeaderDate}
              </p>
            </div>
          </section>

          {/* Section 3: Informasi Mempelai */}
          <CoupleInfo couple={couple} />

          <LoveStory loveStory={loveStory}/>

          {/* Section 4: Detail Acara & Maps */}
          <EventDetail event={event} />

          {/* Memanggil bankAccounts */}
          <DigitalGift bankAccounts={bankAccounts} />

          {/* Section 5: Galeri Foto */}
          <Gallery photos={gallery} />

          {/* Section 6: Form RSVP */}
          <RSVPForm onSubmit={handleAddWish} />

          {/* Section 7: List Ucapan */}
          <WishesList wishes={wishes} />

          {/* Toggle Musik Floating */}
          <MusicToggle src={music.src} autoPlay={isOpened} />

        </div>
      )}
    </main>
  );
}

export default App;