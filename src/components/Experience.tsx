"use client";
import dynamic from "next/dynamic";
// const Component = dynamic(() => import("./ui/HeroHighlight"));
import { motion } from "framer-motion";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { Meteors } from "./ui/Meteors";
import Image from "next/image";
// const { Highlight } = dynamic(() => import("./ui/HeroHighlight"));
const Highlight = dynamic(() =>
  import("./ui/HeroHighlight").then((mod) => mod.Highlight),
);
const HeroHighlight = dynamic(() =>
  import("./ui/HeroHighlight").then((mod) => mod.HeroHighlight),
);

const Experience = () => {
  return (
    <div>
      <div className="flex justify-center">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="mx-auto px-8 py-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-4xl lg:text-5xl lg:leading-snug"
          >
            My{" "}
            <Highlight className="text-black dark:text-white">
              Work Experience
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map(({ id, title, desc, thumbnail }) => (
          <Button
            key={id}
            borderRadius="3rem"
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <Image
                src={thumbnail}
                alt={title}
                className="aspect-square w-16 md:w-20 lg:w-32"
                width={97}
                height={87}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {title}
                </h1>
                <p className="mt-3 text-start font-semibold text-white-100">
                  {desc}
                </p>
              </div>
            </div>
            <Meteors number={10} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
