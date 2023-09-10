import { Footer } from "@/components/Footer";
import { MainMenu } from "@/components/MainMenu";

export default function Page() {
  return (
    <>
      <header>
        <MainMenu />
      </header>

      <main className="flex flex-col items-center justify-between p-12">
        <section id="video-section">
          <div className="relative flex justify-center">
            <video src="/videos/leistungen.mp4" autoPlay loop muted />
            <div className="absolute top-10 md:top-20 lg:top-40">
              <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase font-semibold text-white text-center py-4 md:py-8 lg:py-12">
                Leistungen.
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-7xl gold text-center">
                Erst denken,
                <br />
                dann machen.
              </h2>
            </div>
          </div>
        </section>

        <section id="2">
          <h1>todo</h1>
        </section>

        <section id="3">
          <h1>todo</h1>
        </section>

        <section id="4">
          <h1>todo</h1>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
