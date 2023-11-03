import starlyProjectImage from "../../public/starly-project.png";
import reactLogo from "../../public/react-logo.png";
import nextjsLogo from "../../public/nextjs-logo.png";
import reduxLogo from "../../public/redux-logo.png";
import typescriptLogo from "../../public/typescript-logo.png";
import tailwindLogo from "../../public/tailwind-logo.png";
import PortfolioProject from "./PortfolioProject";

const projects = [
  {
    name: "Starly",
    image: starlyProjectImage,
    description:
      "Starly is a blockchain marketplace for selling and buying NFTs, where artists can create packs, a collection of NFT cards, as the main feature of the app.",
    techList: [
      { name: "React", image: reactLogo },
      { name: "NextJS", image: nextjsLogo },
      { name: "Redux", image: reduxLogo },
      { name: "Typescript", image: typescriptLogo },
      { name: "Tailwind", image: tailwindLogo },
    ],
  },
  {
    name: "Margined Protocol",
    image: starlyProjectImage,
    description:
      "Starly is a blockchain marketplace for selling and buying NFTs, where artists can create packs, a collection of NFT cards, as the main feature of the app.",
    techList: [
      { name: "React", image: reactLogo },
      { name: "NextJS", image: nextjsLogo },
      { name: "Redux", image: reduxLogo },
      { name: "Typescript", image: typescriptLogo },
      { name: "Tailwind", image: tailwindLogo },
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="bg-[#231F20]">
      <div className="border-t-1 relative mb-6 flex h-16 items-center justify-center border-[#CAD9FF]">
        <h2 className="font-sans text-[1.3rem] font-bold text-slate-50 before:absolute before:bottom-[2px] before:ml-[-8px] before:block before:h-1 before:w-[2rem] before:rounded-sm before:bg-[#CAD9FF]">
          Portfolio
        </h2>
      </div>
      {projects.map((project, index) => {
        const odd = index % 2 === 0 ? 0 : 1
        return <PortfolioProject key={project.name} project={project} order={odd} />;
      })}
    </div>
  );
}
