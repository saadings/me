import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCard";
import { TypewriterEffectSmooth } from "@/components/ui/Typewriter";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  const words = [
    {
      text: "Kind",
    },
    {
      text: "Words",
    },
    {
      text: "from",
    },
    {
      text: "Satisfied",
      className: "text-purple dark:text-purple",
    },
    {
      text: "Clients",
      className: "text-purple dark:text-purple",
    },
  ];

  return (
    <div id="testimonials" className="py-20">
      <div className="flex justify-center">
        <TypewriterEffectSmooth words={words} />
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-16">
          {companies.map(({ id, img, name, nameImg }, idx) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                src={img}
                alt={name}
                className="w-5 md:w-10"
                width={36}
                height={33}
              />
              <Image
                src={nameImg}
                alt={name}
                className="w-20 md:w-24"
                width={144}
                height={33}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
