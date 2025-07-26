import { useSession } from "@/hooks/auth.hook";
import { Star } from "lucide-react";

function Hero() {
  const { data: session } = useSession();

  return (
    <div>
      <div className="relative h-[600px] w-full overflow-hidden">
        <img
          src="/public/ChatGPT Image Jul 22, 2025, 08_16_42 PM.png"
          alt="Coffee background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#63b854]/70 to-transparent mix-blend-multiply" />

        <div className="relative z-10 flex flex-col gap-4 items-center justify-center text-center h-full px-6 text-white">
          <div className="flex items-center gap-2 mb-3 text-yellow-400 font-medium text-sm">
            <span className="text-xl">
              <Star />
            </span>
            Premium Quality Since 1971
            <span className="text-xl">
              <Star />
            </span>
          </div>

          <h1 className="text-5xl font-extrabold">
            Crafted with <span className="text-yellow-500">Passion</span>
          </h1>

          <p className="max-w-md text-lg font-semibold">
            Experience the perfect blend of rich flavors and exceptional quality
            in every cup. Your daily ritual of excellence starts here.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="bg-gradient-to-r from-[#006241] to-100% text-white font-semibold px-6 py-2 rounded-md hover:bg-[#005136] transition">
              Order Now →
            </button>
            <button className="bg-white/10 border border-white text-white px-6 py-2 rounded-md hover:bg-white/20 transition">
              Explore Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
