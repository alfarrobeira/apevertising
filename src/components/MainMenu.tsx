import Link from "next/link";

export function MainMenu() {
  return (
    <> 
      <nav className="flex flex-wrap items-center justify-between container mx-auto px-24 py-4 uppercase">
        <Link href="/" className="pr-12"><img src="/Logo_APEvertising_by_Goldwert_2022_PNG.png" alt="Logo" width="200"/></Link>
        <Link className="menu" href="/de/leistungen">Leistungen</Link>
        <Link className="menu" href="/">Referenzen</Link>
        <Link className="menu" href="/de/heartworking">Heartworking</Link>
        <Link className="menu" href="/de/jobs">Jobs</Link>
        <Link className="menu" href="/de/beanape">#BEANAPE</Link>
        <Link className="menu" href="/de/kontakt">Kontakt</Link>
      </nav>
    </>
  );
}
