import { HeroText } from "@/components/home/Herotext";
import imagemluiz from "@/public/profile.png"
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full flex-1 flex justify-start">
          <HeroText />
        </div>

        <div className="hidden lg:flex flex-1 w-full relative min-h-125 justify-end items-center">
          <div className="absolute right-11 bg-[#2563eb] rounded-full w-100 h-100  opacity-40 blur-[80px]"></div>
          <div className="relative w-162.5 h-187.5 mt-6">
            <Image
            src={imagemluiz}
            alt="luiz fernando | fullstack developer"
            fill
            priority
            className="object-contain drop-shadow-2xl pl-10"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
