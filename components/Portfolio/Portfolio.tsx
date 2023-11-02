import Image from "next/image";

import List from "../List/List";

import starlyProjectImage from "../../public/starly-project.png";
import reactLogo from "../../public/react-logo.png";
import nextjsLogo from "../../public/nextjs-logo.png";
import reduxLogo from "../../public/redux-logo.png";
import typescriptLogo from "../../public/typescript-logo.png";
import tailwindLogo from "../../public/tailwind-logo.png";
import Link from "next/link";

const techList = [
  { title: "React", img: reactLogo },
  { title: "NextJS", img: nextjsLogo },
  { title: "Redux", img: reduxLogo },
  { title: "Typescript", img: typescriptLogo },
  { title: "Tailwind", img: tailwindLogo },
];

export default function Portfolio() {
  return (
    <div className="bg-[#231F20]">
      <div className="h-16 justify-center flex items-center border-t-1 border-[#CAD9FF] mb-6 relative">
        <h2 className="text-slate-50 font-sans font-bold text-[1.3rem] before:block before:absolute before:w-[2rem] before:h-1 before:bottom-[2px] before:rounded-sm before:ml-[-8px] before:bg-[#CAD9FF]">
          Portfolio
        </h2>
      </div>

      <div className="flex flex-col px-4 sm:px-20 lg:px-4 lg:flex-row max-w-[1200px] m-auto">
        <Link
          href="https://starly.io/"
          className="flex-1 mb-6 lg:max-w-[600px] m-auto lg:mr-6 lg:mb-0 lg:mt-0"
        >
          <Image
            src={starlyProjectImage}
            alt="Picture of Starly project"
            priority={true}
            className="rounded-lg border-2 bg-[#CAD9FF] cursor-pointer"
          />
        </Link>
        <div className="flex flex-col flex-1">
          <p className="text-md text-center md:text-left font-sans font-bold text-slate-50 mb-5">
            Starly is a blockchain marketplace for selling and buying NFTs,
            where artists can create packs, a collection of NFT cards, as the
            main feature of the app.
          </p>
          <ul className="text-slate-50 font-sans text-md mb-5">
            <li className="mb-2">&#128241; - Fully responsive</li>
            <li className="mb-2">
              &#x1FAAA; - 3d party services integration for registration
            </li>
            <li className="mb-2">&#x1F680; - 100% optimized SEO</li>
            <li className="mb-2">
              &#129321; - 94% of Accessibility in Google Chrome Lighthouse
            </li>
            <li>&#127912; - Custom components design system</li>
          </ul>
          <List>
            {techList.map((item, i) => (
              <>
                <li
                  key={item.title}
                  className="flex flex-col sm:flex-row sm:items-center text-[0.8rem] text-center text-slate-50 relative font-custom"
                >
                  <Image
                    src={item.img}
                    width={24}
                    height={24}
                    alt="React logo"
                    quality={10}
                    className="m-auto mb-1 sm:mb-0 sm:mr-2"
                  />
                  {item.title}
                </li>
                <div className="w-[4px] h-[4px] bg-[#CAD9FF] rounded-sm mt-auto mb-auto last:hidden lg:mx-2" />
              </>
            ))}
          </List>
        </div>
      </div>

      
    </div>
  );
}
