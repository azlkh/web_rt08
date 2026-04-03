import { motion } from "framer-motion";

export const CommitteeSection = () => {
  const committee = [
    {
      role: "Ketua RT",
      name: "Lorem Ipsum",
    },
    {
      role: "Sekretaris",
      name: "Lorem Ipsum",
    },
    {
      role: "Bendahara",
      name: "Lorem Ipsum",
    },
  ];

  return (
    <>
      <section
        id="committee"
        className="max-w-6xl mx-auto pt-20 space-y-14 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl mb-4 font-semibold">
                Pengurus
              </h1>
              <p className="max-w-xl mx-auto mb-12 text-gray-600 text-lg">
                Tim pengurus yang bertanggung jawab dalam mengelola dan menjaga
                lingkungan agar tetap nyaman dan harmonis.
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {committee.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-black flex items-center justify-center text-white text-xl font-bold">
                  {item.name.charAt(0)}
                </div>

                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm mt-1">{item.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
