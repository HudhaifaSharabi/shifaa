"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./language-provider";

const socials = [
  { icon: Facebook, href: "https://facebook.com/shifaa", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/shifaa", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/shifaa", label: "LinkedIn" }
] as const;

export function SiteFooter() {
  const { t, direction } = useLanguage();

  return (
    <footer className="bg-darkBlue text-white" dir={direction}>
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary text-darkBlue text-xl font-bold">
                S
              </span>
              <span className="text-2xl font-semibold">Shifaa</span>
            </div>
            <p className="max-w-md text-sm text-white/70">{t.footer.tagline}</p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary hover:text-darkBlue"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">{t.footer.contact.title}</h3>
            <p className="flex items-center gap-2 text-sm text-white/80">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <a href={`tel:${t.footer.contact.phone}`} className="hover:underline">
                {t.footer.contact.phone}
              </a>
            </p>
            <p className="flex items-center gap-2 text-sm text-white/80">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <a href={`mailto:${t.footer.contact.email}`} className="hover:underline">
                {t.footer.contact.email}
              </a>
            </p>
            <p className="flex items-start gap-2 text-sm text-white/80">
              <MapPin className="mt-0.5 h-4 w-4" aria-hidden="true" />
              <span>{t.footer.contact.address}</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-white/70 md:grid-cols-1">
            {t.footer.links.map((group) => (
              <div key={group.title} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">{group.title}</h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-xs text-white/60">{t.footer.rights}</div>
      </div>
    </footer>
  );
}
