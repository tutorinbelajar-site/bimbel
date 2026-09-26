# Struktur TO Tutorin

Folder ini adalah **satu-satunya lokasi** untuk source code TO yang di-host bersama website Tutorin.

Admin/developer cukup menambahkan folder TO baru. Tidak perlu mengubah routing, navbar, atau source code website utama.

## Struktur

```text
public/tryouts/
├── tka/
│   ├── sd/
│   │   └── paket-01/
│   ├── smp/
│   │   └── paket-01/
│   └── sma/
│       └── paket-01/
├── snbt/
│   ├── paket-01/
│   └── paket-02/
└── latihan/
```

## Aturan setiap TO

Setiap folder TO harus mandiri dan memiliki:

```text
paket-01/
├── index.html          # wajib
├── assets/             # CSS, JS, gambar, font jika ada
└── README.md           # opsional
```

Gunakan **relative path** untuk asset:

```html
<script src="./assets/app.js"></script>
<link rel="stylesheet" href="./assets/style.css">
<img src="./assets/logo.png">
```

Jangan bergantung pada path root seperti `/assets/app.js`, karena TO akan berada di subfolder.

## URL otomatis

Folder:

```text
public/tryouts/tka/sd/paket-01/
```

akan tersedia di:

```text
/tryouts/tka/sd/paket-01/
```

Setelah folder baru di-push dan deployment Tutorin selesai, CMS cukup didaftarkan dengan path dan URL tersebut.

## Workflow

1. Buat folder TO sesuai kategori/jenjang.
2. Upload/push semua file TO ke folder tersebut melalui GitHub.
3. Pastikan ada `index.html`.
4. Commit & push.
5. Tutorin otomatis menyajikan folder tersebut tanpa perubahan pada kode aplikasi utama.
6. Masuk CMS → Tryout → Tambah TO → masukkan metadata + path GitHub + URL TO.
7. Publish dari CMS.

> Jangan memasukkan secret/API key di folder ini. Source TO dianggap public ketika dideploy sebagai static asset.
