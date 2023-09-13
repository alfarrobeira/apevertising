import React from "react";
import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
import { MainMenu } from "@/components/MainMenu";
import { VideoDisplay } from "@/components/VideoDisplay";
import { useMemo } from "react";

export default function Page() {
  const MapWithNoSSR = dynamic(() => import("@/components/Map"), {
    ssr: false,
  });

  // const Map = useMemo(
  //   () =>
  //     dynamic(() => import("@/components/Map"), {
  //       loading: () => <p>Loading Map...</p>,
  //       ssr: false,
  //     }),
  //   []
  // );

  return (
    <>
      <header>
        <MainMenu />
      </header>

      <main className="flex flex-col">
        <section id="video-section">
          <VideoDisplay
            filename="kontakt.mp4"
            headline="Kontakt"
            subheader="Hereinspaziert."
          />
        </section>

        <section id="address-section">
          <div className="wide-wrapper py-10 md:py-15 lg:py-20">
            <div className="content py-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase">
                Adresse und Kontakt
              </h3>
              <p>&nbsp;</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                <div className="py-4">
                  <p>APEvertising</p>
                  <p>Managing Director</p>
                  <p>Birgit Andiël</p>
                  <p>&nbsp;</p>
                  <p>E: birgitandiel@goldwert-ba.de</p>
                  <p>P: + 49 951 180 830 48</p>
                  <p>M: + 49 162 42 46 091</p>
                </div>
                <div className="py-4">
                  <p>Agentur München</p>
                  <p>Bruderstr. 3</p>
                  <p>80538 München</p>
                  <p>&nbsp;</p>
                  <p>Agentur Bamberg</p>
                  <p>Lichtenhaidstr. 11A</p>
                  <p>96052 Bamberg</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="map-section">
          <div className="wide-wrapper py-10 md:py-15 lg:py-20">
            <div className="content">
              <MapWithNoSSR />
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
