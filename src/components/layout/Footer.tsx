import { Github, Instargram, Twitter } from "public/svgs";
import { SquProfile } from "../common/profile";

export function Footer() {
  return (
    <footer className="footer p-10 flex justify-center">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <aside className="flex items-center">
          <div className="pr-6">
            <SquProfile width={12} />
          </div>
          <p className="text-xs sm:text-sm">
            99-Planet Ltd.
            <br />© 2024. JeongHyunKim all rights reserved.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a href="">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/jghyunk04/">
              <Instargram />
            </a>
            <a href="https://github.com/kimjeonghyun165">
              <Github />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
