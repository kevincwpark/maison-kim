export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <section className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Maison Kim</h1>
        <p className="text-lg text-gray-600">
          Floral design studio — site scaffold running with Tailwind v4.
        </p>
        <button className="px-6 py-3 rounded-xl bg-black text-white hover:opacity-80 transition">
          Test Button
        </button>
      </section>
    </main>
  );
}
