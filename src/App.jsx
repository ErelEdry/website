import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Camera, Mail, Phone, ArrowUpLeft } from 'lucide-react';

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
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl w-[90%] md:w-[700px] ${scrolled ? 'bg-surface/70 backdrop-blur-xl border border-primary/10' : 'bg-transparent text-white border border-white/20'}`}>
      <h1 className={`font-serif italic font-bold text-xl tracking-wide ${scrolled ? 'text-primary' : 'text-white'}`}>
        Carine Garber
      </h1>
      <nav className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${scrolled ? 'text-primary/70' : 'text-white/80'}`}>
        <a href="#about" className="lift-link hover:text-accent transition-colors">אודות</a>
        <a href="#portfolio" className="lift-link hover:text-accent transition-colors">תיק עבודות</a>
        <a href="#contact" className="lift-link hover:text-accent transition-colors">צור קשר</a>
      </nav>
      <button className="magnetic-btn bg-accent hover:bg-black text-white px-6 py-2 rounded-full text-sm font-medium relative overflow-hidden group">
        <span className="relative z-10">קבעי סשן צילומים</span>
        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
      </button>
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
      <div className="relative z-10 p-8 md:p-16 md:pb-24 w-full md:w-2/3 lg:w-1/2">
        <h2 className="hero-text text-white/90 font-sans font-medium tracking-widest uppercase text-sm mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-accent"></span> אופנה עילית פוגשת
        </h2>
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl text-white font-serif italic tracking-tight leading-[1.1] mb-8 drop-shadow-lg">
          אלגנטיות.
        </h1>
        <p className="hero-text text-white/80 text-lg md:text-xl font-light mb-10 max-w-lg">
          לוכדת אסתטיקה של מגזינים וסטייל אדיטוריאלי מוקפד בכל פריים.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="magnetic-btn inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium tracking-wide hover:bg-accent hover:text-white transition-colors duration-300">
            קבעי סשן צילומים <ArrowUpLeft className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// --- C. FEATURES (Value Props) ---
function Features() {
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
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">המתודולוגיה</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">מרימה את המיתוג האישי לרמות של אדיטוריאל.</p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-8">
          {/* Card 1 (Far Right in RTL): Luxurious Editorial Style + Image 3 */}
          <div className="feature-card flex flex-col gap-2 md:gap-6">
            <h3 className="font-sans font-semibold text-xs sm:text-sm md:text-2xl text-primary text-center"></h3>
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full bg-surface rounded-xl md:rounded-ui border border-primary/5 shadow-sm overflow-hidden group">
              <img src="/images/photos/9548CFE2-FD5E-4580-AE84-ACDCCBE35FA2.JPEG" alt="סטייל אדיטוריאל יוקרתי" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
            </div>
          </div>

          {/* Card 2 (Center RTL): Personalized Creative Vision + Image 2 */}
          <div className="feature-card flex flex-col gap-2 md:gap-6">
            <h3 className="font-sans font-semibold text-xs sm:text-sm md:text-2xl text-primary text-center"></h3>
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full bg-surface rounded-xl md:rounded-ui border border-primary/5 shadow-sm overflow-hidden group">
              <img src="/images/photos/E6D07AD9-0EA9-41BA-A875-4A21DAEBF43E.jpg" alt="חזון קריאטיבי מותאם אישית" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
            </div>
          </div>

          {/* Card 3 (Far Left in RTL): Exquisite Retouching + Image 1 */}
          <div className="feature-card flex flex-col gap-2 md:gap-6">
            <h3 className="font-sans font-semibold text-xs sm:text-sm md:text-2xl text-primary text-center"></h3>
            <div className="relative aspect-[3/4] md:aspect-[4/5] w-full bg-surface rounded-xl md:rounded-ui border border-primary/5 shadow-sm overflow-hidden group">
              <img src="/images/photos/IMG_1740.JPG" alt="ריטוש מופתי" className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
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

  return (
    <section ref={containerRef} className="relative py-48 w-full bg-primary overflow-hidden clip-overlay rounded-ui mx-auto w-[98%] my-12">
      {/* Background Image Texture */}
      <img
        src="/images/photos/IMG_1128.jpg"
        alt="Texture"
        className="parallax-bg absolute inset-0 w-full h-[120%] object-cover opacity-15 mix-blend-overlay -top-[10%]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <p className="manifesto-line text-white/50 font-sans tracking-wide text-sm mb-8">
          רוב הצלמים מתמקדים ב: תיעוד גנרי.
        </p>
        <h2 className="manifesto-line text-4xl md:text-6xl lg:text-7xl text-white font-serif leading-[1.2]">
          אני מתמקדת ביצירת <br />
          <span className="italic text-accent">אלגנטיות יוקרתית.</span>
        </h2>
      </div>
    </section>
  );
}

// --- E. PROTOCOL (Sticky Stacking Archive) ---
function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // don't animate the last card out

        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(10px)',
          scrollTrigger: {
            trigger: card,
            start: 'top top',
            end: '+=100%',
            pin: true,
            pinSpacing: false,
            scrub: true,
          }
        });
      });

      // Card 1 Animation: Rotating Geometric Motif
      gsap.to('.geo-motif', { rotation: 360, duration: 20, repeat: -1, ease: 'none' });
      // Card 2 Animation: Scanning Laser
      gsap.to('.scan-laser', { y: 200, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });
      // Card 3 Animation: Waveform
      gsap.to('.waveform-path', { strokeDashoffset: 0, duration: 3, repeat: -1, ease: 'none' });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: '01',
      title: 'שיחת החזון',
      desc: 'הגדרת הכיוון הקריאייטיבי, המלתחה ולוח ההשראה עוד לפני שמכסה העדשה יורד.',
      graphic: (
        <svg className="geo-motif w-48 h-48 opacity-80" viewBox="0 0 100 100" fill="none" stroke="#B76E79" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" strokeDasharray="2 6" />
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'יום הצילום',
      desc: 'ביצוע הקונספט עם תאורה מדויקת, בימוי פוזות זורם ואווירה יוקרתית.',
      graphic: (
        <div className="w-48 h-48 border border-primary/20 relative overflow-hidden bg-primary/5 rounded-xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMjBMMjAgMEgwVjIwWiIgZmlsbD0icmdiYSgwLDAsMCwwLjA1KSIvPjwvc3ZnPg==')] opacity-50"></div>
          <div className="scan-laser absolute top-0 left-0 w-full h-1 bg-accent shadow-[0_0_15px_#B76E79]"></div>
        </div>
      )
    },
    {
      num: '03',
      title: 'מאסטריות ללא פשרות',
      desc: 'פוסט-פרודקשן וריטוש פרימיום שמבטיחים שכל תמונה סופית ראויה לשער של מגזין.',
      graphic: (
        <svg className="w-64 h-32" viewBox="0 0 200 100" fill="none">
          <path className="waveform-path" stroke="#B76E79" strokeWidth="2" strokeDasharray="500" strokeDashoffset="500" d="M0 50 L40 50 L50 20 L60 80 L70 50 L200 50" />
        </svg>
      )
    }
  ];

  return (
    <section ref={containerRef} className="relative bg-background">
      {steps.map((step, i) => (
        <div key={i} className="protocol-card h-[100dvh] w-full flex items-center justify-center sticky top-0 bg-surface border-b border-primary/5">
          <div className="max-w-5xl w-full px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <span className="text-data text-accent mb-6 block drop-shadow-sm">שלב {step.num}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">{step.title}</h2>
              <p className="text-lg text-primary/70 max-w-md leading-relaxed font-light">{step.desc}</p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center h-64">
              {step.graphic}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

// --- F. PORTFOLIO GRID ---
function Portfolio() {
  const images = [
    "/images/photos/27AAE382-CE62-4161-9F91-159448A08D1A.JPEG",
    "/images/photos/123f.JPEG",
    "/images/photos/IMG_2109.JPG",
    "/images/photos/IMG_9722.JPG",
    "/images/photos/537EC874-78AA-47F4-9BF6-4BFF0D59788D.jpeg",
    "/images/photos/IMG_4610.JPG",
    "/images/photos/IMG_7562.JPG",
    "/images/photos/IMG_4467.JPG",
    "/images/photos/IMG_8724.JPG"
  ];

  return (
    <section id="portfolio" className="py-32 bg-background px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16 text-center">עבודות נבחרות</h2>
        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {images.map((src, i) => (
            <div key={i} className="relative group overflow-hidden bg-primary/5 rounded-lg md:rounded-2xl aspect-square">
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
    <section id="contact" className="py-32 bg-surface px-6 md:px-12 border-t border-primary/10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">קבעי סשן צילומים</h2>
          <p className="text-primary/70 mb-12">היכנסי לפריים. צרי קשר כדי לדון בקונספטים, זמינות וחבילות צילום.</p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-primary/80">
              <Mail className="w-5 h-5 text-accent" />
              <span className="font-mono text-sm">carinegarber2005@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-primary/80">
              <Phone className="w-5 h-5 text-accent" />
              <span className="font-mono text-sm" dir="ltr">052-4481941</span>
            </div>
          </div>

          {/* Social / Communication Row */}
          <div className="flex items-center gap-4">
            <a href="https://wa.me/972524481941?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D." target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary/80 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/carine__photography/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary/80 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="md:w-1/2">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Spam Protection & Config */}
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="כניסה חדשה מהאתר - קארין גרבר" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-xs font-medium uppercase tracking-wider text-primary/60 mb-2">שם מלא</label>
                <input type="text" name="name" required className="bg-background border-b border-primary/20 p-3 focus:outline-none focus:border-accent text-primary transition-colors placeholder:text-primary/30" placeholder="דוגמה: אלקס ריברה" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-medium uppercase tracking-wider text-primary/60 mb-2">אימייל</label>
                <input type="email" name="email" required className="bg-background border-b border-primary/20 p-3 focus:outline-none focus:border-accent text-primary transition-colors placeholder:text-primary/30" placeholder="alex@example.com" dir="ltr" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-medium uppercase tracking-wider text-primary/60 mb-2">מספר טלפון</label>
              <input type="tel" name="phone" className="bg-background border-b border-primary/20 p-3 focus:outline-none focus:border-accent text-primary transition-colors placeholder:text-primary/30" placeholder="050-0000000" dir="ltr" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-medium uppercase tracking-wider text-primary/60 mb-2">הודעה</label>
              <textarea name="message" required rows="4" className="bg-background border-b border-primary/20 p-3 focus:outline-none focus:border-accent text-primary transition-colors resize-none placeholder:text-primary/30" placeholder="פרטים על החזון שלך..."></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={cooldown > 0 || status === 'submitting'} 
              className={`w-full py-4 rounded-xl font-medium tracking-wide flex justify-center items-center gap-2 transition-colors ${
                cooldown > 0 || status === 'submitting' 
                  ? 'bg-primary/50 cursor-not-allowed text-white/50' 
                  : 'magnetic-btn bg-primary text-white hover:bg-black'
              }`}
            >
              {status === 'submitting' && 'שולח...'}
              {status === 'success' && 'נשלח בהצלחה! תודה'}
              {status === 'error' && 'שגיאה. נסי שוב'}
              {status === 'idle' && cooldown > 0 && `המתן ${cooldown} שניות`}
              {status === 'idle' && cooldown === 0 && (
                <>שליחה <ArrowUpLeft className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// --- H. FOOTER ---
function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-8 px-6 md:px-12 rounded-t-[4rem] mx-auto w-full max-w-[100vw]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          <div>
            <h3 className="font-serif italic text-3xl mb-4 text-white">קארין גרבר</h3>
            <p className="text-white/60 max-w-xs text-sm">לוכדת אופנה עילית ואלגנטיות בדיוק חסר פשרות.</p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-accent uppercase">ניווט</span>
              <a href="#about" className="text-white/80 hover:text-white text-sm transition-colors">אודות</a>
              <a href="#portfolio" className="text-white/80 hover:text-white text-sm transition-colors">תיק עבודות</a>
              <a href="#contact" className="text-white/80 hover:text-white text-sm transition-colors">צור קשר</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-accent uppercase">מדיה חברתית</span>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors flex items-center gap-2">אינסטגרם <ArrowUpLeft className="w-3 h-3" /></a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors flex items-center gap-2">פינטרסט <ArrowUpLeft className="w-3 h-3" /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} קארין גרבר צילום. כל הזכויות שמורות.</p>

          <div className="flex items-center gap-2 mt-4 md:mt-0 bg-white/5 py-1.5 px-3 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-mono">המערכת תקינה</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative font-sans text-primary bg-background min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
