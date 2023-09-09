"use client";

import { useState } from "react";
import Link from "next/link";
import "../stylesheets/mainmenu.css";

export function MainMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between container mx-auto px-4 lg:px-12 xl:px-24 py-4 uppercase">
        <Link href="/">
          <img
            src="/Logo_APEvertising_by_Goldwert_2022_PNG.png"
            alt="Logo"
            width="200"
          />
        </Link>

        <nav>
          <section className="MOBILE-MENU flex xl:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              {" "}
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-4">
                  <Link className="menu" href="/de/leistungen">
                    Leistungen
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-4">
                  <Link className="menu" href="/">
                    Referenzen
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-4">
                  <Link className="menu" href="/de/heartworking">
                    Heartworking
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-4">
                  <Link className="menu" href="/de/jobs">
                    Jobs
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-4">
                  <Link className="menu" href="/de/beanape">
                    #BEANAPE
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-4">
                  <Link className="menu" href="/de/kontakt">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 xl:flex">
            <Link className="menu" href="/de/leistungen">
              Leistungen
            </Link>
            <Link className="menu" href="/">
              Referenzen
            </Link>
            <Link className="menu" href="/de/heartworking">
              Heartworking
            </Link>
            <Link className="menu" href="/de/jobs">
              Jobs
            </Link>
            <Link className="menu" href="/de/beanape">
              #BEANAPE
            </Link>
            <Link className="menu" href="/de/kontakt">
              Kontakt
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
