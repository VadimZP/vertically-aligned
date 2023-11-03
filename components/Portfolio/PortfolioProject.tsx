import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import List from "../List/List";

interface Technology {
  name: string;
  image: StaticImageData;
}

interface PortfolioProjectProps {
  project: {
    name: string;
    description: string;
    image: StaticImageData;
    techList: Array<Technology>;
  };
}

export default function PortfolioProject({
  project,
  order,
}: PortfolioProjectProps) {
  const { name, description, image, techList } = project;

  console.log(order);

  return (
    <div className="m-auto mb-20 flex max-w-[1200px] flex-col sm:gap-8 lg:gap-5 px-4 last:mb-0 sm:px-20 lg:flex-row lg:px-4">
      <Link
        href="https://starly.io/"
        className={`m-auto flex-1 lg:mb-0 lg:mt-0 lg:max-w-[600px] odd:order-${order}`}
      >
        <Image
          src={image}
          alt="Picture of Starly project"
          priority={true}
          className="cursor-pointer rounded-lg border-2 bg-[#CAD9FF]"
        />
      </Link>
      <div className="flex flex-1 flex-col">
        <p className="text-md mb-5 text-center font-sans font-bold text-slate-50 md:text-left">
          {description}
        </p>
        <ul className="text-md mb-5 font-sans text-slate-50">
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
          {techList.map((technology, i) => (
            <>
              <li
                key={technology.name}
                className="relative flex flex-col text-center font-custom text-[0.8rem] text-slate-50 sm:flex-row sm:items-center"
              >
                <Image
                  src={technology.image}
                  width={24}
                  height={24}
                  alt="React logo"
                  quality={10}
                  className="m-auto mb-1 sm:mb-0 sm:mr-2"
                />
                {technology.name}
              </li>
              <div className="mb-auto mt-auto h-[4px] w-[4px] rounded-sm bg-[#CAD9FF] last:hidden lg:mx-2" />
            </>
          ))}
        </List>
      </div>
    </div>
  );
}
