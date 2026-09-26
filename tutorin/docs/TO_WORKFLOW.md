# Workflow pengelolaan Tryout Tutorin

## Opsi 1 — GitHub (disarankan untuk TO yang dikembangkan programmer)
1. Developer membuat repository TO.
2. Admin membuka CMS → Tryout → Tambah/ubah TO.
3. Pilih `GitHub Repository`.
4. Isi repository URL dan branch.
5. Isi deployment URL setelah aplikasi dipublish.
6. Repository tetap menjadi source of truth untuk kode.

## Opsi 2 — Upload ZIP melalui CMS
1. Admin menyiapkan source code TO sebagai ZIP.
2. CMS mengunggah ZIP ke Supabase Storage bucket private `to-code`.
3. Metadata `code_storage_path` disimpan pada `tests`.
4. Pipeline deployment membaca package tersebut, melakukan build dalam lingkungan terisolasi, lalu mempublish aplikasi.

**Catatan keamanan:** jangan menjalankan source code yang diupload user/admin langsung di server Next.js. Upload ZIP harus diproses oleh build/deployment pipeline terisolasi.

## Opsi 3 — URL eksternal
Jika TO sudah di-host di tempat lain, simpan `deployment_url` tanpa menyimpan source code.
