import Link from "next/link";
import { tryouts } from "@/data/content";
import { SectionTitle } from "@/components/SectionTitle";

export default function TryoutPage(){
  return <div className="section"><div className="container">
    <SectionTitle eyebrow="Tryout" title="Tryout & latihan Tutorin" description="Setiap TO memiliki folder sendiri di repository GitHub Tutorin. Menambah TO baru cukup dengan menambahkan folder dan mendaftarkan metadatanya melalui CMS."/>
    <div className="grid-3">
      {tryouts.map(t=><article className="card" key={t.slug}>
        <span className="badge">{t.category}</span>
        <h3>{t.title}</h3>
        <p>{t.questions} soal • {t.duration} menit</p>
        <p><small>GitHub: <code>{t.githubPath}</code></small></p>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          <a className="button button-primary" href={t.deploymentUrl}>Mulai Tryout</a>
          <Link className="button button-light" href={`/tryout/${t.slug}`}>Detail</Link>
        </div>
      </article>)}
    </div>
  </div></div>
}
