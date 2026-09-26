import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/">tutorin</Link>
        <nav className="nav" aria-label="Navigasi utama">
          <Link href="/">Home</Link>
          <Link href="/program">Program</Link>
          <Link href="/ebook">Ebook</Link>
          <Link href="/tryout">Tryout</Link>
          <Link href="/blog">Blog</Link>
        </nav>
        <a className="button button-primary" href="https://wa.me/6280000000000" target="_blank" rel="noreferrer">Konsultasi</a>
      </div>
    </header>
  );
}
