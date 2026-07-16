export function HeroText() {
  const socialLinks = [
    { label: "Linkedin", href: "", icon: "IN" },
    { label: "Github", href: "", icon: "GH" },
    {
      label: "Email",
      href: "mailto:luizfernandodivino.dev@gmail.com",
      icon: "@",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center gap-4 p-6 lg:p-0">
      <div className="flex gap-4 mb-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold">
          in
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold">
          gh
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold">
          @
        </div>
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
