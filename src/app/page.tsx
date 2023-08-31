import { Footer } from "@/components/Footer";
import { MainMenu } from "@/components/MainMenu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <MainMenu />
      </header>

      {/* <main className="flex min-h-screen flex-col items-center justify-between p-12">
        Homepage
      </main> */}
      <main className="flex flex-col items-center justify-between p-12">
        <section id="video-section">
          <h1>Video here</h1>
        </section>

        <section id="firstimpression-section">
          <div className="content-wrapper">
            <div className="content">
              <h1 className="uppercase head-gold-italic py-10">
                Der erste Eindruck hat nur eine Chance.
              </h1>
              <p>
                Mit einem interdisziplinären Team aus kreativen Expertinnen und
                Experten entwickeln wir Online-Kommunikationslösungen für
                Unternehmen und Marken. Ganz gleich, ob wir dabei mit der
                Identität und Strategie beginnen oder es um die konkrete
                Steigerung von z. B. Bekanntheit, Absatz oder
                Fachkräftegewinnung geht.
              </p>
              <p>&nbsp;</p>
              <p>
                Wenn Sie möchten, sind wir ab sofort an Ihrer Seite – um Sie
                nachweislich erfolgreicher zu machen. Mit Neugier, Mut und mit
                der Erfahrung als Online Marketingagentur in Bamberg und
                München.
              </p>
              <div className="grid grid-cols-4 gap-2 py-12">
                <div className="grid grid-rows-2 gap-1">
                  <div className="xl-gold-italic">&nbsp;4</div>
                  <div className="italic">festangestellte Mitarbeitende</div>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <div className="xl-gold-italic">234</div>
                  <div className="italic">Quadratmeter Kreativität</div>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <div className="xl-gold-italic">100</div>
                  <div className="italic">Prozent Leidenschaft</div>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <div className="xl-gold-italic">124</div>
                  <div className="italic">Jahre addierte Berufserfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="corporatework-section">
          <div className="content-wrapper">
            <div className="content">
              <h1 className="uppercase head-black text-center">
                Corporate Work
              </h1>
              <h3 className="subhead-gold text-center">Wie wir arbeiten.</h3>
              <p>&nbsp;</p>
              <p>
                Mit unseren 4 Mitarbeitenden sind wir stark genug, um
                Unternehmen umfassend und dauerhaft zu betreuen und gleichzeitig
                so agil, um auch kurzfristige Projekte souverän zu realisieren.
                Unter diesen Voraussetzungen entsteht bei APEvertising aus
                strategischer Kompetenz, Markenerfahrung, Know-how und
                Kreativität wirksames Online Marketing.
              </p>
              <p>&nbsp;</p>
              <p>
                Wie das Ergebnis aussieht, ist immer verschieden. Schauen Sie
                sich das doch mal genauer an.
              </p>
              <div className="text-center my-20">
                <Link href="/" className="uppercase border border-black p-2">
                  <img src="/BlackLine.png" className="inline" />
                  <span>&nbsp;Referenzen</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="connect-section">
          <div className="feed-wrapper">
            <div className="feed-content">
              <h1 className="uppercase head-black text-center">Connect with us</h1>
              <h3 className="subhead-gold text-center">Finde uns hier.</h3>
              <p>&nbsp;</p>
              <img src="Feed1.png" alt="Feed1" />
              <img src="Feed2.png" alt="Feed2" />
              <img src="Feed3.png" alt="Feed3" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
