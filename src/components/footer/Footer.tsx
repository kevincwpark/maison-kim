export default function Footer() {
  return (
    <footer className="px-5 md:px-8 py-12 text-sm opacity-70">
      <div className="container-lg">
        © {new Date().getFullYear()} Maison Kim — All rights reserved.
      </div>
    </footer>
  );
}
