import { Footer } from "@/components/Footer";
import { MainMenu } from "@/components/MainMenu";
import { VideoDisplay } from "@/components/VideoDisplay";

export default function Page() {
  return (
    <>
      <header>
        <MainMenu />
      </header>

      <main className="flex flex-col items-center justify-between pb-20">
        <section id="video-section">
          <VideoDisplay
            filename="leistungen.mp4"
            headline="Leistungen"
            subheader="Erst denken,\ndann machen" />
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
            <div className="content text-center ">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase p-4">
                Unsere Arbeitsweise
              </h3>
              <h4 className="text-2xl md:text-3xl lg:text-4xl gold">
                Workflow.
              </h4>
              <p>Display Workflow here!</p>
            </div>
          </div>
        </section>

        <section id="logo-section">
          <div className="content-wrapper bg-black text-white">
            <div className="content">
              <h5 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center p-4">
                Neugierig geworden?
              </h5>
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
