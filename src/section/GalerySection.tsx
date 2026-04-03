import { motion } from "framer-motion";

const images = [
  "images/mulud_september2025_optz/1757317495541.webp",
  "images/lomba_agustus2025_optz/20250817_102205.webp",
  "images/lomba_agustus2025_optz/20250817_131203.webp",
  "images/mulud_september2025_optz/1757317493211.webp",
  "images/lomba_agustus2025_optz/20250817_132304.webp",
  "images/mulud_september2025_optz/1757317494782.webp",
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Galeri</h2>
          <p className="text-gray-600 mt-2">
            Dokumentasi momen kebersamaan warga
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl bg-gray-200 aspect-square"
            >
              {/* Image */}
              {img ? (
                <img
                  src={img}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Gambar
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

              {/* Label */}
              <div className="absolute bottom-2 left-2 text-white text-sm opacity-0 group-hover:opacity-100 transition">
                Kegiatan Warga
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
