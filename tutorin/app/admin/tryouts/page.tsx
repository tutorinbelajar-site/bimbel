"use client";

import { FormEvent, useState } from "react";

export default function Page(){
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaved(false); setError(""); setLoading(true);
    const form = new FormData(e.currentTarget);
    const title = String(form.get("title") || "").trim();
    const slug = String(form.get("slug") || "").trim();

    const res = await fetch("/api/admin/tryouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        slug,
        category: form.get("category"),
        level: form.get("level"),
        duration: Number(form.get("duration") || 0),
        questions: Number(form.get("questions") || 0),
        githubRepoUrl: form.get("githubRepoUrl"),
        githubBranch: form.get("githubBranch") || "main",
        githubPath: form.get("githubPath"),
        deploymentUrl: form.get("deploymentUrl"),
      })
    });

    const data = await res.json();
    setLoading(false);
    if (!res.ok) setError(data.error || "Gagal menyimpan TO.");
    else { setSaved(true); e.currentTarget.reset(); }
  }

  return <>
    <div className="section-title">
      <div className="eyebrow">CMS / Tryout</div>
      <h1>Kelola Tryout</h1>
      <p>Source code TO dikelola manual melalui GitHub. CMS hanya menyimpan metadata dan menghubungkan TO ke website Tutorin.</p>
    </div>

    <form className="card form-card" onSubmit={submit}>
      <div className="notice">
        <strong>Workflow TO Tutorin:</strong> buat atau upload folder TO ke <code>public/tryouts/</code> di repository GitHub Tutorin. Tidak perlu mengubah routing atau source code website utama.
      </div>

      <label className="label">Nama TO
        <input name="title" className="input" required placeholder="Tryout TKA SD Paket 1" />
      </label>

      <div className="grid-2">
        <label className="label">Kategori
          <select name="category" className="input" defaultValue="TKA">
            <option>TKA</option><option>SNBT</option><option>Latihan</option>
          </select>
        </label>
        <label className="label">Jenjang / target
          <input name="level" className="input" placeholder="SD / SMP / SMA / Umum" />
        </label>
      </div>

      <div className="grid-2">
        <label className="label">Slug
          <input name="slug" className="input" required placeholder="tka-sd-paket-1" />
        </label>
        <label className="label">Branch
          <input name="githubBranch" className="input" defaultValue="main" placeholder="main" />
        </label>
      </div>

      <div className="grid-2">
        <label className="label">Durasi (menit)
          <input name="duration" className="input" type="number" min="1" placeholder="90" />
        </label>
        <label className="label">Jumlah soal
          <input name="questions" className="input" type="number" min="1" placeholder="30" />
        </label>
      </div>

      <label className="label">GitHub Repository URL
        <input name="githubRepoUrl" className="input" type="url" required placeholder="https://github.com/tutorinbelajar/tutorin" />
      </label>

      <label className="label">Folder TO di GitHub
        <input name="githubPath" className="input" required placeholder="public/tryouts/tka/sd/paket-01" />
        <small>Folder harus memiliki <code>index.html</code>. Path ini yang menentukan lokasi source TO.</small>
      </label>

      <label className="label">URL TO
        <input name="deploymentUrl" className="input" required placeholder="/tryouts/tka/sd/paket-01/" />
        <small>Untuk TO static di repository ini gunakan path <code>/tryouts/...</code>. Tidak perlu membuat route Next.js baru.</small>
      </label>

      <button className="button button-primary" disabled={loading} type="submit">
        {loading ? "Menyimpan…" : "Simpan TO"}
      </button>

      {saved && <div className="notice">TO berhasil didaftarkan sebagai draft di Supabase.</div>}
      {error && <div className="notice" style={{borderColor:"#e5a4a4",background:"#fff5f5"}}>{error}</div>}
    </form>
  </>;
}
