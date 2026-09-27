# Tutorin Platform

Monorepo awal Tutorin untuk menyatukan Program Privat, Kelas, Ebook, Tryout, Blog, dan CMS.

## Struktur

- `/` — website utama
- `/program` — dua kategori program: Privat dan Kelas
- `/ebook` — katalog ebook
- `/tryout` — katalog tryout
- `/blog` — artikel
- `/admin` — CMS awal
- `/admin/programs` — contoh pengelolaan program
- `/supabase/migrations` — schema database awal
- `/legacy` — tempat migrasi bertahap dari project lama Privat/SNBT/TKA

## Menjalankan

```bash
npm install
cp .env.example .env.local
npm run dev
```

Supabase belum wajib untuk menjalankan UI katalog. Setelah database siap, isi environment variable dan sambungkan query di `lib/supabase.ts`.

## Prinsip data

Program Tutorin hanya mempunyai dua kategori utama:

1. Privat
2. Kelas

TKA dan SNBT adalah area/subject/program di dalam kategori tersebut, bukan kategori navbar utama.

Tryout dan Ebook adalah produk/learning content terpisah dari Program.

## Supabase environment variables

Set these variables in Vercel for Production, Preview, and Development:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Do not commit `.env.local` or any Supabase secret/service-role key.
