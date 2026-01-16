import Link from "next/link";

export function Navbar() {
  return (
    <nav className="container mx-auto px-4 py-4 max-w-5xl">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-bold">Aircraft Model Shop</h1>
        <div className="flex space-x-4">
          <Link href="/">Shop</Link>
          <Link href="/locations">Locations</Link>
        </div>
      </div>
    </nav>
  );
}
