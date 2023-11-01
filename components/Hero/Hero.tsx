import { Quicksand } from "next/font/google";
import styles from "./Hero.module.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-quicksand",
});

export default function Hero() {
  return (
    <div className={styles.hero}>
      {/* <div className={styles.wrapper}> */}
      <span className="before:block before:rounded-sm mb-8 text-[1.2rem] sm:text-[1.6rem] before:absolute before:-inset-1 before:-skew-y-1 before:bg-[#cadaff] relative inline-block">
        <span className="relative text-black font-custom font-bold">Your idea</span>
      </span>
      {/* <div className={styles.text}>Your idea</div> */}

      <span className="before:block before:rounded-sm mb-8 text-[1.2rem] sm:text-[1.6rem] before:absolute before:-inset-1 before:-skew-y-2 before:bg-[#cadaff] relative inline-block">
        <span className="relative text-black font-custom font-bold">+</span>
      </span>

      {/* <div className={styles.sign}>+</div> */}

      <span className="before:block before:rounded-sm mb-8 text-[1.2rem] sm:text-[1.6rem] before:absolute before:-inset-1 before:-skew-y-[-4deg] before:bg-[#cadaff] relative inline-block">
        <span className="relative text-black font-custom font-bold">My tools</span>
      </span>

      {/* <div className={styles.text}>My tools</div> */}

      <span className="before:block before:rounded-sm mb-8 text-[1.2rem] sm:text-[1.6rem] before:absolute before:-inset-1 before:-skew-y-[-2deg] before:bg-[#cadaff] relative inline-block">
        <span className="relative text-black font-custom font-bold">=</span>
      </span>

      {/* <div className={styles.sign}>=</div> */}

      <span className="before:block before:rounded-sm mb-8 text-[1.2rem] sm:text-[1.6rem] before:absolute before:-inset-1 before:-skew-y-1 before:bg-[#cadaff] relative inline-block">
        <span className="relative text-black font-custom font-bold">
          Our Stratospheric Success
        </span>
      </span>

      {/* <div className={styles.text}>Our Stratospheric Success</div> */}
      {/* </div> */}
    </div>
  );
}
