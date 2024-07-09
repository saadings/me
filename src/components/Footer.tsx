import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { Send } from "lucide-react";
import { IconPosition } from "@/enums/magicButton";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-5">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-75"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to Take{" "}
          <span className="font-extrabold capitalize text-purple">your</span>{" "}
          Digital Presence to the Next Level?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href="mailto:saadijutt007@gmail.com">
          <MagicButton
            title="Let's get in Touch"
            icon={<Send size={18} />}
            position={IconPosition.Right}
          />
        </Link>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center space-x-4">
          <Image
            src={"/favicon.png"}
            width={1024 / 15}
            height={1024 / 15}
            alt="logo"
            className="rounded-full"
          />
          <p className="text-sm font-light md:text-base md:font-normal">
            Copyright © {new Date().getFullYear()} - Saad Nauman
          </p>
        </div>
        <div className="flex items-center gap-6 max-md:mt-5 md:gap-3">
          {socialMedia.map(({ id, img, link }) => (
            <div
              key={id}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 saturate-150 backdrop-blur-lg backdrop-filter"
            >
              <Link href={link} target="_blank">
                <Image
                  src={img}
                  alt={img}
                  width={20}
                  height={20}
                  className="aspect-square"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
