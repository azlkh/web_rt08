import { motion } from "framer-motion";

const Section = ({ children, className = "" }) => (
  <section className={`py-28 px-6 ${className}`}>{children}</section>
);

const Container = ({ children }) => (
  <div className="max-w-6xl mx-auto">{children}</div>
);

const Card = ({ children }) => (
  <div className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-green-100 hover:-translate-y-1">
    {children}
  </div>
);

export default function RTWebsite() {
  return (
    <div className="bg-[#F0FDF4] text-[#14532D] font-sans">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/60 backdrop-blur-xl border-b border-green-100 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-md text-[#16A34A]">RT 01</h1>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:text-[#16A34A] transition">
              Tentang
            </a>
            <a href="#kegiatan" className="hover:text-[#16A34A] transition">
              Kegiatan
            </a>
            <a href="#galeri" className="hover:text-[#16A34A] transition">
              Galeri
            </a>
            <a href="#kontak" className="hover:text-[#16A34A] transition">
              Kontak
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCFCE7] via-[#FEF9C3] to-[#ECFCCB]" />

        {/* Glow effects */}
        <div className="absolute w-96 h-96 bg-green-300/30 blur-[120px] rounded-full top-0 left-0" />
        <div className="absolute w-96 h-96 bg-yellow-200/30 blur-[120px] rounded-full bottom-0 right-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            RT 01 RW 05
          </h1>
          <p className="text-green-700 max-w-xl mx-auto mb-8 text-lg">
            Lingkungan hangat dengan semangat kebersamaan dan gotong royong
          </p>
          <button className="px-8 py-3 bg-[#16A34A] text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Jelajahi Kegiatan
          </button>
        </motion.div>
      </section>

      {/* About */}
      <Section id="about">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Tentang RT</h2>
            <p className="text-green-800 max-w-2xl mx-auto">
              RT 01 adalah komunitas warga yang aktif dalam kegiatan sosial dan
              kebersamaan. Website ini menjadi tempat dokumentasi dan informasi
              untuk seluruh warga.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Statistik */}
      <Section className="bg-white/40 backdrop-blur-xl">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {["120+ Warga", "25+ Kegiatan", "10+ Event"].map((item, i) => (
              <Card key={i}>
                <h3 className="text-4xl font-bold text-[#16A34A]">
                  {item.split(" ")[0]}
                </h3>
                <p className="text-green-700 mt-2">
                  {item.split(" ").slice(1).join(" ")}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Kegiatan */}
      <Section id="kegiatan">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            Kegiatan Warga
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }}>
                <Card>
                  <div className="overflow-hidden rounded-xl mb-4">
                    <img
                      src={`https://source.unsplash.com/600x400/?community,${i}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-xl">Kegiatan Warga</h3>
                  <p className="text-sm text-green-600">2026</p>
                  <p className="text-green-800 mt-2">
                    Kegiatan bersama warga untuk menjaga kebersihan dan
                    kebersamaan.
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Galeri */}
      <Section id="galeri" className="bg-[#DCFCE7]">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Galeri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div className="overflow-hidden rounded-xl" key={i}>
                <img
                  src={`https://source.unsplash.com/300x300/?village,${i}`}
                  className="w-full h-40 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <Container>
          <div className="bg-gradient-to-r from-[#16A34A] to-[#65A30D] text-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Gabung Kegiatan Warga</h2>
            <p className="mb-6 text-green-100">
              Jadilah bagian dari lingkungan yang aktif dan penuh kebersamaan
            </p>
            <button className="px-8 py-3 bg-white text-green-700 rounded-xl font-semibold hover:scale-105 transition">
              Ikut Sekarang
            </button>
          </div>
        </Container>
      </Section>

      {/* Kontak */}
      <Section id="kontak" className="bg-[#16A34A] text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold mb-4">Kontak</h2>
          <p className="text-green-100">
            Hubungi pengurus RT untuk informasi lebih lanjut
          </p>
          <p className="mt-2">08xxxxxxxxxx</p>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="text-center p-6 text-sm text-green-700">
        © 2026 RT 01
      </footer>
    </div>
  );
}
