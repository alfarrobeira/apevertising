export function Footer() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex items-center justify-between container mx-auto px-24 py-4">
          <div className="uppercase">Agentur und Leistungen</div>
          <div className="uppercase">Arbeiten bei Apevertising</div>
          <div className="uppercase">Kontakt</div>
        </div>
      </div>
      <div className="bg-white text-black">
        <div className="flex items-center justify-between container mx-auto px-24 py-4">
          <div className="corporate-font1">Impressum | Datenschutzerklärung | AGB | Hinweis nach VSBG</div>
          <div className="flex">
            <div className="corporate-font1">Follow us</div>
            <img src="/SocialMedia.png" alt="Social Media" width="220" />
          </div>
        </div>
      </div>
    </>
  );
}
