import { notFound } from "next/navigation";
import { tryouts } from "@/data/content";

export default async function TryoutDetail({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const t=tryouts.find(x=>x.slug===slug);
  if(!t)return notFound();
  return <div className="section"><div className="container"><div className="detail-hero">
    <div className="eyebrow">Tryout • {t.category}</div>
    <h1>{t.title}</h1>
    <p>{t.questions} soal dengan durasi {t.duration} menit.</p>
    <a className="button button-primary" href={t.deploymentUrl}>Mulai Tryout</a>
  </div><div className="notice">Source TO: <code>{t.githubPath}</code>. Kode dikelola manual melalui GitHub dan tidak membutuhkan perubahan route di aplikasi utama.</div></div></div>;
}
