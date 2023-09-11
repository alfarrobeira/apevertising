import { Footer } from "@/components/Footer";
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
            filename="leistungen.mp4"
            headline="Leistungen"
            subheader="Erst denken,\ndann machen"
          />
        </section>

        <section id="playground-section">
          <div className="content-wrapper py-10 md:py-15 lg:py-20">
            <div className="content">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center p-4">
                Unser Playground
              </h3>
              <h4 className="text-2xl md:text-3xl lg:text-4xl gold text-center">
                Ganzheitlich.
              </h4>
              <p>&nbsp;</p>
              <p>
                Wenn so viele Expertinnen und Experten in einer Werbeagentur
                zusammenkommen, entsteht eine enorme kreative Kraft. Unsere
                Leistungen aus Strategie, Beratung, Konzeption, Design, Text,
                Foto, Film, Produktion, Coding sowie Offline- und
                Onlinemarketing folgen dabei einem ganzheitlichen Verständnis
                für die Ziele unserer Kunden aus b2b und b2c.
              </p>
              <p>&nbsp;</p>
              <p>
                Egal ob es dabei um die Steigerung der Markenbekanntheit oder
                der Verkaufszahlen geht. Wir begeistern und aktivieren. Wir
                gestalten und entwickeln. Wir formen Marken.
              </p>
            </div>
          </div>
        </section>

        <section id="arbeitsweise-section">
          <div className="content-wrapper py-10 md:py-15 lg:py-20">
            <div className="content text-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase p-4">
                Unsere Arbeitsweise
              </h3>
              <h4 className="text-2xl md:text-3xl lg:text-4xl gold">
                Workflow.
              </h4>
              <p className="py-20">Display Workflow here!</p>
            </div>
          </div>
        </section>

        <section id="logo-section">
          {/* todo: bg-no-repeat"> */}
          <div className="content-wrapper bg-black bg-[url('/images/blackline.png')] w-screen bg-cover bg-center text-white p-10">
            <div className="content text-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase py-8">
                Neugierig geworden?
              </h3>
              <h4 className="text-2xl md:text-3xl lg:text-4xl gold py-4">
                Machen Sie sich ein Bild<br />von unserer Arbeit.
              </h4>
              <img src="/images/WhiteArrowDown.png" alt="ArrowDown" className="mx-auto px-14 py-6" />
              <div className="text-center text-white my-10">
                <Link href="/" className="uppercase border border-white px-4 py-4">
                  <img src="/images/WhiteLine.png" className="inline w-20" />
                  <span>&nbsp;Referenzen</span>
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
