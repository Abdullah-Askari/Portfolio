import { mySocials } from "@/constants";
import BackToTop from "../components/BackToTop";

export default function Footer() {
  return (
    <>
    <footer className="portfolio-footer-footer">
      <div className="portfolio-footer-content">
        <p className="portfolio-footer-copyright">
          © {new Date().getFullYear()} Abdullah Askari. All rights reserved.
        </p>
        <nav className="portfolio-footer-links" aria-label="Footer">
          {mySocials.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
              {social.name}<span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
    <BackToTop />
    </>
  );
}
