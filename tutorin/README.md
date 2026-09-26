# Tutorin Platform

Repository utama Tutorin untuk menyatukan **Privat, Kelas, Ebook, Tryout, Blog, dan CMS**.

## Navigasi publik

- `/` — Home
- `/program` — dua kategori utama: Privat dan Kelas
- `/ebook` — katalog ebook
- `/tryout` — katalog TO/latihan
- `/blog` — artikel
- tombol **Konsultasi** — CTA utama

## CMS

- `/admin` — dashboard
- `/admin/programs` — katalog Program
- `/admin/tryouts` — metadata dan link TO
- `/admin/questions` — Bank Soal
- `/admin/ebooks` — Ebook
- `/admin/articles` — Blog
- `/admin/users` — Pengguna

### Aturan Ebook

Data ebook minimal terdiri dari:

- Judul
- Deskripsi
- Harga
- Link beli ebook (`purchase_url`)
- Kategori
- Cover opsional

Website menampilkan tombol **Beli Ebook** yang menuju `purchase_url`. File ebook tidak wajib disimpan di Tutorin apabila transaksi/download dilakukan di platform eksternal.

## Workflow TO — GitHub saja

**Source code TO tidak di-upload melalui CMS.** Programmer/admin meng-upload atau mengubah kode TO secara manual di repository GitHub ini.

Semua TO berada di:

```text
public/tryouts/<kategori>/<jenjang>/<slug>/
```

Contoh:

```text
public/tryouts/tka/sd/paket-01/
├── index.html
└── assets/
    ├── app.js
    ├── style.css
    └── ...
```

### Kategori yang digunakan

```text
public/tryouts/
├── tka/
│   ├── sd/
│   ├── smp/
│   └── sma/
├── snbt/
└── latihan/
```

### Aturan penting

1. Setiap TO harus mempunyai `index.html`.
2. Semua asset TO harus berada di dalam folder TO atau subfoldernya.
3. Gunakan **relative path** untuk CSS, JS, gambar, dan asset lain.
4. Jangan menggunakan secret/API key di source TO.
5. Menambah TO baru **tidak memerlukan perubahan routing atau source code aplikasi utama**.

Folder:

```text
public/tryouts/tka/sd/paket-01/
```

otomatis tersedia pada:

```text
/tryouts/tka/sd/paket-01/
```

Setelah kode di-push dan deployment Tutorin selesai.

### Workflow menambah TO

```text
1. Buat folder TO
        ↓
2. Upload source TO ke GitHub
        ↓
3. Pastikan index.html ada
        ↓
4. Commit & push
        ↓
5. Website Tutorin otomatis menyajikan folder tersebut
        ↓
6. CMS → Tryout → Tambah TO
        ↓
7. Isi metadata + GitHub path + URL TO
        ↓
8. Publish
```

CMS hanya menyimpan metadata TO, bukan source code-nya.

## Struktur folder TO

Template folder tersedia di:

```text
public/tryouts/
```

Dokumentasi lengkap ada di:

```text
public/tryouts/README.md
```

## Supabase

Migration utama berada di:

- `supabase/migrations/0001_tutorin_core.sql`
- `supabase/migrations/0002_ebook_and_tryout_sources.sql`
- `supabase/migrations/0003_github_only_tryout_path.sql`

`0003` menambahkan `github_path` untuk menyimpan lokasi folder TO di repository.

> Migration `0002` masih menyimpan kolom/storage lama untuk kompatibilitas data versi sebelumnya, tetapi workflow aplikasi saat ini **hanya menggunakan GitHub** untuk source TO.

## Menjalankan

```bash
npm install
cp .env.example .env.local
npm run dev
```

Isi environment variable Supabase sebelum mengaktifkan database.
