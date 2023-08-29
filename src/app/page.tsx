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
          <h1>First impression</h1>
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
