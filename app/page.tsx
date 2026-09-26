import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { programs } from "@/data/programs";
import { ebooks, tryouts, articles } from "@/data/content";
import { ProgramCard } from "@/components/ProgramCard";

const tutorProfileUrl =
  "https://s.id/PengajarTutorin";

const reportUrl =
  "https://s.id/laporanbelajartutorin";

const assessmentUrl = "https://tutorinbelajar.vercel.app/assessment.html";

export default function Home() {
  const featured = programs.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Tutorin • Belajar lebih terarah</div>
            <h1>Bukan sekadar belajar. Temukan pendampingan yang sesuai dengan kebutuhan dan targetmu.</h1>
            <p>
              Mulai dari kebutuhan akademik sehari-hari sampai target besar seperti TKA,
              olimpiade, SNBT, IUP, atau akademik kampus. Tutorin membantu memetakan
              kebutuhan, memilih pendekatan, dan memantau perkembangan belajar.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/bimbel">
                Cari Bimbel
              </Link>
              <a
                className="button button-light"
                href="https://wa.me/6280000000000"
                target="_blank"
                rel="noreferrer"
              >
                Konsultasi
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="eyebrow">Cara mulai</div>
            <h3>Kenali kebutuhan belajar dulu.</h3>
            <div className="mini-stat">
              <span>01</span>
              <strong>Kenali kebutuhan</strong>
            </div>
            <div className="mini-stat">
              <span>02</span>
              <strong>Temukan pendekatan</strong>
            </div>
            <div className="mini-stat">
              <span>03</span>
              <strong>Konsultasikan</strong>
            </div>
            <div className="mini-stat">
              <span>04</span>
              <strong>Mulai belajar</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="kebutuhan">
        <div className="container">
          <SectionTitle
            eyebrow="BIMBEL"
            title="Butuh bantuan di bagian mana?"
            description="Mulai dari kebutuhan sehari-hari sampai target besar seperti TKA, olimpiade, SNBT, IUP, atau akademik kampus."
          />

          <div className="needs-grid">
            {[
              {
                no: "01",
                title: "Akademik SD–SMA",
                text: "Untuk anak yang perlu memperkuat konsep, mengejar materi, mengerjakan tugas, atau menghadapi ujian.",
                tags: ["SD 1–3", "SD 4–6", "SMP", "SMA"],
              },
              {
                no: "02",
                title: "TKA",
                text: "Persiapan literasi, numerasi, penalaran, dan strategi pengerjaan.",
                tags: ["SD", "SMP", "SMA"],
              },
              {
                no: "03",
                title: "Olimpiade & Prestasi",
                text: "Pendalaman materi dan latihan kompetitif untuk anak dengan target prestasi.",
                tags: ["Matematika", "IPA", "Fisika"],
              },
              {
                no: "04",
                title: "Masuk PTN",
                text: "Persiapan SNBT, Mandiri, atau IUP sesuai kampus dan target anak.",
                tags: ["ITB", "UI", "UGM", "UNPAD"],
              },
              {
                no: "05",
                title: "Akademik Mahasiswa",
                text: "Pendampingan mata kuliah, project, UTS/UAS, skripsi, tugas akhir, dan persiapan sidang.",
                tags: ["D3", "S1", "S2"],
              },
            ].map((item) => (
              <article className="need-card" key={item.no}>
                <span className="need-number">{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <SectionTitle
            eyebrow="KENAPA TUTORIN?"
            title="Karena orang tua bukan cuma butuh tutor."
            description="Yang dibutuhkan bukan hanya tempat belajar, tetapi arah yang jelas tentang kebutuhan, proses, dan perkembangan belajar."
          />

          <div className="why-grid">
            <article className="why-card">
              <span className="why-number">01</span>
              <div className="why-icon">◎</div>
              <div className="why-meta">Tempo · Feedback · Target</div>
              <h3>Metode belajar disesuaikan</h3>
              <p>
                Analisa membantu memetakan cara anak menerima instruksi, menghadapi
                kesulitan, dan membangun kemandirian.
              </p>
              <a className="text-link" href={assessmentUrl} target="_blank" rel="noreferrer">
                Lihat analisa belajar →
              </a>
            </article>

            <article className="why-card">
              <span className="why-number">02</span>
              <div className="campus-strip">ITB · UI · UGM · UNPAD · ITS · UNAIR</div>
              <h3>Tutor dipilih untuk kebutuhan anak</h3>
              <p>
                Bukan hanya melihat kampus asal, tetapi juga disesuaikan dengan jenjang,
                pelajaran, target, dan kecocokan mengajar.
              </p>
              <a className="text-link" href={tutorProfileUrl} target="_blank" rel="noreferrer">
                Lihat profil pengajar Tutorin →
              </a>
            </article>

            <article className="why-card">
              <div className="progress-preview">
                <div><span>Materi</span><strong>✓</strong></div>
                <div><span>Progres</span><strong>78%</strong></div>
                <div><span>Catatan tutor</span><strong>2</strong></div>
                <div><span>Next step</span><strong>→</strong></div>
              </div>
              <h3>Progres belajar tetap terpantau</h3>
              <p>
                Setelah sesi, orang tua bisa mengetahui materi, perkembangan, kendala,
                dan langkah berikutnya.
              </p>
              <a className="text-link" href={reportUrl} target="_blank" rel="noreferrer">
                Lihat contoh laporan belajar murid →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="METODE KAMI"
            title="Jangan langsung pilih tutor. Kenali kebutuhannya dulu."
            description="Proses Tutorin dibuat supaya langkah belajar lebih terarah."
          />

          <div className="method-grid">
            {[
              ["01", "Kenali kebutuhan anak", "Target, hambatan, kebiasaan, dan kebutuhan belajar dipetakan."],
              ["02", "Temukan pendekatan", "Gunakan hasil analisa sebagai bahan menentukan pola pendampingan."],
              ["03", "Konsultasikan dengan Tutorin", "Diskusikan kebutuhan belajar sebelum memilih tutor dan program."],
              ["04", "Mulai belajar privat", "Sesi dibuat personal dan fokus pada target belajar yang disepakati."],
              ["05", "Pantau perkembangannya", "Laporan belajar membantu melihat progres, kendala, dan next step."],
            ].map(([no, title, text]) => (
              <article className="method-card" key={no}>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tutor-section">
        <div className="container">
          <div className="tutor-banner">
            <div>
              <div className="eyebrow">TUTOR TERPILIH</div>
              <h2>Anak belajar dengan tutor yang cocok, bukan sekadar tutor yang tersedia.</h2>
              <p>
                Tutorin membuka akses ke tutor dari berbagai kampus ternama dan menempatkan
                kecocokan mengajar, komunikasi, serta target belajar sebagai pertimbangan.
              </p>
            </div>
            <a className="button button-light" href={tutorProfileUrl} target="_blank" rel="noreferrer">
              Lihat profil tutor
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="bimbel-pilihan">
        <div className="container">
          <SectionTitle eyebrow="BIMBEL PILIHAN" title="Mulai dari kebutuhanmu" />
          <div className="grid-3">
            {featured.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
          <div className="center-action">
            <Link className="button button-primary" href="/bimbel">Lihat semua bimbel →</Link>
          </div>
        </div>
      </section>

      <section className="section" id="tryout">
        <div className="container">
          <SectionTitle
            eyebrow="TRYOUT"
            title="Latihan sebelum hari ujian"
            description="Tryout Tutorin dirancang sebagai ruang latihan dan evaluasi."
          />
          <div className="grid-3">
            {tryouts.map((t) => (
              <article className="card" key={t.slug}>
                <span className="badge">{t.category}</span>
                <h3>{t.title}</h3>
                <p>{t.questions} soal • {t.duration} menit</p>
                <Link className="text-link" href="/tryout">Lihat Tryout →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="EBOOK & BLOG" title="Materi belajar yang bisa diakses kapan saja" />
          <div className="grid-2">
            <div className="card">
              <span className="eyebrow">EBOOK</span>
              <h3>{ebooks[0].title}</h3>
              <p>{ebooks[0].description}</p>
              <Link className="text-link" href="/ebook">Lihat Ebook →</Link>
            </div>
            <div className="card">
              <span className="eyebrow">BLOG</span>
              <h3>{articles[0].title}</h3>
              <p>{articles[0].excerpt}</p>
              <Link className="text-link" href="/blog">Baca Blog →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="category-card">
            <div className="eyebrow" style={{ color: "#bfe6ce" }}>Butuh bantuan memilih?</div>
            <h2 style={{ fontSize: 38, margin: "8px 0" }}>
              Konsultasikan kebutuhan belajar.
            </h2>
            <p>
              Tim Tutorin dapat membantu menentukan apakah Privat atau Kelas lebih sesuai
              dengan kebutuhan belajar.
            </p>
            <a
              className="button button-light"
              href="https://wa.me/6280000000000"
              target="_blank"
              rel="noreferrer"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
