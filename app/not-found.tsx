import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="relative w-40 h-40 mb-6 mx-auto animate-sway">
        <Image
          src="/images/sad-bot.png"
          alt="Sad Bot"
          width={128}
          height={128}
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-4xl font-bold text-navy mb-2">
        Well, that wasn’t supposed to happen…
      </h1>

      <p className="text-gray-600 max-w-md mb-6">
        The page you’re looking for doesn’t exist — or maybe it ran off with our
        AI.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="bg-electric text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
        >
          Go to Homepage
        </Link>

        <Link
          href="/products"
          className="bg-white border border-electric text-electric px-6 py-3 rounded-md font-semibold hover:bg-blue-50"
        >
          Explore Products
        </Link>
      </div>
    </div>
  );
}
