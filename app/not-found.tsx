import Image from "next/image";

import Button from "@/app/ui/components/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-24 animate-fade-in">
      {/* Sad Bot */}
      <div className="relative w-40 h-40 mb-6 mx-auto animate-sway">
        <Image
          src="/images/sad-bot.png"
          alt="Sad Bot"
          width={160}
          height={160}
          className="object-contain"
          priority
        />
      </div>

      <h1 className="text-4xl font-extrabold text-navy mb-3 animate-slide-up">
        Well, that wasn’t supposed to happen…
      </h1>

      <p className="text-gray-600 max-w-md mb-8 animate-fade-in animation-delay-200">
        The page you’re looking for doesn’t exist — or maybe it ran off with our
        AI.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
        <Button href="/" className="w-full sm:w-auto">
          Go to Homepage
        </Button>

        <Button href="/products" variant="outline" className="w-full sm:w-auto">
          Explore Products
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
