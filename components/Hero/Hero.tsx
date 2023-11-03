import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <span className="relative mb-8 inline-block text-[1.2rem] before:absolute before:-inset-1 before:block before:-skew-y-1 before:rounded-sm before:bg-[#cadaff] sm:text-[1.6rem]">
        <span className="relative font-custom font-bold text-black">
          Your idea
        </span>
      </span>

      <span className="relative mb-8 inline-block text-[1.2rem] before:absolute before:-inset-1 before:block before:-skew-y-2 before:rounded-sm before:bg-[#cadaff] sm:text-[1.6rem]">
        <span className="relative font-custom font-bold text-black">+</span>
      </span>

      <span className="relative mb-8 inline-block text-[1.2rem] before:absolute before:-inset-1 before:block before:-skew-y-[-4deg] before:rounded-sm before:bg-[#cadaff] sm:text-[1.6rem]">
        <span className="relative font-custom font-bold text-black">
          My tools
        </span>
      </span>

      <span className="relative mb-8 inline-block text-[1.2rem] before:absolute before:-inset-1 before:block before:-skew-y-[-2deg] before:rounded-sm before:bg-[#cadaff] sm:text-[1.6rem]">
        <span className="relative font-custom font-bold text-black">=</span>
      </span>

      <span className="relative mb-8 inline-block text-[1.2rem] before:absolute before:-inset-1 before:block before:-skew-y-1 before:rounded-sm before:bg-[#cadaff] sm:text-[1.6rem]">
        <span className="relative font-custom font-bold text-black">
          Our Stratospheric Success
        </span>
      </span>
    </div>
  );
}
