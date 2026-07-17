import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export function HeroText() {
  const socialLinks = [
    { label: "Linkedin", href: "", icon: <FaLinkedinIn className="w-5 h-5" /> },
    { label: "Github", href: "", icon: <FaGithub className="w-5 h-5"/> },
    {
      label: "Email",
      href: "mailto:luizfernandodivino.dev@gmail.com",
      icon: <MdEmail className="w-5 h-5"/>,
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center gap-4 p-6 lg:p-0">
      <div className="flex gap-4 mb-3">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold transition-transform hover:scale-105"
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Software Engineer
        </h1>
        <h2 className="text-3xl font-bold text-blue-400 mt-2">
          & Software Developer
        </h2>
        <p className="text-lg font-medium text-gray-200 leading-relaxed max-w-2xl mt-6">
          Hi! &apos;im Luiz Fernando, a Software Engineer working as a Software
          Developer. Always looking for problems to solve using code or just
          improving my workflow.
        </p>
      </div>
    </div>
  );
}
