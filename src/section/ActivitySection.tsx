import { motion } from "framer-motion";
import { ActivityCarousel } from "../components/ActivityCarousel";

const activities = [
  {
    title: "Kerja Bakti Mingguan",
    date: "Maret 2026",
    desc: "Kegiatan membersihkan lingkungan bersama warga.",
    images: [],
  },
  {
    title: "Perayaan 17 Agustus",
    date: "Agustus 2025",
    desc: "Lomba dan acara untuk memeriahkan hari kemerdekaan.",
    images: [
      "images/lomba_agustus2025_optz/20250817_074114.webp",
      "images/lomba_agustus2025_optz/20250817_102205.webp",
      "images/lomba_agustus2025_optz/20250817_131203.webp",
      "images/lomba_agustus2025_optz/20250817_132304.webp",
      "images/lomba_agustus2025_optz/20250817_090617.webp",
      "images/lomba_agustus2025_optz/20250817_130120.webp",
      "images/lomba_agustus2025_optz/20250817_131729.webp",
    ],
  },
  {
    title: "Maulid Nabi Muhammad SAW.",
    date: "September 2025",
    desc: "Peringatan hari lahir Nabi Muhammad SAW melalui tausiyah, pembacaan shalawat, dan doa bersama untuk mempererat ukhuwah warga.",
    images: [
      "images/mulud_september2025_optz/1757317491493.webp",
      "images/mulud_september2025_optz/1757317492097.webp",
      "images/mulud_september2025_optz/1757317493096.webp",
      "images/mulud_september2025_optz/1757317493660.webp",
      "images/mulud_september2025_optz/1757317495541.webp",
      "images/mulud_september2025_optz/1757317491573.webp",
      "images/mulud_september2025_optz/1757317492279.webp",
      "images/mulud_september2025_optz/1757317493211.webp",
      "images/mulud_september2025_optz/1757317494782.webp",
    ],
  },
];

export const ActivitySection = () => {
  return (
    <section id="activity" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Kegiatan</h2>
          <p className="text-gray-600 mt-2">
            Dokumentasi kegiatan yang dilakukan bersama warga RT 08
          </p>
        </div>

        {/* List */}
        <div className="space-y-16">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 h-64 rounded-2xl bg-gray-200 flex items-center justify-center text-gray-400">
                <ActivityCarousel images={item.images} />
              </div>

              <div className="w-full md:w-1/2">
                <span className="text-sm text-gray-800">{item.date}</span>

                <h3 className="text-2xl font-semibold mt-2">{item.title}</h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
