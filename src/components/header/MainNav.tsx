"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MainNav() {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between px-5 py-4 md:px-8">
      <Link href="/" className="flex items-center gap-3">
        {/* Replace with your logo if you have one */}
        <img src="/logo.svg" alt="Maison Kim" className="h-8 w-auto" />
        <span className="tracking-widest text-xs md:text-sm">MAISON KIM</span>
      </Link>

      {/* Hamburger-only menu for minimal aesthetic */}
      <Sheet>
        <SheetTrigger aria-label="Open menu" className="p-2 md:p-3">
          <Menu />
        </SheetTrigger>
        <SheetContent side="right" className="w-72">
          <nav className="mt-10 grid gap-4 text-lg tracking-wide">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`pb-1 border-b ${
                    active ? "border-foreground" : "border-transparent hover:border-border"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <motion.div
            className="absolute bottom-6 left-6 flex gap-4 opacity-70"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </motion.div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
