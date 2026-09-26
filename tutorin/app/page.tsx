import Link from "next/link";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionTitle } from "@/components/SectionTitle";
import { programs } from "@/data/programs";
import { ebooks, tryouts, articles } from "@/data/content";

export default function Home() {
  return <>
    <section className="hero"><div className="container hero-grid"><div>
      <div className="eyebrow">Tutorin • Belajar lebih terarah</div>
      <h1>Temukan cara belajar yang sesuai kebutuhanmu.</h1>
      <p>Tutorin menyediakan program Privat, Kelas, Ebook, dan Tryout untuk membantu siswa belajar dengan arah yang lebih jelas dan terukur.</p>
      <div className="hero-actions"><Link className="button button-primary" href="/program">Lihat Program</Link><a className="button button-light" href="https://wa.me/6280000000000" target="_blank" rel="noreferrer">Konsultasi</a></div>
    </div><div className="hero-card"><h3>Belajar di Tutorin</h3><div className="mini-stat"><span>Program utama</span><strong>2 kategori</strong></div><div className="mini-stat"><span>Privat</span><strong>1-on-1</strong></div><div className="mini-stat"><span>Kelas</span><strong>Terstruktur</strong></div><div className="mini-stat"><span>Tryout</span><strong>Latihan & evaluasi</strong></div></div></div></section>

    <section className="section"><div className="container"><SectionTitle eyebrow="Program" title="Pilih format belajar yang paling sesuai" description="Program Tutorin hanya memiliki dua kategori utama: Privat dan Kelas."/><div className="grid-2"><Link href="/program/privat" className="category-card"><div className="eyebrow" style={{color:"#bfe6ce"}}>01 • PRIVAT</div><h3>Belajar 1-on-1 sesuai kebutuhan</h3><p>Jadwal fleksibel, materi menyesuaikan kebutuhan, tutor pilihan, dan monitoring perkembangan.</p><span className="text-link">Lihat Program Privat →</span></Link><Link href="/program/kelas" className="category-card alt"><div className="eyebrow">02 • KELAS</div><h3>Belajar bersama dengan struktur yang jelas</h3><p>Kelas TKA dan SNBT dengan materi, latihan, pembahasan, dan evaluasi yang terarah.</p><span className="text-link">Lihat Program Kelas →</span></Link></div></div></section>

    <section className="section" style={{background:"#edf7ef"}}><div className="container"><SectionTitle eyebrow="Program pilihan" title="Mulai dari kebutuhanmu"/><div className="grid-3">{programs.slice(0,3).map(p=><ProgramCard key={p.slug} program={p}/>)}</div></div></section>

    <section className="section"><div className="container"><SectionTitle eyebrow="Tryout" title="Latihan sebelum hari ujian" description="Tryout Tutorin dirancang sebagai ruang latihan dan evaluasi. Paket baru nantinya bisa ditambahkan admin melalui CMS."/><div className="grid-3">{tryouts.map(t=><article className="card" key={t.slug}><span className="badge">{t.category}</span><h3>{t.title}</h3><p>{t.questions} soal • {t.duration} menit</p><Link className="text-link" href="/tryout">Lihat Tryout →</Link></article>)}</div></div></section>

    <section className="section"><div className="container"><SectionTitle eyebrow="Ebook & Blog" title="Materi belajar yang bisa diakses kapan saja"/><div className="grid-2"><div className="card"><span className="eyebrow">EBOOK</span><h3>{ebooks[0].title}</h3><p>{ebooks[0].description}</p><Link className="text-link" href="/ebook">Lihat Ebook →</Link></div><div className="card"><span className="eyebrow">BLOG</span><h3>{articles[0].title}</h3><p>{articles[0].excerpt}</p><Link className="text-link" href="/blog">Baca Blog →</Link></div></div></div></section>

    <section className="section"><div className="container"><div className="category-card"><div className="eyebrow" style={{color:"#bfe6ce"}}>Butuh bantuan memilih?</div><h2 style={{fontSize:38,margin:"8px 0"}}>Konsultasikan kebutuhan belajar kamu.</h2><p>Tim Tutorin dapat membantu menentukan apakah format Privat atau Kelas lebih sesuai dengan kebutuhanmu.</p><a className="button button-light" href="https://wa.me/6280000000000" target="_blank" rel="noreferrer">Konsultasi Sekarang</a></div></div></section>
  </>;
}
