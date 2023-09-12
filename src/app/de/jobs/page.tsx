import { Footer } from "@/components/Footer";
import JobList from "@/components/JobList";
import { MainMenu } from "@/components/MainMenu";
import { VideoDisplay } from "@/components/VideoDisplay";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header>
        <MainMenu />
      </header>

      <main className="flex flex-col items-center justify-between">
        <section id="video-section">
          <VideoDisplay
            filename="jobs.mp4"
            headline="Jobs"
            subheader="Wir hätten hier etwas\nzu bieten"
          />
        </section>

        <section id="warum-section">
          <div className="content-wrapper py-10 md:py-15 lg:py-20">
            <div className="content py-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase">
                Warum wir
              </h3>
              <p>&nbsp;</p>
              <p>
                Es gibt viele gute Gründe bei APEVERTISING zu arbeiten. Die
                abwechslungsreichen Kundinnen und Kunden, die tolle Lage am XXX
                und die nicht ganz branchenüblichen Benefits zum Beispiel. Am
                meisten jedoch kann und wird dich das Team überzeugen. Ein
                Haufen junger, mitteljunger und junggebliebener Menschen, die
                nicht nur miteinander, sondern füreinander durch dick und dünn
                gehen. Menschen, die ihren Job beherrschen. Und die schon jetzt
                Feuer und Flamme sind, dich in ihrer Mitte aufzunehmen.
              </p>
            </div>
            <div className="content py-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase">
                Warum du
              </h3>
              <p>&nbsp;</p>
              <p>
                Nachhaltiger Erfolg ist nur mit einem ganzheitlichen Ansatz
                möglich. Deswegen suchen wir Menschen mit Visionen, Tatendrang
                und kreativen Impulsen! Und deshalb freuen wir uns darauf, dich
                kennenzulernen!
              </p>
              <p>&nbsp;</p>
              <p>
                Wir setzen aus Überzeugung auf diverse Teams und begrüßen
                Bewerbungen von allen Menschen – unabhängig von Alter,
                Geschlecht, geschlechtlicher Identität, sexueller Orientierung,
                Behinderung oder Beeinträchtigung, ethnischer Herkunft oder
                Nationalität, Religion oder Weltanschauung.
              </p>
            </div>
          </div>
        </section>

        <section id="jobs-section">
          <div className="feed-wrapper">
            <div className="feed-content">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center p-4">
                Bewirb dich!
              </h3>
              <h4 className="text-2xl md:text-3xl lg:text-4xl gold text-center">
                Aktuelle Stellenausschreibungen.
              </h4>
              <JobList />
            </div>
          </div>
        </section>

        <section id="ansprechpartnerin-section">
          <div className="feed-wrapper py-10 md:py-15 lg:py-20">
            <div className="feed-content">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center p-4">
                Deine Ansprechpartnerin
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 py-4 lg:py-10">
                <img src="/images/Birgit.png" alt="Birgit Andiel" />
                <div className="py-2 xl:py-10">
                  <p>
                    Birgit ist die Gründerin der APEVERTISING Agentur und freut
                    sich bereits jetzt Dich kennenzulernen!
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Ruf doch einfach mal für einen Plausch bei Ihr an!
                    <br /> Niemand kennt APEVERTISING besser als Sie.
                  </p>
                  <p>&nbsp;</p>
                  <p>Birgit Andiël</p>
                  <p>E: birgitandiel@goldwert-ba.de</p>
                  <p>P: + 49 951 180 830 48</p>
                  <p>M: + 49 162 42 46 091</p>
                  <p>&nbsp;</p>
                  <p>#gerneperdu</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gruende-section">
          <div className="content-wrapper pb-20">
            <div className="content">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center p-4">
                Warum bei uns arbeiten?
              </h3>
              <img
                src="/images/BlackArrowDown.png"
                alt="ArrowDown"
                className="mx-auto px-14 py-6"
              />
              <div className="text-center my-10">
                <Link
                  href="/"
                  className="uppercase border border-black px-4 py-4"
                >
                  <img src="/images/BlackLine.png" className="inline w-20" />
                  <span>&nbsp;5 gute Gründe</span>
                </Link>
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
