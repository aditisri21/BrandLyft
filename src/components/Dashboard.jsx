import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] px-10 py-6 font-sans relative overflow-hidden">

      {/* NAVBAR */}
      <div className="flex justify-between items-center mb-20">

        <div className="flex gap-8 text-gray-500 text-sm">
          <p className="hover:text-black cursor-pointer">Home</p>
          <p className="hover:text-black cursor-pointer">Services</p>
          <p className="hover:text-black cursor-pointer">About</p>
        </div>

        <h1 className="font-semibold text-lg flex items-center gap-2">
          ⚡ <span>Ruang Edit</span>
        </h1>

        <div className="flex items-center gap-5">
          <p className="text-sm cursor-pointer">Class</p>

          <button className="border px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition">
            Contacts us →
          </button>
        </div>
      </div>

      {/* BADGES RIGHT */}
      <div className="absolute right-16 top-32 flex flex-col gap-3">
        <span className="bg-purple-200 text-purple-700 px-4 py-1 rounded-full text-xs">
          RE Production
        </span>
        <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-xs">
          2024.09
        </span>
      </div>

      {/* SIDE TEXT */}
      <div className="absolute left-12 bottom-24 text-xs text-gray-500 leading-relaxed">
        With more than <br />
        <span className="font-semibold text-black">2K+ MEMBERS</span> <br />
        500+ TUTORIALS
      </div>

      {/* HERO TEXT */}
      <div className="text-center max-w-4xl mx-auto">

       <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.2] text-[#1f2937]"
>
  Level Up Your <br />

  <div className="flex items-center justify-center gap-4 flex-wrap">
    <span>Design</span>

    <span className="bg-gradient-to-r from-orange-200 to-orange-400 px-3 py-1 rounded-full inline-flex items-center justify-center shadow-md">
      ✨
    </span>

    <span>with</span>
  </div>

  Our <br />
  Design Class
</motion.h1>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition"
        >
          Join us →
        </motion.button>

      </div>

      {/* DECORATIVE STARS */}
      <div className="absolute top-40 left-32 text-purple-400 text-xl">✦</div>
      <div className="absolute bottom-32 right-40 text-purple-400 text-xl">✦</div>

      {/* CURVE DECOR */}
      <div className="absolute left-20 top-60 w-32 h-16 border-t-2 border-purple-300 rounded-full rotate-[-20deg]" />

    </div>
  );
}