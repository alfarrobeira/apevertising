import { Footer } from "@/components/Footer";
import { MainMenu } from "@/components/MainMenu";

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
          <h1 className="uppercase italic text-5xl text-yellow-500">Der erste Eindruck hat nur eine Chance.</h1>
        </section>

        <section id="corporatework-section">
          <h1>Corporate Work</h1>
        </section>

        <section id="connect-section">
          <h1>Connect</h1>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
