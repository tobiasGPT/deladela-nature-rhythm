import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Deladela</h3>
            <p className="font-inter text-primary-foreground/80">
              Naturens rytme møter kulinarisk lidenskap
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Snarvei</h4>
            <ul className="space-y-2 font-inter text-primary-foreground/80">
              <li>
                <a href="#hero" className="hover:text-accent transition-colors">
                  Hjem
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  Om Oss
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-accent transition-colors">
                  Meny
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-inter font-semibold mb-4">Følg Oss</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:kontakt@deladela.no"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center font-inter text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Deladela. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
