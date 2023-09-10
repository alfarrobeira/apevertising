import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="bg-black text-white py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 px-6 md:px-12 lg:px-20 py-2">
          <div className="grid grid-rows-5 gap-2 lg:gap-3 xl:gap-4 py-4">
            <div className="uppercase">Agentur und Leistungen</div>
            <Link href="/">Agentur</Link>
            <Link href="/de/leistungen">Leistungen</Link>
            <Link href="/">Referenzen</Link>
            <div className="mt-1">
              <Link href="/" className="uppercase border border-white p-2">
                <img src="/WhiteLine.png" className="inline" />
                <span>&nbsp;Newsletter abonnieren</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-rows-5 gap-2 lg:gap-3 xl:gap-4 py-4">
            <div className="uppercase">Arbeiten bei Apevertising</div>
            <Link href="/de/heartworking">Heartworking</Link>
            <Link href="/de/jobs">Jobs</Link>
            <Link href="/de/beanape">#BEANAPE</Link>
          </div>
          <div className="grid grid-rows-5 gap-2 lg:gap-3 xl:gap-4 py-4">
            <div className="uppercase">Kontakt</div>
            <div>APEvertising</div>
            <div>Lichtenhaidstr. 11a | 96052 Bamberg</div>
            <div>E: birgitandiel@goldwert-ba.de</div>
            <div>P: + 49 951 180 830 48 | M: + 49 162 42 46 091</div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black">
        <div className="flex items-center justify-between container mx-auto px-6 md:px-12 lg:px-20 py-4">
          <div className="corporate-font1">
            Impressum&nbsp;&nbsp;|&nbsp;&nbsp;Datenschutzerklärung&nbsp;&nbsp;|&nbsp;&nbsp;AGB&nbsp;&nbsp;|&nbsp;&nbsp;Hinweis
            nach VSBG
          </div>
          <div className="flex">
            <div className="corporate-font1">Follow us</div>
            <img src="/SocialMedia.png" alt="Social Media" width="220" />
          </div>
        </div>
      </div>
    </>
  );
}
