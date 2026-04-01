import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <>
      <section
        id="hero"
        className="w-full h-screen flex flex-col items-center justify-center gap-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center text-white space-y-2">
            <span className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-semibold">
              Selamat datang di website
            </span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in font-bold">
              RT 08 RW 03
              <br />
              BOJONGGENTENG
            </span>
          </h1>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={() => {
            const el = document.querySelector("#about");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.button>
      </section>
    </>
  );
};
