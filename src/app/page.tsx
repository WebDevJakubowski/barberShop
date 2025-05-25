"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import barberLogo from "@/assets/barber_logo.webp";
import heroBackground from "@/assets/tlo_hero.webp";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import aboutImage from "@/assets/barberAbout.webp";
import { Scissors, HairDryer } from "@phosphor-icons/react";
import  Link  from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [bgLoaded, setBgLoaded] = useState(false);
  const galleryImages = [
    '/galeria.jpg',
    '/galeria.jpg',
    '/galeria.jpg',
    '/galeria.jpg',
    '/galeria.jpg',
    '/galeria.jpg',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  // 👇 FINAL FIX: preloader przed całą stroną
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
        <Image src={barberLogo} alt="Barbershop Logo" width={120} height={120} priority />
        <div className="mt-6 w-12 h-12 border-4 border-t-[#ff3133] border-white rounded-full animate-spin"></div>
      </div>
    );
  }
 
  
  return (
    <>
      {/* Ikony social media - widoczne tylko na desktopie */}
      <div
        className={`fixed top-4 right-4 z-50 space-x-4 text-white opacity-70 transition-colors duration-300 delay-50 hover:text-[#ff3133] hidden md:flex`}
      >
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={20} />
        </a>
      </div>

      <div className=" bg-[#101010] text-white min-h-screen relative">

        {/* Preloader */}
        {loading && (
          <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
            <Image src={barberLogo} alt="Barbershop Logo" width={120} height={120} />
            <div className="mt-6 w-12 h-12 border-4 border-t-[#ff3133] border-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* Header */}
        <header className="relative bg-[rgba(0,0,0,0.3)] text-white py-4 px-6 flex items-center justify-center shadow-md sticky top-0 w-full z-30 backdrop-blur-[2px] ">
          {/* MOBILE */}
          <div className="md:hidden flex justify-between items-center w-full">
          <Link href="/" className="z-30">
              <Image src={barberLogo} alt="Barbershop Logo" width={80} height={80} />
            </Link>
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="text-white text-3xl z-50 relative transition-colors duration-300 delay-50 hover:text-[#ff3133]"
            >
              {isMenuOpen ? "✖" : "☰" }
            </button>
          </div>

          {/* DESKTOP */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8">
              <li><a href="#about" className="transition-colors duration-300 delay-50 hover:text-[#ff3133]">O nas</a></li>
              <li><a href="#services" className="transition-colors duration-300 delay-50 hover:text-[#ff3133]">Usługi</a></li>
            </ul>
          </nav>

          <div className="hidden md:flex mx-8">
          <Link href="/"><Image src={barberLogo} alt="Barbershop Logo" width={100} height={100} /></Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8">
              <li><a href="#gallery" className="transition-colors duration-300 delay-50 hover:text-[#ff3133]">Galeria</a></li>
              <li><a href="#contact" className="transition-colors duration-300 delay-50 hover:text-[#ff3133]">Kontakt</a></li>
            </ul>
          </nav>
        </header>

        {/* MOBILE MENU */}
        <div className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center transform transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          {/* Przycisk X do zamykania menu */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl transition-colors duration-300 delay-50 hover:text-[#ff3133]"
          >
            ✖
          </button>

          <ul className="text-center text-3xl space-y-8">
            <li><a href="#about" className="transition-colors duration-300 delay-50 hover:text-[#ff3133]" onClick={() => setIsMenuOpen(false)}>O nas</a></li>
            <li><a href="#services" className="transition-colors duration-300 delay-50 hover:text-[#ff3133]" onClick={() => setIsMenuOpen(false)}>Usługi</a></li>
            <li><a href="#gallery" className="transition-colors duration-300 delay-50 hover:text-[#ff3133]" onClick={() => setIsMenuOpen(false)}>Galeria</a></li>
            <li><a href="#contact" className="transition-colors duration-300 delay-50 hover:text-[#ff3133]" onClick={() => setIsMenuOpen(false)}>Kontakt</a></li>
          </ul>

          {/* Ikony social media - widoczne tylko w hamburger menu */}
          <div className="mt-12 flex space-x-6 text-white text-2xl opacity-80 md:hidden transition-colors duration-300 delay-50 hover:text-[#ff3133] ">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* HERO SECTION */}
        
        <section className="relative h-screen flex flex-colitems-center justify-center mt-[-82px]">   
        <Image
  src={heroBackground}
  alt="Tło"
  priority
  fill
  sizes="100vw"
  placeholder="blur"
  blurDataURL="/tlo_hero_blur.webp"
  className="object-cover object-center z-0"
  onLoadingComplete={() => setBgLoaded(true)}
/>



<div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10" />
          {!loading && bgLoaded && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="relative py-3 z-10 px-3 flex flex-col items-center justify-center"
  >
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold"
    >
      Najlepszy Barbershop w Mieście
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg"
    >
      Profesjonalne strzyżenie, pielęgnacja brody i wyjątkowa atmosfera.
    </motion.p>

    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5, delay: 0.5 }}
>
  <a
    href="#contact"
    className="mt-6 inline-block bg-[#ff3133] text-white px-6 py-3 rounded-lg text-lg font-semibold transform transition-all duration-200 ease-in-out hover:scale-105"
  >
    Umów wizytę
  </a>
</motion.div>

  </motion.div>
)}
        </section>
      

<section id="about" className="py-24 px-6 bg-[#181818] text-white">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
  >
    {/* Tekst */}
    <div className="flex-1 space-y-12">
      {/* O nas */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#ff3133] uppercase tracking-wider">
          O nas
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Jesteśmy czymś więcej niż barbershopem. To miejsce, gdzie styl spotyka się z pasją, a klasyka miesza się z nowoczesnością.
          Tworzymy przestrzeń, do której chce się wracać — nie tylko po fryzurę, ale też po atmosferę.
        </p>
      </div>

      {/* Dlaczego my? */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#ff3133] uppercase">
          Dlaczego my?
        </h3>
        <ul className="text-gray-300 text-lg list-disc list-inside space-y-2">
          <li>Bo słuchamy. Zanim chwycimy za nożyczki, słuchamy Twojej wizji.</li>
          <li>Bo robimy to z pasją. Każde strzyżenie to sztuka, nie rutyna.</li>
          <li>Bo wiemy, że liczy się więcej niż tylko fryzura — chodzi o pewność siebie, styl i energię.</li>
        </ul>
      </div>

      {/* Relacja, nie tylko usługa */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#ff3133] uppercase">
          Relacja, nie tylko usługa
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Znamy imiona naszych klientów. Pamiętamy ich styl. Wiemy, że dobry barber to taki, któremu ufasz.
          Dlatego u nas każdy klient traktowany jest po królewsku — z szacunkiem, uśmiechem i pełnym zaangażowaniem.
        </p>
      </div>
      
    </div>

    {/* Obrazek */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <Image
        src={aboutImage}
        alt="Zespół barbershopu"
        className="rounded-lg shadow-lg w-full h-auto object-cover"
      />
      {/* Linki do sociali */}
<div className="pt-12 flex gap-6 text-white text-2xl justify-center">
Poznaj nas, wbijaj na nasze social media!
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#ff3133] transition-colors"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#ff3133] transition-colors"
  >
    <FaInstagram />
  </a>
</div>
    </motion.div>
  </motion.div>
</section>



<section id="services" className="py-24 px-6 bg-[#0f0f0f] text-white">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
  >
    {/* Obrazek po lewej */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <Image
        src={aboutImage}
        alt="Usługi barberskie"
        className="rounded-lg shadow-lg w-full h-auto object-cover"
      />
    </motion.div>

    {/* Lista usług po prawej */}
    <div className="flex-1 flex flex-col items-center justify-center" >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#ff3133] uppercase tracking-wider text-center md:text-left">
        Usługi
      </h2>

      <ul className="text-lg text-gray-300 divide-y divide-gray-600 text-center">
  <li className="py-3">Strzyżenie klasyczne</li>
  <li className="py-3">Trymowanie brody</li>
  <li className="py-3">Combo (włosy + broda)</li>
  <li className="py-3">Golenie brzytwą</li>
  <li className="py-3">Stylizacja włosów</li>
  <li className="py-3">Rytuały pielęgnacyjne</li>
</ul>


      {/* Przycisk do Booksy */}
      <div className="mt-10 text-center md:text-left">
        <a
          href="https://booksy.com/pl-pl/" // <-- podmień na swój link do Booksy
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ff3133] hover:bg-[#e62c2e] transition-colors text-white px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Sprawdź ceny i umów wizytę
        </a>
      </div>
    </div>
  </motion.div>
</section>
<section id="gallery" className="py-24 px-6 bg-[#181818] text-white relative">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto text-center"
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#ff3133] uppercase tracking-wider">
      Galeria
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">

      {galleryImages.map((src, index) => (
        <div
          key={index}
          className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
          onClick={() => setSelectedImage(src)}
        >
          <Image
            src={src}
            alt={`Galeria ${index + 1}`}
            width={400}
            height={300}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
          />
          
        </div>
        
      ))}
      
    </div>
    <div className="pt-12 flex gap-6 text-white text-2xl justify-center">
    <Scissors className="text-[#ff3133] w-15 h-15 sm:w-10 sm:h-10 md:w-12 md:h-12"  />
        <a href="https://www.instagram.com/p/DBoM7xUIGmD/" target="blank" className="transition-colors duration-300 delay-50 hover:text-[#ff3133]">
        Kliknij tutaj aby zobaczyć więcej naszych prac na insta! </a>
        <HairDryer className="text-[#ff3133] w-15 h-15 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        
        </div>
  </motion.div>

  {/* Modal */}
  {selectedImage && (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-[#ff3133]"
          aria-label="Zamknij"
        >
          ×
        </button>
        <Image
          src={selectedImage}
          alt="Powiększone zdjęcie"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-xl object-contain"
        />
      </div>
    </div>
  )}
</section>
<section id="contact" className="pb-10 px-6 bg-[#181818] text-white">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
  >
     <div className="flex flex-col justify-center space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#ff3133] uppercase tracking-wider">
        Kontakt
      </h2>

      <p className="text-lg text-gray-300">
        ✂️ <strong>Barbershop Royal Cut</strong><br />
        🏠 ul. Stylowa 1, 00-001 Warszawa<br />
        ☎️ <a href="tel:+48123456789" className="hover:text-[#ff3133] transition-colors">+48 123 456 789</a><br />
        📧 <a href="mailto:kontakt@royalcut.pl" className="hover:text-[#ff3133] transition-colors">kontakt@royalcut.pl</a>
      </p>

      <p className="text-lg text-gray-300">
        🕒 Godziny otwarcia:<br />
        Pon–Pią: 9:00 – 19:00<br />
        Sobota: 10:00 – 16:00<br />
        Niedziela: zamknięte
      </p>
    </div>
    {/* Mapa Google */}
    <div className="w-full h-96">
      <iframe
        title="Nasza lokalizacja"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.6080700455343!2d20.99765431579521!3d52.229675779758095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6692f6d8c1%3A0x6e1ab1626ef8f4fa!2sWarszawa!5e0!3m2!1spl!2spl!4v1711463000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>

    {/* Dane kontaktowe */}
   
  </motion.div>
</section>
<footer className="bg-[#0f0f0f] text-gray-400 py-6 px-4 text-center text-sm border-t border-gray-700">
  © {new Date().getFullYear()} Barbershop. Zrobiony przez{" "}
  <a
    href="https://twojastrona.pl"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#ff3133] hover:underline"
  >
    XYZ
  </a>
</footer>


      </div>
    </>
  );
}
