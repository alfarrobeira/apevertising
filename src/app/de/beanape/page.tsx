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
            filename="startseite.mp4"
            headline="#BEANAPE"
            subheader="Viel los.\nViel zu erzählen."
          />
        </section>

        <section id="viellos-section">
          <div className="wide-wrapper py-10 md:py-15 lg:py-20">
            <div className="content py-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                <div className="py-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase">
                    Viel los.
                  </h3>
                  <p>&nbsp;</p>
                  <p>
                    Kein Tag gleicht dem anderen, kein Projekt ist wie das
                    vorherige. Hier grüßt täglich die Abwechslung und nicht das
                    Murmeltier. Das macht es manchmal ganz schön wimmelig, aber
                    eben auch sehr lebendig. Wir lieben das und können uns
                    nichts Schöneres vorstellen.
                  </p>
                </div>
                <div className="py-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase">
                    Viel zu erzählen.
                  </h3>
                  <p>&nbsp;</p>
                  <p>
                    Und weil unser Agenturleben zu lebhaft ist, um es für uns zu
                    behalten, findest du alles, was uns bewegt, auch online. Als
                    Post, Story oder Reel. Immer aktuell und immer irgendwie
                    anders. Wir würden ja sagen „typisch APES“ aber … Moment
                    mal: kein aber!
                  </p>
                  <p>Typisch APES.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feed-section">
          <div className="feed-wrapper">
            <div className="feed-content">
              <img src="/images/Feeds.png" alt="Feed" />
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
