export type Ebook = {
  slug: string;
  title: string;
  description: string;
  category: string;
  price: number;
  purchaseUrl: string;
  coverUrl?: string;
};

export const ebooks: Ebook[] = [
  {
    slug: "strategi-belajar-tka",
    title: "Strategi Belajar TKA",
    category: "TKA",
    description: "Panduan belajar dan latihan terarah untuk menghadapi TKA.",
    price: 49000,
    purchaseUrl: "https://example.com/beli/strategi-belajar-tka",
  },
  {
    slug: "strategi-snbt",
    title: "Strategi Persiapan SNBT",
    category: "SNBT",
    description: "Panduan menyusun strategi persiapan SNBT secara bertahap.",
    price: 59000,
    purchaseUrl: "https://example.com/beli/strategi-snbt",
  },
];

export type Tryout = {
  slug: string;
  title: string;
  category: string;
  duration: number;
  questions: number;
  sourceType: "github";
  githubRepoUrl: string;
  githubBranch: string;
  githubPath: string;
  deploymentUrl: string;
};

export const tryouts: Tryout[] = [
  {
    slug: "tka-sd-paket-1",
    title: "Tryout TKA SD Paket 1",
    category: "TKA",
    duration: 90,
    questions: 30,
    sourceType: "github",
    githubRepoUrl: "https://github.com/tutorinbelajar/tutorin",
    githubBranch: "main",
    githubPath: "public/tryouts/tka/sd/paket-01",
    deploymentUrl: "/tryouts/tka/sd/paket-01/",
  },
  {
    slug: "tka-smp-paket-1",
    title: "Tryout TKA SMP Paket 1",
    category: "TKA",
    duration: 90,
    questions: 30,
    sourceType: "github",
    githubRepoUrl: "https://github.com/tutorinbelajar/tutorin",
    githubBranch: "main",
    githubPath: "public/tryouts/tka/smp/paket-01",
    deploymentUrl: "/tryouts/tka/smp/paket-01/",
  },
  {
    slug: "snbt-paket-1",
    title: "Tryout SNBT Paket 1",
    category: "SNBT",
    duration: 120,
    questions: 45,
    sourceType: "github",
    githubRepoUrl: "https://github.com/tutorinbelajar/tutorin",
    githubBranch: "main",
    githubPath: "public/tryouts/snbt/paket-01",
    deploymentUrl: "/tryouts/snbt/paket-01/",
  },
];

export const articles = [
  { slug: "cara-menyusun-jadwal-belajar", title: "Cara Menyusun Jadwal Belajar yang Realistis", category: "Belajar", excerpt: "Mulai dari target, waktu tersedia, dan evaluasi progres." },
  { slug: "persiapan-tka", title: "Apa yang Perlu Disiapkan Sebelum TKA?", category: "TKA", excerpt: "Kenali materi, pola latihan, dan strategi evaluasi sebelum ujian." },
  { slug: "strategi-snbt", title: "Strategi Belajar untuk Persiapan SNBT", category: "SNBT", excerpt: "Bangun fondasi konsep lalu lanjutkan dengan latihan terukur." },
];
