"use client";

import { FormEvent, useState } from "react";

export default function Page(){
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setSaved(false); setError(""); setLoading(true);
    const form = new FormData(e.currentTarget);
    const title = String(form.get("title") || "");
    const slug = title.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
    const res = await fetch("/api/admin/ebooks", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ slug, title, description:form.get("description"), price:Number(form.get("price")||0), purchaseUrl:form.get("purchaseUrl"), category:form.get("category"), status:"draft" }) });
    const data = await res.json(); setLoading(false);
    if (!res.ok) setError(data.error || "Gagal menyimpan ebook."); else { setSaved(true); e.currentTarget.reset(); }
  }
  return <><div className="section-title"><div className="eyebrow">CMS / Ebook</div><h1>Kelola Ebook</h1><p>Admin cukup mengisi informasi ebook dan tautan pembelian. Data disimpan ke Supabase melalui API admin.</p></div><form className="card form-card" onSubmit={submit}><label className="label">Judul ebook<input name="title" className="input" required placeholder="Contoh: Strategi Belajar TKA" /></label><label className="label">Deskripsi<textarea name="description" className="input" required rows={5} placeholder="Jelaskan isi dan manfaat ebook." /></label><label className="label">Harga (Rp)<input name="price" className="input" required type="number" min="0" placeholder="49000" /></label><label className="label">Link beli ebook<input name="purchaseUrl" className="input" required type="url" placeholder="https://..." /></label><label className="label">Kategori<input name="category" className="input" placeholder="TKA / SNBT / Belajar" /></label><button className="button button-primary" disabled={loading} type="submit">{loading ? "Menyimpan…" : "Simpan Ebook"}</button>{saved && <div className="notice">Ebook berhasil disimpan ke Supabase sebagai draft.</div>}{error && <div className="notice" style={{borderColor:"#e5a4a4",background:"#fff5f5"}}>{error}</div>}</form></>
}
