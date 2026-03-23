import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Camera, Mail, Phone, ArrowUpLeft, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- A. NAVBAR ---
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 md:px-8 py-4 flex items-center justify-between shadow-2xl w-[95%] md:w-[850px] lg:w-[1000px] ${scrolled ? 'bg-surface/70 backdrop-blur-xl border border-primary/10' : 'bg-transparent text-white border border-white/20'}`} dir="ltr">
      {/* LEFT: Brand */}
      <h1 className={`font-serif italic font-bold text-xl tracking-wide shrink-0 z-10 ${scrolled ? 'text-primary' : 'text-white'}`}>
        Carine Garber
      </h1>

      {/* CENTER: Navigation */}
      <nav className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8 text-sm font-medium tracking-wide ${scrolled ? 'text-primary/70' : 'text-white/80'}`} dir="ltr">
        <a href="#about" className="lift-link hover:text-accent transition-colors">אודות</a>
        <a href="#portfolio" className="lift-link hover:text-accent transition-colors">תיק עבודות</a>
        <a href="#contact" className="lift-link hover:text-accent transition-colors">צור קשר</a>
      </nav>

      {/* RIGHT: CTA */}
      <div className="flex items-center shrink-0 z-10 ml-auto md:ml-0">
        <a href="#contact" className="magnetic-btn bg-accent hover:bg-black text-white px-6 py-2 rounded-full text-sm font-medium relative overflow-hidden group">
          <span className="relative z-10" dir="rtl">בואו נדבר</span>
          <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
        </a>
      </div>
    </header>
  );
}

// --- B. HERO SECTION ---
function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/photos/3D7CC93A-3B55-45F6-803B-671B6D86A3BE.PNG"
          alt="High-End Editorial Fashion"
          className="w-full h-full object-cover object-[center_25%]"
        />
        {/* Soft Black / Obsidian Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-12 md:pb-20 flex flex-col justify-end" dir="ltr">
        <div className="flex flex-col md:flex-row justify-between w-full md:items-end gap-10">
          <div
            className="flex flex-col text-left max-w-2xl"
            style={{ alignSelf: 'flex-start', marginLeft: 0 }}
          >
            <h1
              className="hero-text text-3xl md:text-4xl lg:text-[2.75rem] text-white tracking-wide leading-snug mb-3 md:mb-4 drop-shadow-md"
              style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 300 }}
            >
              Carine Photography Fashion & Art Portraits
            </h1>
            <p
              className="hero-text text-white/80 text-lg font-light"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              Through my lens, Fashion becomes art :)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- C. FEATURES (Value Props) ---
function Features({ setSelectedImage }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="pt-32 pb-4 px-1 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 relative rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden bg-pink-50 flex flex-col md:flex-row items-center justify-between gap-12 group shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]">
          {/* Background Atmospheric Elements & Sparkling Lights */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200/30 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300/30 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute top-[20%] left-[25%] w-4 h-4 bg-white rounded-full blur-[2px] opacity-80 shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
          <div className="absolute bottom-[30%] right-[30%] w-3 h-3 bg-yellow-100 rounded-full blur-[1px] opacity-70 shadow-[0_0_10px_rgba(255,255,200,1)]"></div>

          {/* Fabric Swatches */}
          <div className="absolute top-8 right-[18%] w-24 h-32 bg-pink-100/40 backdrop-blur-sm rotate-[14deg] shadow-sm rounded-sm pointer-events-none"></div>
          <div className="absolute bottom-20 right-[42%] w-28 h-20 bg-[#FFFFF0]/60 backdrop-blur-sm -rotate-[8deg] shadow-sm rounded-sm pointer-events-none"></div>
          <div className="absolute top-32 left-[32%] w-16 h-28 bg-blue-100/40 backdrop-blur-sm -rotate-[18deg] shadow-sm rounded-sm pointer-events-none"></div>
          <div className="absolute bottom-12 left-[18%] w-20 h-20 bg-yellow-100/40 backdrop-blur-sm rotate-[22deg] shadow-sm rounded-sm pointer-events-none"></div>

          {/* Vintage Film Cameras */}
          <div className="absolute top-6 right-6 text-primary/10 rotate-[15deg] transition-transform duration-1000 group-hover:rotate-[25deg] pointer-events-none">
            <Camera size={90} strokeWidth={0.5} />
          </div>
          <div className="absolute bottom-6 left-6 text-primary/10 -rotate-[15deg] transition-transform duration-1000 group-hover:-rotate-[25deg] pointer-events-none">
            <Camera size={90} strokeWidth={0.5} />
          </div>

          {/* Right Side (Visual Right in RTL = First child in flex-row) */}
          <div className="relative z-10 w-full md:w-[55%]">
            <div className="bg-[#FAF8F5]/95 backdrop-blur-md p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.05)] rounded-sm border border-[#EAE3D2]/80 relative overflow-hidden transition-transform duration-700 hover:-translate-y-1">
              {/* Parchment Texture Noise */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }}></div>

              <div className="relative z-10 text-right">
                <h2
                  className="text-3xl md:text-5xl font-bold text-[#3A3A3A] mb-8 relative inline-block"
                  style={{ fontFamily: 'Calibri, sans-serif' }}
                >
                  קצת עליי
                  <span className="absolute -bottom-3 right-0 w-2/3 h-[1px] bg-gradient-to-l from-[#3A3A3A] to-transparent opacity-30"></span>
                </h2>
                <div className="space-y-6 text-[#5A5A5A] text-lg font-light leading-relaxed">
                  <p>
                    היייי כולם<br />
                    אני קארין גרבר<br />
                    אוהבת ומעריכה (ואף יש שיגידו מכורה) לצילום ואופנה<br />
                    עוד מאז שלמדתי ללכת
                  </p>
                  <p>
                    עם הזמן הבנתי שאני חייבת לממש את התשוקה הזו ולחבר בין שני העולמות
                  </p>
                  <p className="font-medium text-[#2C2C2C] text-xl pt-2">
                    ובדיוק כאן - אתם נכנסים לתמונה
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side (Visual Left in RTL = Second child in flex-row) */}
          <div className="relative z-10 w-full md:w-[40%] flex justify-center mt-12 md:mt-0">
            <div className="bg-[#ebd9bd] p-3 shadow-2xl aspect-[4/5] md:aspect-square w-full max-w-[340px] transform -rotate-3 hover:-rotate-1 transition-transform duration-700 pointer-events-none">
              <img
                src="/images/photos/IMG_4551.JPG"
                alt="Carine Garber Portrait"
                className="w-full h-full object-cover filter contrast-[1.02] brightness-95 pointer-events-auto"
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}



// --- D. PHILOSOPHY ---
function Philosophy() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-line', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        }
      });
      // Parallax effect for the background image
      gsap.to('.parallax-bg', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

}

// --- NEW COMPONENT: TABBED GALLERY ---
function TabbedGallery() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: 'צילומי אופנה וקונספט למותג',
      thumb: '/images/photos/IMG_1740.JPG',
      image: '/images/photos/IMG_1740.JPG'
    },
    {
      id: 1,
      title: 'צילומי תדמית/בוק שחקן',
      thumb: '/images/photos/IMG_8551.JPG',
      image: '/images/photos/IMG_8551.JPG'
    },
    {
      id: 2,
      title: 'צילומי תוכן לרשתות ולקמפיינים',
      thumb: '/images/photos/unnamed.jpg',
      image: '/images/photos/unnamed.jpg'

    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FFF0F5] max-w-7xl mx-auto rounded-3xl mt-4 mb-24 shadow-sm border border-white/50">
      {/* 1. Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#3A3A3A]" style={{ fontFamily: 'Calibri, sans-serif' }}>
          בואו ניצור יחד
        </h2>
      </div>

      {/* 2. Main Layout (2 columns, stack on mobile) */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center md:items-stretch">

        {/* 3. Right Column: Navigation Tabs (Visual Right in RTL, comes first in DOM for layout or flex-row-reverse) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`
                  flex items-center gap-6 p-4 rounded-xl transition-all duration-300 w-full text-right border
                  ${isActive
                    ? 'bg-[#FA89BC] text-[#333333] border-[#FA89BC] shadow-lg transform scale-[1.02]'
                    : 'bg-[#FFE4E1] text-[#333333] border-white/50 hover:border-white hover:bg-[#FFF0F5]'
                  }
                `}
              >
                <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-white/40 shadow-sm">
                  <img src={tab.thumb} alt={tab.title} className="w-full h-full object-cover" />
                </div>
                <span className={`text-lg md:text-xl font-medium ${isActive ? 'font-bold' : ''}`}>
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* 4. Left Column: Featured Display */}
        <div className="w-full md:w-1/2 relative bg-gray-100 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] group">
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Semi-transparent text banner overlay */}
          <div className="absolute bottom-0 w-full p-6 bg-white/80 backdrop-blur-md border-t border-white/40">
            <h3 className="text-2xl font-bold text-center text-[#1A1A1A]">
              {tabs[activeTab].title}
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- F. PORTFOLIO GRID ---
function Portfolio({ setSelectedImage }) {
  const images = [
    "/images/photos/9548CFE2-FD5E-4580-AE84-ACDCCBE35FA2.JPEG",
    "/images/photos/A2A54CB2-5FE1-43F0-B38A-CBE0F71CD601.jpeg",
    "/images/photos/IMG_2109.JPG",
    "/images/photos/2C8751F7-E1A0-46E3-9AA7-0CE24D3C09E7.JPEG",
    "/images/photos/WhatsApp Image 2026-03-23 at 19.53.46.jpeg",
    "/images/photos/985DBE58-9B07-47A1-90B0-986D87B32EE5.JPEG",
    "/images/photos/D3938F98-5E9D-4FF6-A9AA-7226623ADB48.JPG",
    "/images/photos/C472C53E-88F5-4AF9-B9B5-9E5F4B2B72F5.JPEG",
    "/images/photos/DSC_0276.JPG",
    "/images/photos/WhatsApp Image 2026-03-23 at 19.36.36 (1).jpeg",
    "/images/photos/IMG_7562.JPG",
    "/images/photos/IMG_8724.JPG",
    "/images/photos/627B09CA-1AFD-4665-96FF-76C52347B2A0.JPEG",
    "/images/photos/WhatsApp Image 2026-03-23 at 19.36.38 (2).jpeg",
    "/images/photos/537EC874-78AA-47F4-9BF6-4BFF0D59788D.jpeg",
    "/images/photos/IMG_1721.JPG",
    "/images/photos/IMG_4610.JPG",
    "/images/photos/IMG_4370.JPG",
    "/images/photos/IMG_9722.JPG",
    "/images/photos/WhatsApp Image 2026-03-23 at 19.36.37.jpeg",
    "/images/photos/WhatsApp Image 2026-03-23 at 19.36.37 (1).jpeg",
    "/images/photos/WhatsApp Image 2026-03-23 at 19.36.37 (2).jpeg",
    "/images/photos/WhatsApp Image 2026-03-23 at 19.36.36.jpeg",
    "/images/photos/WhatsApp Image 2026-03-23 at 19.36.37 (5).jpeg",

  ];

  return (
    <section id="portfolio" className="py-32 bg-background px-1 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-Calibri text-primary mb-16 text-center px-4 md:px-0">העבודות שלי</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group overflow-hidden bg-primary/5 rounded-md md:rounded-2xl aspect-square cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05]"
                alt="Editorial Photography"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- G. CONTACT FORM ---
function Contact() {
  const [cooldown, setCooldown] = useState(0);
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cooldown > 0 || status === 'submitting') return;

    const formData = new FormData(e.target);
    if (formData.get('_honey')) return; // Bot detected

    setStatus('submitting');

    fetch('https://formsubmit.co/ajax/carinegarber2005@gmail.com', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setStatus('success');
        setCooldown(60);
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch(error => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="py-32 bg-[#FFF0F5] px-6 md:px-12 border-t border-primary/10">
      <div className="max-w-4xl mx-auto">

        {/* Centered Symmetrical Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary tracking-wide drop-shadow-sm" dir="ltr" style={{ fontWeight: 300, fontFamily: "'Quicksand', sans-serif" }}>
            Let's talk!
          </h2>
          <div className="w-16 h-[1px] bg-primary/20 mx-auto mt-8"></div>
        </div>

        {/* Content Columns perfectly balanced */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-right">
            <div className="space-y-6 mb-12 w-full flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4 text-primary/80">
                <Mail className="w-6 h-6 text-accent" />
                <span className="font-mono text-base">carinegarber2005@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-primary/80">
                <Phone className="w-6 h-6 text-accent" />
                <span className="font-mono text-base tracking-widest" dir="ltr">052-4481941</span>
              </div>
            </div>

            {/* Social / Communication Row */}
            <div className="flex items-center justify-center md:justify-start gap-6 w-full">
              <a href="https://wa.me/972524481941?text=%D7%94%D7%99%D7%99%20%D7%A0%D7%A2%D7%99%D7%9D%20%D7%9E%D7%90%D7%95%D7%93!%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9E%D7%90%D7%95%D7%93%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D%20%3A%29" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary/80 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-sm" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/carine__photography/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary/80 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-sm" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Spam Protection & Config */}
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="כניסה חדשה מהאתר - קארין גרבר" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-medium uppercase tracking-wider text-primary/60 mb-2">שם מלא</label>
                  <input type="text" name="name" required className="bg-white border-b border-primary/20 p-3 focus:outline-none focus:border-accent text-primary transition-colors placeholder:text-primary/30 rounded-t-md" placeholder="" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-medium uppercase tracking-wider text-primary/60 mb-2">אימייל</label>
                  <input type="email" name="email" required className="bg-white border-b border-primary/20 p-3 focus:outline-none focus:border-accent text-primary transition-colors placeholder:text-primary/30 rounded-t-md" placeholder="" dir="ltr" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-medium uppercase tracking-wider text-primary/60 mb-2">מספר טלפון</label>
                <input type="tel" name="phone" className="bg-white border-b border-primary/20 p-3 focus:outline-none focus:border-accent text-primary transition-colors placeholder:text-primary/30 rounded-t-md" placeholder="" dir="ltr" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-medium uppercase tracking-wider text-primary/60 mb-2">הודעה</label>
                <textarea name="message" required rows="4" className="bg-white border-b border-primary/20 p-3 focus:outline-none focus:border-accent text-primary transition-colors resize-none placeholder:text-primary/30 rounded-t-md" placeholder="ספרו לי על הויז׳ן שלכם!"></textarea>
              </div>

              <button
                type="submit"
                disabled={cooldown > 0 || status === 'submitting'}
                className={`w-full py-4 rounded-xl font-medium tracking-wide flex justify-center items-center gap-2 transition-colors ${cooldown > 0 || status === 'submitting'
                  ? 'bg-primary/50 cursor-not-allowed text-white/50'
                  : 'magnetic-btn bg-primary text-white hover:bg-black'
                  }`}
              >
                {status === 'submitting' && 'שולח...'}
                {status === 'success' && 'נשלח בהצלחה! תודה'}
                {status === 'error' && 'שגיאה. נסה/י שוב'}
                {status === 'idle' && cooldown > 0 && `המתן ${cooldown} שניות`}
                {status === 'idle' && cooldown === 0 && (
                  <>שליחה <ArrowUpLeft className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- H. FOOTER ---
function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 md:px-12 rounded-t-[4rem] mx-auto w-full max-w-[100vw]">
      <div className="flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl tracking-[0.15em] text-white/90" dir="ltr" style={{ fontWeight: 300, fontFamily: "'Quicksand', sans-serif" }}>
          Carine Photography
        </h2>
        <div className="w-12 h-[1px] bg-white/20 my-2"></div>
        <p className="text-white/50 tracking-wider text-sm font-light">
          &copy; {new Date().getFullYear()}כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="relative font-sans text-primary bg-background min-h-screen selection:bg-accent selection:text-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <Features setSelectedImage={setSelectedImage} />
        <TabbedGallery />
        <Portfolio setSelectedImage={setSelectedImage} />
        <Contact />
        <Philosophy />
      </main>
      <Footer />

      {/* Global Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors duration-300 z-10 p-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close modal"
          >
            <X className="w-8 h-8 pointer-events-none" />
          </button>

          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-full object-contain shadow-2xl transform scale-95 animate-[scaleIn_0.3s_ease-out_forwards]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
