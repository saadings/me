import dynamic from "next/dynamic";

import { projects } from "@/data";
const TextRevealCard = dynamic(() =>
  import("@/components/ui/TextRevealCard").then((mod) => mod.TextRevealCard),
);
const PinContainer = dynamic(() =>
  import("@/components/ui/3dPin").then((mod) => mod.PinContainer),
);
import { Navigation } from "lucide-react";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <div className="flex flex-col items-center justify-center">
        <TextRevealCard
          text="Latest Innovative Ventures"
          revealText="My Latest Cutting-Edge Projects"
          className="flex w-full justify-center"
        />
        <h2 className="text-center text-xs uppercase tracking-widest text-white-100/45">
          Hover over the text to reveal the hidden text
        </h2>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-xl">
                  <Image src="/bg.png" alt="bg-img" width={552} height={330} />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className="absolute bottom-0 z-10"
                  width={464}
                  height={300}
                />
              </div>
              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {title}
              </h1>

              <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                {des}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                      style={{ transform: `translateX(-${6 * index * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        className="p-2"
                        width={37}
                        height={34}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                    Check Live Site
                  </p>
                  <Navigation size={16} className="text-purple" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
