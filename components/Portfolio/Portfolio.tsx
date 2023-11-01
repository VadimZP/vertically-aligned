import Image from "next/image";

import starlyProjectImage from "../../public/starly-project.png";

export default function Portfolio() {
  return (
    <div className="bg-[#231F20]">
      <div className="h-16 justify-center flex items-center border-t-1 border-[#CAD9FF] mb-6 relative">
        <h2 className="text-slate-50 font-sans font-bold text-[1.7rem] before:block before:absolute before:w-14 before:h-1 before:bottom-[2px] before:rounded-sm before:ml-[-8px] before:bg-[#CAD9FF]">
          Portfolio
        </h2>
      </div>

      <div className="flex px-6">
        <Image
          src={starlyProjectImage}
          alt="Picture of Starly project"
          width={600}
          height={600}
          className="rounded-sm mr-4"
        />
        <p className="text-lg font-sans text-slate-50">
          Starly is a blockchain marketplace for selling and buying NFTs, where
          artists can create packs, a collection of NFT cards, as the main
          feature of the app.
        </p>
      </div>
    </div>
  );
}
