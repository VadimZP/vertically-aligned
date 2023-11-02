export default function List({ children }: { children: React.ReactElement[] }) {
  return <ul className="flex justify-evenly lg:justify-start lg:mt-auto">{children}</ul>;
}

//  mt-auto