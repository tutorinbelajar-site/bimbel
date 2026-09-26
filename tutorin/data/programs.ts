export type Program = {
  slug: string;
  category: "privat" | "kelas";
  name: string;
  shortDescription: string;
  level: string;
  subject?: string;
  features: string[];
  packages?: { name: string; meetings: number; price: number }[];
};

export const programs: Program[] = [
  {
    slug: "privat-tka-sd",
    category: "privat",
    name: "Privat TKA SD",
    shortDescription: "Bimbingan 1-on-1 untuk persiapan TKA SD sesuai kebutuhan belajar siswa.",
    level: "SD",
    subject: "TKA",
    features: ["Jadwal fleksibel", "Materi sesuai kebutuhan", "Tutor pilihan", "Laporan perkembangan"],
    packages: [
      { name: "Boost", meetings: 8, price: 880000 },
      { name: "Growth", meetings: 16, price: 1600000 },
      { name: "Mastery", meetings: 32, price: 3040000 },
    ],
  },
  {
    slug: "privat-snbt",
    category: "privat",
    name: "Privat SNBT / Mandiri / IUP",
    shortDescription: "Pendampingan personal untuk target SNBT, Mandiri, dan IUP.",
    level: "SMA / Mahasiswa",
    subject: "SNBT",
    features: ["Diagnosis kemampuan", "Rencana belajar personal", "Tutor sesuai kebutuhan", "Monitoring progres"],
    packages: [
      { name: "Boost", meetings: 8, price: 1280000 },
      { name: "Growth", meetings: 16, price: 2400000 },
      { name: "Mastery", meetings: 32, price: 4640000 },
    ],
  },
  {
    slug: "kelas-tka-matematika-sd",
    category: "kelas",
    name: "Kelas TKA Matematika SD",
    shortDescription: "Kelas terstruktur untuk membangun penguasaan konsep dan strategi TKA Matematika SD.",
    level: "SD",
    subject: "TKA Matematika",
    features: ["Kelas terstruktur", "Latihan berkala", "Pembahasan", "Progress siswa"],
  },
  {
    slug: "kelas-tka-matematika-smp",
    category: "kelas",
    name: "Kelas TKA Matematika SMP",
    shortDescription: "Kelas persiapan TKA Matematika SMP dengan latihan dan pembahasan bertahap.",
    level: "SMP",
    subject: "TKA Matematika",
    features: ["Kurikulum terarah", "Latihan", "Pembahasan", "Evaluasi progres"],
  },
  {
    slug: "kelas-snbt-pk",
    category: "kelas",
    name: "Kelas SNBT PK",
    shortDescription: "Kelas intensif untuk Penalaran Kuantitatif dalam persiapan SNBT.",
    level: "SMA",
    subject: "SNBT PK",
    features: ["Materi inti", "Drill soal", "Pembahasan strategi", "Evaluasi berkala"],
  },
  {
    slug: "kelas-snbt-pm",
    category: "kelas",
    name: "Kelas SNBT PM",
    shortDescription: "Kelas intensif untuk Penalaran Matematika dalam persiapan SNBT.",
    level: "SMA",
    subject: "SNBT PM",
    features: ["Konsep inti", "Latihan bertahap", "Pembahasan", "Evaluasi berkala"],
  },
];

export const privateProgramCatalog = [
  "Reguler SD 1–3 Nasional",
  "Reguler SD 4–6 Nasional",
  "Reguler SMP 7–9 Nasional",
  "Reguler SMA 10–12 Nasional",
  "Reguler SD 1–3 Internasional",
  "Reguler SD 4–6 Internasional",
  "Reguler SMP 7–9 Internasional",
  "Reguler SMA 10–12 Internasional",
  "TKA SD",
  "TKA SMP",
  "TKA SMA",
  "SNBT / Mandiri / IUP",
  "Olimpiade SD",
  "Olimpiade SMP",
  "Olimpiade SMA",
  "Kuliah Semester 1–2",
  "Kuliah Semester 3–akhir",
];
