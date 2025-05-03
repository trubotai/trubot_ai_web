import Link from "next/link";

interface CareerApplyCTAProps {
  title: string;
  instructions: string;
  applyEmail: string;
}

const CareerApplyCTA = ({
  title,
  instructions,
  applyEmail,
}: CareerApplyCTAProps) => {
  const emailSubject = `Application for ${title}`;
  const mailtoLink = `mailto:${applyEmail}?subject=${encodeURIComponent(
    emailSubject
  )}`;

  return (
    <section className="text-center max-w-2xl mx-auto space-y-6 animate-fade-slide-up">
      <p className="text-gray-700 leading-relaxed">
        {instructions}{" "}
        <Link
          href={mailtoLink}
          className="text-electric font-semibold hover:underline"
        >
          {applyEmail}
        </Link>
      </p>

      <Link
        href={mailtoLink}
        className="inline-block bg-electric text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-blue-700 hover-scale-glow"
      >
        Apply Now
      </Link>
    </section>
  );
};

export default CareerApplyCTA;
