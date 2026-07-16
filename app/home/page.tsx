import { HeroText } from "@/components/home/Herotext";

export default function Home() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-main-background">
        <div className="max-w-7xl mx-auto lg:justify-end">
          <HeroText/>
        </div>
      </div>
    );
  }
  