import Image from "next/image";

export const metadata = { title: "About — Maison Kim" };

export default function About() {
  return (
    <main className="container-lg py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/about.jpg"   // replace with client photo
            alt="Maison Kim"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover rounded-[var(--radius-lg)]"
          />
        </div>

        <article className="max-w-prose space-y-6">
          <h1 className="font-serif text-3xl md:text-4xl">About Maison Kim</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet, mi id
            tincidunt lacinia, lorem lacus semper est, non bibendum nunc leo a massa. Proin a
            tellus sed massa faucibus semper.
          </p>
          <p>
            Suspendisse potenti. Integer feugiat, velit at gravida commodo, risus tortor
            ullamcorper enim, interdum pharetra sem orci in ipsum. Curabitur at metus nulla.
          </p>
        </article>
      </div>
    </main>
  );
}
