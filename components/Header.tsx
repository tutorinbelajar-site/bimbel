import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/">tutorin</Link>

        <nav className="nav" aria-label="Navigasi utama">
          <Link href="/">Home</Link>
          <Link href="/bimbel">Bimbel</Link>
          <Link href="/ebook">Ebook</Link>
          <Link href="/tryout">Tryout</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <a
          className="button button-primary nav-consult"
          href="https://wa.me/6280000000000"
          target="_blank"
          rel="noreferrer"
        >
          Konsultasi
        </a>

        <details className="mobile-menu">
          <summary aria-label="Buka menu navigasi">
            <span></span><span></span><span></span>
          </summary>
          <nav aria-label="Navigasi mobile">
            <Link href="/">Home</Link>
            <Link href="/bimbel">Bimbel</Link>
            <Link href="/ebook">Ebook</Link>
            <Link href="/tryout">Tryout</Link>
            <Link href="/blog">Blog</Link>
            <a
              className="mobile-consult"
              href="https://wa.me/6280000000000"
              target="_blank"
              rel="noreferrer"
            >
              Konsultasi
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
