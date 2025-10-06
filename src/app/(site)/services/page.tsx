import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Services — Maison Kim" };

export default function Services() {
  return (
    <main className="container-lg py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/services.jpg"   // replace with relevant photo
            alt="Services"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover rounded-[var(--radius-lg)]"
          />
        </div>

        <section className="max-w-prose space-y-6">
          <h1 className="font-serif text-3xl md:text-4xl">Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien ornare,
            efficitur nunc nec, cursus turpis.
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Etiam sed eros feugiat</li>
            <li>Morbi condimentum augue</li>
            <li>Vivamus consequat mauris</li>
          </ul>

          <Link href="/contact" className="btn-primary inline-block mt-2">
            Contact
          </Link>
        </section>
      </div>
    </main>
  );
}
