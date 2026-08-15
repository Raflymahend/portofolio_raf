import { useState, useEffect } from 'react'
import LaserField from './components/backgrounds/effects/laser-field'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SKILLS = [
  {
    category: 'Web Development',
    icon: '⬡',
    items: ['Laravel', 'React.js', 'WordPress', 'HTML5 & CSS3', 'UI/UX Design'],
  },
  {
    category: 'Back-End',
    icon: '◈',
    items: ['Flask', 'Python', 'RESTful APIs', 'API Integration', 'N8N Chatbot','PHP'],
  },
  {
    category: 'Mobile Development',
    icon: '◧',
    items: ['Flutter', 'Mobile UI Design', 'Cross-platform Development'],
  },
  {
    category: 'Developer Tools',
    icon: '◎',
    items: ['Git & GitHub', 'Bash', 'Design Thinking', 'Problem-Solving'],
  },
]

const CERTIFICATES = [
  {
    title: 'Panitia Pekan Olahraga Mahasiswa (POM) 2025',
    issuer: 'BEM Universitas Jenderal Achmad Yani Yogyakarta',
    date: '2025',
    img: '/certificates/image-8.png',
    file: '/certificates/image-8.png',
  },
  {
    title: 'Pemrogram Mobile Pratama',
    issuer: 'Lembaga Sertifikasi Profesi Teknologi Digital (BNSP)',
    date: '2025',
    img: '/certificates/image-2.png',
    file: '/certificates/image-2.png',
  },
  {
    title: 'PKL/Magang - PT Teknologi Server Indonesia (X-code)',
    issuer: 'PT Teknologi Server Indonesia (X-code)',
    date: '2025',
    img: '/certificates/image-6.png',
    file: '/certificates/image-6.png',
  },
  {
    title: 'Juara Pertama Lomba Volly Putra (POM Unjaya 2024)',
    issuer: 'BEM Universitas Jenderal Achmad Yani Yogyakarta',
    date: '2024',
    img: '/certificates/image-5.png',
    file: '/certificates/image-5.png',
  },
  {
    title: 'Kreatifitas dalam desain UI: Bootcamp flutter to be Widget and layout master',
    issuer: 'HMIF Universitas Jenderal Achmad Yani Yogyakarta',
    date: '2024',
    img: '/certificates/image-9.png',
    file: '/certificates/image-9.png',
  },
  {
    title: 'Panitia POM 2024',
    issuer: 'BEM Universitas Jenderal Achmad Yani Yogyakarta',
    date: '2024',
    img: '/certificates/PANITIA-POM-2024.png',
    file: '/certificates/PANITIA-POM-2024.png',
  },
  {
    title: 'Pelatihan Membuat Web Menggunakan Framework Django Intermediate Level',
    issuer: 'HMIF Universitas Jenderal Achmad Yani Yogyakarta',
    date: '2024',
    img: '/certificates/image-3.png',
    file: '/certificates/image-3.png',
  },
  {
    title: 'Webinar UI/UX Design 2024 - Peserta',
    issuer: 'Himpunan Mahasiswa Sistem Informasi (HMSI) - Universitas Jenderal Achmad Yani Yogyakarta',
    date: '2024',
    img: '/certificates/image-9.png',
    file: '/certificates/image-9.png',
  },
  {
    title: 'Website Developer Course - Muzaweb',
    issuer: 'Muzaweb',
    date: '2024',
    img: '/certificates/image-7.png',
    file: '/certificates/image-7.png',
  },
  {
    title: 'Flutter and Dart Bootcamp Participant',
    issuer: 'HMIF Universitas Jenderal Achmad Yani Yogyakarta',
    date: '2023',
    img: '/certificates/image-4.png',
    file: '/certificates/image-4.png',
  },
  {
    title: 'Juara 2 Lomba Bola Voli - FeArstyc 2023',
    issuer: 'BEM KM Fakultas Ekonomi dan Bisnis - Universitas Negeri Yogyakarta',
    date: '2023',
    img: '/certificates/voli-juara-2.jpg',
    file: '/certificates/voli-juara-2.jpg',
  },
  {
    title: 'Seminar Nasional dan Business Plan Competition dengan tema Data Science for Business Intelligence Strategy',
    issuer: 'Himpunan Mahasiswa Program Studi S2 dan S1 Informatika Fakultas Teknologi Industri Universitas Ahmad Dahlan',
    date: '2023',
    img: '/certificates/image-1.png',
    file: '/certificates/image-1.png',
  },
]

const PROJECTS = [
  {
    title: 'StuntPoint - Platform Edukasi Pencegahan Stunting',
    category: 'Full-Stack Development',
    desc: 'Platform edukasi interaktif untuk pencegahan stunting yang terintegrasi dengan model Machine Learning menggunakan algoritma Random Forest dan SMOTE untuk prediksi risiko stunting, dilengkapi dengan artikel edukasi, video & infografis, kuis interaktif, konsultasi dengan bidan via WhatsApp, dan forum konsultasi.',
    images: [
      '/project/project1.png',
      '/project/Seminar-Hasil-Saya.png',
      '/project/Seminar-Hasil-Saya1.png',
      '/project/Seminar-Hasil-Saya2.png',
    ],
    repo: 'https://github.com/Raflymahend/stuntpointproject.git',
  },
  {
    title: 'PadiWaras - Sistem Pakar Diagnosa Penyakit Daun Padi',
    category: 'Web Development',
    desc: 'Aplikasi sistem pakar berbasis web dengan metode Certainty Factor untuk mendiagnosa penyakit daun padi secara dini dan akurat. Dikembangkan melalui kerja sama FTTI UNJAYA dengan Kelompok Tani "Tani Makmur" untuk membantu petani dalam mendeteksi dan mengatasi penyakit tanaman padi.',
    images: [
      '/project/padi1.png',
      '/project/padi2.png',
      '/project/padi3.png',
      '/project/padi4.png',
    ],
    repo: 'https://padiwaras.my.id/',
  },
  {
    title: 'Tablet Fe - Edukasi & Pengingat Konsumsi Fe untuk Remaja & Ibu Hamil',
    category: 'Web Development',
    desc: 'Aplikasi web edukasi dan pengingat konsumsi Tablet Fe (zat besi) untuk remaja putri dan ibu hamil dalam rangka mendukung Gerakan Nasional "Remaja Sehat Bebas Anemia" & "Ibu Hamil Cerdas Konsumsi Fe". Dilengkapi dengan fitur pengingat konsumsi Fe, edukasi tentang anemia, dan informasi manfaat zat besi bagi kesehatan.',
    images: [
      '/project/fecare1.png',
      '/project/fecare2.png',
      '/project/fecare3.png',
      '/project/fecare4.png',
    ],
    repo: '#',
  },
  {
    title: 'AgriPadi - Deteksi Hama dan Penyakit Pada Padi',
    category: 'Mobile Dev and Backend Development',
    desc: 'Aplikasi mobile untuk deteksi hama dan penyakit pada tanaman padi yang dilengkapi dengan fitur diagnosa, tren penyakit, dan petunjuk penggunaan. Membantu petani dalam mengidentifikasi dan menangani masalah pada tanaman padi secara cepat dan tepat.',
    images: [
      '/project/agri1.png',
      '/project/agri2.png',
      '/project/agri3.png',
      '/project/agri4.png',
      '/project/agri5.png',
      '/project/agri6.png',
      '/project/agri7.png',
    ],
    repo: 'https://github.com/Raflymahend/Project-Sistem-Pakar.git',
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAllCerts, setShowAllCerts] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [gallery, setGallery] = useState<{ images: string[]; index: number } | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#133239', color: '#FFF8F8', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(19,50,57,0.92)' : 'rgba(19,50,57,0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(91,57,48,0.4)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          <a href="#hero" className="text-lg font-bold tracking-tight" style={{ color: '#FFF8F8', fontFamily: "'JetBrains Mono', monospace" }}>
            Rafly<span style={{ color: '#FFE174' }}>.dev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
                style={{ color: 'rgba(255,248,248,0.65)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFF8F8')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,248,248,0.65)')}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2 rounded-md transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: '#FFE174', color: '#133239' }}
            >
              Contact Me
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all duration-200"
                style={{ backgroundColor: '#FFF8F8' }}
              />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6 flex flex-col gap-4"
            style={{ borderTop: '1px solid rgba(91,57,48,0.4)' }}
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-1"
                style={{ color: '#FFF8F8' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-md text-center mt-1"
              style={{ backgroundColor: '#FFE174', color: '#133239' }}
              onClick={() => setMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={{ backgroundColor: '#133239' }}
      >
        {/* LASER FIELD BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LaserField color="#FFE174" opacity={0.7} blur={6} speed={1.5} />
        </div>

        {/* OVERLAY GRADIENT */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at top left, rgba(255,225,116,0.08), transparent 24%), radial-gradient(circle at bottom right, rgba(255,248,248,0.05), transparent 30%), linear-gradient(180deg, rgba(19,50,57,0.12), rgba(19,50,57,0.35))',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col gap-6">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase w-fit px-3 py-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(255,225,116,0.12)', color: '#FFE174', border: '1px solid rgba(255,225,116,0.25)', fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: '#FFE174' }} />
              Fresh Graduate · Available for opportunities
            </span>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight" style={{ color: '#FFF8F8' }}>
              Hi, I'm<br />
              <span style={{ color: '#FFF8F8' }}>Muhammad Rafly Mahendra</span>
            </h1>

            <p className="text-lg font-semibold leading-snug" style={{ color: '#FFE174' }}>
              S1 Informatika · Universitas Jenderal Achmad Yani Yogyakarta<br />
              Full-Stack & Mobile Developer
            </p>

            {/* <p className="text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,248,248,0.65)' }}>
              Saya adalah lulusan S1 Informatika dengan semangat tinggi untuk berkembang di industri teknologi.
              Berpengalaman dalam pengembangan aplikasi menggunakan Laravel, Flutter, Flask, dan React.
              Siap berkontribusi maksimal menghadirkan solusi teknologi dalam setiap proyek.
            </p> */}

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#FFE174', color: '#133239' }}
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-white/10"
                style={{ color: '#FFF8F8', border: '1.5px solid rgba(255,248,248,0.35)' }}
              >
                Get in Touch
              </a>
            </div>

            {/* <div className="flex gap-10 pt-6" style={{ borderTop: '1px solid rgba(91,57,48,0.5)' }}>
              {[
                { value: '2026', label: 'Graduation' },
                { value: '8+', label: 'Projects' },
                { value: '4', label: 'Websites' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold" style={{ color: '#FFE174' }}>{stat.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,248,248,0.5)', fontFamily: "'JetBrains Mono', monospace" }}>{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl"
                style={{ border: '2px solid rgba(91,57,48,0.6)' }}
              />
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: '#FFE174' }}
              />
              <div
                className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden"
                style={{
                  border: '2px solid #5B3930',
                  backgroundColor: '#1a3f4a',
                }}
              >
                <img
                  src="/certificates/fotoraf.jpg"
                  alt="Muhammad Rafly Mahendra"
                  className="w-full h-full object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(19,50,57,0.55) 100%)' }}
                />
              </div>

              <div
                className="absolute -bottom-5 -left-5 px-4 py-3 rounded-xl shadow-xl"
                style={{ backgroundColor: '#3D0530', border: '1px solid rgba(91,57,48,0.6)' }}
              >
                <p className="text-xs font-medium" style={{ color: 'rgba(255,248,248,0.55)', fontFamily: "'JetBrains Mono', monospace" }}>Currently based in</p>
                <p className="text-sm font-bold mt-0.5" style={{ color: '#FFF8F8' }}>Yogyakarta 🇮🇩</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="py-28"
        style={{ backgroundColor: '#3D0530' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel label="01 / About Me" />
          <div className="grid lg:grid-cols-2 gap-16 mt-12 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6" style={{ color: '#FFF8F8' }}>
                Fresh Graduate dengan<br />
                <span style={{ color: '#FFE174' }}>Semangat Belajar & Berkembang</span>
              </h2>
              <p className="text-base leading-loose mb-5" style={{ color: 'rgba(255,248,248,0.7)' }}>
                Saya adalah lulusan S1 Informatika dari Universitas Jenderal Achmad Yani Yogyakarta
                dengan semangat tinggi untuk berkembang di industri teknologi. Sebagai fresh graduate,
                saya cepat beradaptasi dan antusias bekerja di lingkungan dinamis.
              </p>
              <p className="text-base leading-loose" style={{ color: 'rgba(255,248,248,0.7)' }}>
                Keahlian saya mencakup rekayasa perangkat lunak, pengembangan web dan mobile,
                integrasi API, hingga kecerdasan buatan. Saya siap bekerja keras dan berkontribusi
                maksimal untuk menghadirkan solusi teknologi dalam setiap proyek perusahaan.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {[
                {
                  label: 'Pendidikan',
                  title: 'S1 Informatika',
                  sub: 'Universitas Jenderal Achmad Yani Yogyakarta',
                  note: '2022 - 2026',
                },
                {
                  label: 'Keahlian Utama',
                  title: 'Full-Stack & Mobile Development',
                  sub: 'Laravel, Flutter, Flask, React',
                  note: 'Integrasi API & Kecerdasan Buatan',
                },
                {
                  label: 'Pengalaman Kerja',
                  title: 'Internship & Crew Member',
                  sub: 'PT.Teknologi Server Indonesia · CFC · SaladBuyang.id',
                  note: 'Pengalaman organisasi & kerja lapangan',
                },
              ].map(item => (
                <div
                  key={item.label}
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: 'rgba(19,50,57,0.45)', border: '1px solid rgba(91,57,48,0.55)' }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: '#FFE174', fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {item.label}
                  </p>
                  <p className="font-bold text-base mb-0.5" style={{ color: '#FFF8F8' }}>{item.title}</p>
                  <p className="text-sm mb-1" style={{ color: 'rgba(255,248,248,0.55)' }}>{item.sub}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,248,248,0.4)', fontFamily: "'JetBrains Mono', monospace" }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        className="py-28"
        style={{ backgroundColor: '#133239' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel label="02 / Technical Skills" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILLS.map(skill => (
              <SkillCard key={skill.category} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ── */}
      <section
        id="certificates"
        className="py-28"
        style={{ backgroundColor: '#3D0530' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel label="03 / Certificates" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllCerts ? CERTIFICATES : CERTIFICATES.slice(0, 3)).map(cert => (
              <CertificateCard key={cert.title} {...cert} />
            ))}
          </div>

          {CERTIFICATES.length > 3 && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ color: '#FFF8F8', border: '1.5px solid rgba(255,248,248,0.35)' }}
              >
                {showAllCerts ? 'Tampilkan Lebih Sedikit' : `Lihat Selengkapnya (${CERTIFICATES.length - 3}+)`}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{
                    transform: showAllCerts ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        className="py-28"
        style={{ backgroundColor: '#3D0530' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel label="04 / Featured Projects" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllProjects ? PROJECTS : PROJECTS.slice(0, 3)).map(project => (
              <ProjectCard
                key={project.title}
                {...project}
                onViewImages={() => {
                  if (project.images && project.images.length > 0) {
                    setGallery({ images: project.images, index: 0 })
                  }
                }}
              />
            ))}
          </div>

          {PROJECTS.length > 3 && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ color: '#FFF8F8', border: '1.5px solid rgba(255,248,248,0.35)' }}
              >
                {showAllProjects ? 'Tampilkan Lebih Sedikit' : `Lihat Selengkapnya (${PROJECTS.length - 3}+)`}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{
                    transform: showAllProjects ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CONTACT + FOOTER ── */}
      <section
        id="contact"
        className="py-28"
        style={{ backgroundColor: '#133239' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel label="05 / Contact" />

          <div className="mt-12 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5" style={{ color: '#FFF8F8' }}>
                Mari Berkolaborasi<br />
                <span style={{ color: '#FFE174' }}>Membangun Solusi Teknologi.</span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,248,248,0.65)' }}>
                Saya sedang mencari peluang kerja di bidang teknologi dan terbuka untuk proyek freelance.
                Jangan ragu untuk menghubungi saya — saya biasanya merespons dalam waktu 24 jam.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.5 5.5h15v10a1 1 0 01-1 1h-13a1 1 0 01-1-1v-10z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M2.5 5.5l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    ),
                    label: 'mraflym.9d@gmail.com',
                    href: 'mailto:mraflym.9d@gmail.com',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M16 2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.4" /><path d="M7 9v6M7 6.5v.5M10 15v-4a2 2 0 014 0v4M10 11v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                    ),
                    label: 'linkedin.com/in/muhammad-rafly-mahendra',
                    href: 'https://id.linkedin.com/in/muhammad-rafly-mahendra-a585112a7',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C5.58 2 2 5.58 2 10c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.88-1.16-.88-1.16-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.22 1.86.87 2.32.66.07-.51.28-.87.5-1.07-1.77-.2-3.63-.89-3.63-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38C15.71 16.53 18 13.54 18 10c0-4.42-3.58-8-8-8z" fill="currentColor" /></svg>
                    ),
                    label: 'github.com/Raflymahend',
                    href: 'https://github.com/Raflymahend',
                  },
                ].map(contact => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200 hover:scale-[1.01]"
                    style={{ backgroundColor: 'rgba(61,5,48,0.35)', border: '1px solid rgba(91,57,48,0.45)' }}
                  >
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: 'rgba(255,225,116,0.12)', color: '#FFE174' }}
                    >
                      {contact.icon}
                    </span>
                    <span
                      className="text-sm font-medium transition-colors group-hover:text-white"
                      style={{ color: 'rgba(255,248,248,0.75)', fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {contact.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-10 flex flex-col items-center text-center gap-6"
              style={{ backgroundColor: '#3D0530', border: '1px solid rgba(91,57,48,0.55)' }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,225,116,0.12)', border: '1px solid rgba(255,225,116,0.2)' }}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M10 4h12l8 8v20a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#FFE174" strokeWidth="1.8" strokeLinejoin="round" /><path d="M22 4v8h8M13 16h10M13 21h10M13 26h6" stroke="#FFE174" strokeWidth="1.8" strokeLinecap="round" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#FFF8F8' }}>Download CV Saya</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,248,248,0.55)' }}>
                  Lihat lebih detail tentang pendidikan, pengalaman, proyek, dan keahlian saya.
                </p>
              </div>
              <a
                href="/cv/CV-Muhammad-Rafly-Mahendra.pdf"
                download="CV-Muhammad-Rafly-Mahendra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-semibold text-sm text-center transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ backgroundColor: '#FFE174', color: '#133239' }}
              >
                Download CV PDF
              </a>
              <p className="text-xs" style={{ color: 'rgba(255,248,248,0.3)', fontFamily: "'JetBrains Mono', monospace" }}>
                Terakhir diperbarui · Agustus 2026
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-24 pt-8 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(91,57,48,0.4)' }}
        >
          <p className="text-sm font-bold" style={{ color: '#FFF8F8', fontFamily: "'JetBrains Mono', monospace" }}>
            Rafly<span style={{ color: '#FFE174' }}>.dev</span>
          </p>
          <p className="text-xs text-center" style={{ color: 'rgba(255,248,248,0.35)' }}>
            © 2026 Muhammad Rafly Mahendra. Dibuat dengan React + Tailwind CSS.
          </p>
          <div className="flex gap-5">
            <a
              href="https://github.com/Raflymahend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors"
              style={{ color: 'rgba(255,248,248,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFE174')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,248,248,0.4)')}
            >
              GitHub
            </a>
            <a
              href="https://id.linkedin.com/in/muhammad-rafly-mahendra-a585112a7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors"
              style={{ color: 'rgba(255,248,248,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFE174')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,248,248,0.4)')}
            >
              LinkedIn
            </a>
            <a
              href="mailto:mraflym.9d@gmail.com"
              className="text-xs transition-colors"
              style={{ color: 'rgba(255,248,248,0.4)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFE174')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,248,248,0.4)')}
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* ── PROJECT IMAGE LIGHTBOX ── */}
      {gallery && (
        <ProjectLightbox
          images={gallery.images}
          index={gallery.index}
          onClose={() => setGallery(null)}
          onIndexChange={i => setGallery({ images: gallery.images, index: i })}
        />
      )}
    </div>
  )
}

/* ── Sub-components ── */

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: '#FFE174', fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </span>
      <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(91,57,48,0.45)' }} />
    </div>
  )
}

function SkillCard({ category, icon, items }: { category: string; icon: string; items: string[] }) {
  return (
    <div
      className="p-6 rounded-xl flex flex-col gap-5 h-full transition-all duration-200 hover:translate-y-[-2px]"
      style={{
        backgroundColor: 'rgba(61,5,48,0.3)',
        border: '1px solid #5B3930',
      }}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl" style={{ color: '#FFE174' }}>{icon}</span>
        <h3 className="font-bold text-base" style={{ color: '#FFF8F8' }}>{category}</h3>
      </div>
      <ul className="flex flex-col gap-2.5">
        {items.map(item => (
          <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,248,248,0.65)' }}>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B3930' }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CertificateCard({
  title,
  issuer,
  date,
  img,
  file,
}: {
  title: string
  issuer: string
  date: string
  img: string
  file: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        backgroundColor: 'rgba(19,50,57,0.55)',
        border: `1px solid ${hovered ? '#5B3930' : 'rgba(91,57,48,0.45)'}`,
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-48 overflow-hidden" style={{ backgroundColor: '#1a3f4a' }}>
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(19,50,57,0.75) 100%)' }}
        />
        <span
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: '#FFE174', color: '#133239', fontFamily: "'JetBrains Mono', monospace" }}
        >
          {date}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-base leading-snug" style={{ color: '#FFF8F8' }}>{title}</h3>
        <p className="text-sm" style={{ color: 'rgba(255,248,248,0.55)' }}>{issuer}</p>

        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg w-fit transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: '#FFE174', color: '#133239' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Lihat Sertifikat
        </a>
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  category,
  desc,
  images,
  repo,
  onViewImages,
}: {
  title: string
  category: string
  desc: string
  images: string[]
  repo: string
  onViewImages: () => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        backgroundColor: 'rgba(19,50,57,0.55)',
        border: `1px solid ${hovered ? '#5B3930' : 'rgba(91,57,48,0.45)'}`,
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={onViewImages}
        className="relative h-48 overflow-hidden w-full cursor-pointer"
        style={{ backgroundColor: '#1a3f4a' }}
      >
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(19,50,57,0.75) 100%)' }}
        />
        <span
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: '#FFE174', color: '#133239', fontFamily: "'JetBrains Mono', monospace" }}
        >
          {category}
        </span>
        {images.length > 1 && (
          <span
            className="absolute bottom-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1"
            style={{ backgroundColor: 'rgba(19,50,57,0.75)', color: '#FFF8F8' }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" /><rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" /></svg>
            {images.length}
          </span>
        )}
      </button>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="font-bold text-base leading-snug" style={{ color: '#FFF8F8' }}>{title}</h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,248,248,0.6)' }}>{desc}</p>

        <div className="flex gap-3 pt-2">
          <button
            onClick={onViewImages}
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#FFE174', color: '#133239' }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="4" cy="4.5" r="1" fill="currentColor" /><path d="M1.5 8.5l2.5-2.5 2 2 1.5-1.5 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Lihat Screenshot
          </button>

          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white/10"
            style={{ color: '#FFF8F8', border: '1px solid rgba(255,248,248,0.25)' }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1C3.24 1 1 3.24 1 6a5 5 0 003.42 4.74c.25.05.34-.11.34-.24v-.83c-1.39.3-1.68-.67-1.68-.67-.23-.58-.55-.73-.55-.73-.45-.31.03-.3.03-.3.5.03.76.51.76.51.44.76 1.16.54 1.45.41.04-.32.17-.54.31-.67-1.1-.13-2.26-.55-2.26-2.46 0-.54.19-.99.51-1.33-.05-.13-.22-.63.05-1.32 0 0 .42-.13 1.37.51a4.75 4.75 0 012.5 0c.96-.64 1.37-.51 1.37-.51.27.69.1 1.19.05 1.32.32.34.51.79.51 1.33 0 1.91-1.16 2.33-2.27 2.45.18.16.34.46.34.93v1.37c0 .13.09.29.34.24A5 5 0 0011 6c0-2.76-2.24-5-5-5z" fill="currentColor" /></svg>
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  )
}

function ProjectLightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: string[]
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && index > 0) onIndexChange(index - 1)
      if (e.key === 'ArrowRight' && index < images.length - 1) onIndexChange(index + 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, images.length, onClose, onIndexChange])

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div className="relative max-w-6xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors hover:bg-white/20"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>

        <img
          src={images[index]}
          alt={`Project screenshot ${index + 1}`}
          className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
        />

        {images.length > 1 && (
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => index > 0 && onIndexChange(index - 1)}
              className="p-2 rounded-lg transition-colors hover:bg-white/20 disabled:opacity-30"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              disabled={index === 0}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 5l-5 5 5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <span className="flex items-center text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {index + 1} / {images.length}
            </span>
            <button
              onClick={() => index < images.length - 1 && onIndexChange(index + 1)}
              className="p-2 rounded-lg transition-colors hover:bg-white/20 disabled:opacity-30"
              style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              disabled={index === images.length - 1}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 5l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}