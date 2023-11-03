export default function List({ children }: { children: React.ReactElement[] }) {
  return (
    <ul className="flex justify-evenly lg:mt-auto lg:justify-start">
      {children}
    </ul>
  );
}
