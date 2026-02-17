"use client";
import Link from "next/link";
import { Instagram, Twitter, Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-light pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-serif font-bold tracking-tighter mb-6 block"
            >
              D<span className="text-brand-primary">HAIRS</span>
            </Link>
            <p className="text-brand-light/60 text-sm leading-relaxed mb-6">
              Redefining beauty with premium HD lace and 100% virgin human hair
              units. Designed for the modern woman.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-brand-primary transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="hover:text-brand-primary transition-colors"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-brand-accent uppercase text-xs tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-brand-light/70">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-light transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="hover:text-brand-light transition-colors"
                >
                  Shop Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/care"
                  className="hover:text-brand-light transition-colors"
                >
                  Wig Care Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-brand-accent uppercase text-xs tracking-widest">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm text-brand-light/70">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-primary" />
                <span>+234 800 DHAIRS</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-primary" />
                <span>hello@dhairs.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Policy */}
          <div>
            <h4 className="font-bold mb-6 text-brand-accent uppercase text-xs tracking-widest">
              Policy
            </h4>
            <ul className="space-y-4 text-sm text-brand-light/70">
              <li>
                <Link href="#" className="hover:text-brand-light">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-light">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-light">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Credits & Auroo Branding */}
        <div className="border-t border-brand-light/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-brand-light/40 space-y-4 md:space-y-0">
          <p>© {currentYear} DHAIRS. All rights reserved.</p>

          <div className="flex items-center space-x-1 group cursor-default">
            <span>Designed & Developed by</span>
            <span className="font-bold text-brand-light group-hover:text-brand-primary transition-colors tracking-widest uppercase">
              Aureoo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
