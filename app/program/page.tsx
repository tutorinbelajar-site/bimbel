import Link from "next/link";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionTitle } from "@/components/SectionTitle";

export default function ProgramPage(){return <div className="section"><div className="container"><SectionTitle eyebrow="Program Tutorin" title="Dua cara belajar, satu tujuan: belajar lebih terarah." description="Pilih Privat untuk pendampingan personal atau Kelas untuk pembelajaran terstruktur."/><div className="grid-2" style={{marginBottom:40}}><Link href="/program/privat" className="category-card"><h3>Privat</h3><p>Program 1-on-1 untuk kebutuhan akademik, ujian, dan target belajar yang spesifik.</p><span className="text-link">Jelajahi Privat →</span></Link><Link href="/program/kelas" className="category-card alt"><h3>Kelas</h3><p>Program kelas TKA dan SNBT dengan struktur materi dan latihan yang jelas.</p><span className="text-link">Jelajahi Kelas →</span></Link></div><SectionTitle eyebrow="Pilihan program" title="Program yang tersedia"/><div className="grid-3">{programs.map(p=><ProgramCard key={p.slug} program={p}/>)}</div></div></div>}
