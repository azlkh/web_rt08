import { MapPin, Camera } from "lucide-react";
import { motion } from "framer-motion";

export const FooterSection = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-3">RT 08</h2>
            <p className="text-sm leading-relaxed">
              Website resmi RT 08 RW 03 sebagai media informasi dan dokumentasi
              kegiatan warga.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-3">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-gray-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400 transition">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#committee" className="hover:text-gray-400 transition">
                  Pengurus
                </a>
              </li>
              <li>
                <a href="#activity" className="hover:text-gray-400 transition">
                  Kegiatan
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gray-400 transition">
                  Galeri
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-3">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Bojonggenteng
              </li>
              <li className="flex items-center gap-2">
                <Camera size={16} />
                @rt08bojonggenteng
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white pt-6 text-center text-sm">
          © {new Date().getFullYear()} RT 08 RW 03. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
