import { Footer } from "@/components/Footer";
import { MainMenu } from "@/components/MainMenu";

export default function Page() {
    return (
        <>
          <header>
            <MainMenu />
          </header>
    
          <main className="flex flex-col items-center justify-between p-12">
            <section id="1">
              <h1>Jobs</h1>
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