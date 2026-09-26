import { ebooks } from "@/data/content";
import { SectionTitle } from "@/components/SectionTitle";

const formatPrice = (value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

export default function EbookPage(){
  return <div className="section"><div className="container"><SectionTitle eyebrow="Ebook" title="Ebook Tutorin" description="Pilih ebook sesuai kebutuhan belajar. Setiap ebook memiliki informasi harga dan tautan pembelian yang dapat dikelola admin melalui CMS."/><div className="grid-3">{ebooks.map(e=><article className="card" key={e.slug}><span className="badge">{e.category}</span><h3>{e.title}</h3><p>{e.description}</p><div className="price">{formatPrice(e.price)}</div><a className="button button-primary" style={{marginTop:16}} href={e.purchaseUrl} target="_blank" rel="noreferrer">Beli Ebook →</a></article>)}</div></div></div>
}
