import Link from "next/link";

export function Navbar() {
  return (
    <nav className="hidden md:flex justify-between gap-4 p-4 bg-main-background text-white">
      <span>
        LOGO
      </span>
      <div className="flex gap-8 max-w-7xl">
        <Link href="/">Home</Link>
        <Link href="/project">Project</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/certifications">Certifications</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <button>
          <Link href="/contact">
            Vamos Conversar
          </Link>
        </button>
      </div>
    </nav>
  );
}
