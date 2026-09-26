import { notFound } from "next/navigation";
import { programs } from "@/data/programs";
import { rupiah } from "@/lib/format";

export default async function ProgramDetail({params}:{params:Promise<{category:string;slug:string}>}){
 const {category,slug}=await params;
 const program=programs.find(p=>p.category===category&&p.slug===slug);
 if(!program) return notFound();
 return <div className="section"><div className="container"><div className="detail-hero"><div className="eyebrow">{program.category} • {program.level}</div><h1>{program.name}</h1><p>{program.shortDescription}</p><a className="button button-primary" href="https://wa.me/6280000000000" target="_blank" rel="noreferrer">Konsultasi Program</a></div><div className="grid-2"><div className="card"><h3>Fasilitas</h3><div className="list">{program.features.map(f=><div className="list-item" key={f}><span className="check">✓</span>{f}</div>)}</div></div>{program.packages?<div className="card"><h3>Paket Privat</h3><div className="list">{program.packages.map(p=><div className="list-item" key={p.name}><div><strong>{p.name}</strong><div style={{color:"var(--muted)",fontSize:13}}>{p.meetings} pertemuan</div></div><span className="price" style={{marginLeft:"auto",fontSize:18}}>{rupiah(p.price)}</span></div>)}</div></div>:<div className="card"><h3>Format Kelas</h3><p>Jadwal, kuota, harga, materi, dan fasilitas kelas dapat dikelola dari CMS Tutorin.</p><div className="notice">Status: katalog awal. Hubungkan data kelas ke Supabase untuk informasi real-time.</div></div>}</div></div></div>
}
