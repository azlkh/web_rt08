import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ActivityCarousel = ({ images }: { images: string[] }) => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prev]) => [(prev + dir + images.length) % images.length, dir]);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gray-200">
      <AnimatePresence initial={false} custom={direction}>
        {images[index] ? (
          <motion.img
            key={index}
            src={images[index]}
            custom={direction}
            initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Gambar
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => paginate(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded-lg"
      >
        ‹
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded-lg"
      >
        ›
      </button>

      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
