import Link from "next/link";
import { ebooks } from "@/data/content";
import { SectionTitle } from "@/components/SectionTitle";
export default function EbookPage(){return <div className="section"><div className="container"><SectionTitle eyebrow="Ebook" title="Materi belajar Tutorin" description="Katalog ebook untuk membantu siswa belajar mandiri dengan materi yang lebih terarah."/><div className="grid-3">{ebooks.map(e=><article className="card" key={e.slug}><span className="badge">{e.category}</span><h3>{e.title}</h3><p>{e.description}</p><Link className="text-link" href={`/ebook#${e.slug}`}>Lihat detail →</Link></article>)}</div></div></div>}
