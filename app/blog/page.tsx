import Link from "next/link";
import { articles } from "@/data/content";
import { SectionTitle } from "@/components/SectionTitle";
export default function BlogPage(){return <div className="section"><div className="container"><SectionTitle eyebrow="Blog" title="Wawasan belajar dari Tutorin" description="Artikel akan dikelola melalui CMS agar admin dapat membuat, mengedit, dan menerbitkan konten tanpa coding."/><div className="grid-3">{articles.map(a=><article className="card" key={a.slug}><span className="badge">{a.category}</span><h3>{a.title}</h3><p>{a.excerpt}</p><Link className="text-link" href={`/blog/${a.slug}`}>Baca artikel →</Link></article>)}</div></div></div>}
