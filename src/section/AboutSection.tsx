import { Heart, Handshake, Shield } from "lucide-react";
import { motion } from "framer-motion";

type AboutContent = {
  label: string;
  desc: string;
  icon: React.ReactNode;
  bgColor: string;
};

export const AboutSection = () => {
  const c: AboutContent[] = [
    {
      label: "Gotong Royong",
      desc: "Kegiatan rutin untuk menjaga kebersihan dan kenyamanan lingkungan.",
      icon: <Handshake size={28} color="white" />,
      bgColor: "bg-blue-500",
    },
    {
      label: "Kegiatan Sosial",
      desc: "Santunan, acara warga, dan kegiatan kebersamaan lainnya.",
      icon: <Heart size={28} color="white" />,
      bgColor: "bg-pink-500",
    },
    {
      label: "Keamanan Lingkungan",
      desc: "Sistem ronda dan kepedulian warga terhadap keamanan bersama.",
      icon: <Shield size={28} color="white" />,
      bgColor: "bg-emerald-500",
    },
  ];

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto min-h-screen pt-20 space-y-14 px-6 scroll-mt-24"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-5xl mb-4 font-semibold">
          Tentang Kami
        </h1>
        <div className="text-gray-600 text-lg max-w-2xl mx-auto px-2">
          <p className="text-center">
            RT 08 RW 03 desa Bojonggenteng merupakan lingkungan yang aktif dalam
            kegiatan sosial dan gotong royong.
          </p>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-auto">
        {c.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-4 flex flex-col items-center gap-3 rounded-lg transition shadow-sm hover:shadow-lg"
          >
            <div
              className={`${e.bgColor} p-3 rounded-full transition-transform duration-300 group-hover:scale-110`}
            >
              {e.icon}
            </div>

            <h3 className="font-semibold text-lg">{e.label}</h3>

            <p className="text-gray-500 text-sm">{e.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-semibold text-gray-800">Visi & Misi</h3>

          <p className="text-gray-600 leading-relaxed text-justify md:text-left">
            Mewujudkan lingkungan yang harmonis, aman, dan nyaman bagi seluruh
            warga.
          </p>

          <p className="text-gray-600 leading-relaxed text-justify md:text-left">
            Meningkatkan kebersamaan melalui gotong royong, menjaga kebersihan
            lingkungan, mendorong partisipasi dalam kegiatan sosial, serta
            memperkuat keamanan dan ketertiban bersama.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="images/other/1757317491573.webp"
            alt="Kegiatan warga"
            className="w-full max-w-md max-h-64 object-cover rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};
