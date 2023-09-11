import { Footer } from "@/components/Footer";
import { MainMenu } from "@/components/MainMenu";
import { VideoDisplay } from "@/components/VideoDisplay";

export default function Page() {
  return (
    <>
      <header>
        <MainMenu />
      </header>

      <main className="flex flex-col items-center justify-between">
        <section id="video-section">
          <VideoDisplay
            filename="heartworking.mp4"
            headline="Warum bei uns arbeiten"
            subheader="Gute Gründe"
          />
        </section>

        <section id="intro-section">
          <div className="content-wrapper py-10 md:py-15 lg:py-20">
            <div className="content">
              <p>
                Dankbarkeit ist angebracht. Denn die anspruchsvolle Arbeit für
                unsere Kunden verteilt sich auf viele verschiedene Schultern.
                Und diese Schultern gehören sympathischen, neugierigen,
                motivierten und leistungsbereiten Mitarbeitenden. Menschen, die
                nach wie vor unser höchstes Gut sind. Darum tun wir viel dafür,
                dass es ihnen gut geht – von Anfang an.
              </p>
              <p>&nbsp;</p>
              <p>
                Wir nennen das{" "}
                <span className="text-3xl gold uppercase">Heartworking</span>.
              </p>
            </div>
          </div>
        </section>

        <section id="reasons-section">
          <div className="py-10 md:py-15 lg:py-20 px-6 lg:px-10">
            <div className="py-10 md:py-15 lg:py-20 text-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase p-4">
                Fünf gute Gründe
              </h3>
              <h4 className="text-2xl md:text-3xl lg:text-4xl gold">
                Warum die Arbeit als APE begeistert!
              </h4>
            </div>
            <p>&nbsp;</p>
            <div className="grid grid-cols-1 gap-10 md:gap-20 lg:gap-30 px-6 py-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase gold text-center">
                  1.
                  <br />
                  Hier ist was los
                </h3>
                <div>
                  Der Alltag bei APEVERTISING ist alles andere als farblos. Kein
                  Tag gleicht dem anderen, kein Projekt ist 08/15. Zugegeben, es
                  wird mitunter auch mal ganz schön kribbelig. Durch ganz viel
                  #greativity und #heartworking bleiben wir aber auf Spur und
                  meistern gemeinsam mit dem weltbesten Team alle
                  Herausforderungen.
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase gold text-center">
                  2.
                  <br />
                  Ey, Alter
                </h3>
                <div>
                  Erfahrung hat nichts mit dem Alter zu tun. Wir setzen auf
                  einem inspirierenden Mix aus jahrelanger Berufserfahrung und
                  jeder Menge jugendlichem Heißsporn. Unsere Hierarchien sind
                  flach und bieten Entfaltungspotenzial. Junge Kolleginnen und
                  Kollegen können sich bereits sehr früh an spannenden Projekten
                  beweisen und Verantwortung übernehmen. Den Feinschliff gibt es
                  dann zwangsläufig von alleine.
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase gold text-center">
                  3.
                  <br />
                  Im-Team Verständnis
                </h3>
                <div>
                  Hand auf’s Herz: Wer täglich acht Stunden zusammenarbeitet,
                  der findet Freundschaften fürs Leben. Bei uns kein Muss, aber
                  zum Glück auch keine Seltenheit. Die Feierabendgestaltung wird
                  zum Highlight – egal, ob gemeinsamer Fitnessclub-, Kultur-
                  oder Kneipenbesuch oder aber auch die helfenden Hände bei
                  Umzug oder Renovierung. Einmal APE, immer APE!
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase gold text-center">
                  4.
                  <br />
                  Next Level
                </h3>
                <div>
                  Wir arbeiten in einer Branche, die vielfältige Einstiegs- und
                  auch Karrierewege zulässt. Wir sind ab dem Moment deiner
                  Einstellung dein größter Fan, geben dir regelmäßiges Feedback
                  und sind an deiner Entwicklung interessiert. Und wenn sich
                  deine Stärken mal ändern sollten, dann ist das gut so. Sprich
                  mit uns. Und wir finden dafür eine interne Lösung.
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase gold text-center">
                  5.
                  <br />
                  Rundum zufrieden
                </h3>
                <div>
                  APEVERTISING ist nur so gut wie seine Mitarbeitenden. Nichts
                  wissen wir besser als das! Deshalb bieten wir sichere
                  Arbeitsplätze, zahlen überpünktlich Gehälter, legen viel Wert
                  auf unser tolles Betriebsklima und wachsen langsam und mit
                  Verantwortung. Unsere Wertschätzung hört übrigens nicht beim
                  Gehalt auf – Wir haben noch eine ganze Menge mehr auf Lager!
                  Schließlich entwickeln wir für unsere Kunden auch keine
                  Standard-Onlinemarketingstrategien.
                </div>
              </div>
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
