import { Footer } from "@/components/Footer";
import { MainMenu } from "@/components/MainMenu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <MainMenu />
      </header>

      <main className="flex flex-col items-center justify-between pb-20">
        <section id="video-section">
          <div className="relative flex justify-center">
            <video src="startseite.mp4" autoPlay loop muted />
            <div className="absolute top-10 md:top-20 lg:top-40">
              <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase font-semibold text-white text-center py-4 md:py-8 lg:py-12">Apevertising</h1>
              <h2 className="text-3xl md:text-5xl lg:text-7xl gold text-center">Wir formen Marken</h2>
            </div>
          </div>
        </section>

        <section id="firstimpression-section">
          <div className="content-wrapper">
            <div className="content">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase gold italic py-10">
                Der erste Eindruck hat nur eine Chance.
              </h3>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-12 text-center">
                <div className="grid grid-rows-2 gap-1">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl italic gold">&nbsp;4</h1>
                  <div className="italic">festangestellte Mitarbeitende</div>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl italic gold">234</h1>
                  <div className="italic">Quadratmeter Kreativität</div>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl italic gold">100</h1>
                  <div className="italic">Prozent Leidenschaft</div>
                </div>
                <div className="grid grid-rows-2 gap-1">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl italic gold">124</h1>
                  <div className="italic">Jahre addierte Berufserfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="corporatework-section">
          <div className="content-wrapper">
            <div className="content">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center p-4">
                Corporate Work
              </h3>
              <h4 className="text-2xl md:text-3xl lg:text-4xl gold text-center">Wie wir arbeiten.</h4>
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center p-4">
                Connect with us
              </h3>
              <h4 className="text-2xl md:text-3xl lg:text-4xl gold text-center">Finde uns hier.</h4>
              <p>&nbsp;</p>
              <img src="Feeds.png" alt="Feed" />
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
