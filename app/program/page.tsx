import { programs } from "@/data/programs";
import { SectionTitle } from "@/components/SectionTitle";
import { BimbelCatalog } from "@/components/BimbelCatalog";

export default function ProgramPage() {
  return (
    <main>
      <section className="detail-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Bimbel Tutorin"
            title="Cari bimbel yang sesuai kebutuhanmu."
            description="Pilih Privat untuk pendampingan personal atau Kelas untuk pembelajaran terstruktur. Gunakan pencarian dan filter untuk menemukan pilihan yang paling relevan."
          />
        </div>
      </section>

      <section className="section bimbel-catalog-section">
        <div className="container">
          <BimbelCatalog programs={programs} />
        </div>
      </section>
    </main>
  );
}
