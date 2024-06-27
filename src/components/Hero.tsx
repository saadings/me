import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { Send } from "lucide-react";
import { IconPosition } from "@/enums/magicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />

        <Spotlight
          className="left-[90%] top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />

        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div>
        <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.05]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
        </div>
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Dynamic Web Magic with Next.JS
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m Saad, a Full Stack Developer with a passion for
            creating beautiful and functional web applications.
          </p>

          <Link href="#about">
            <MagicButton
              title="Show my Work"
              icon={<Send size={18} />}
              position={IconPosition.Right}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
