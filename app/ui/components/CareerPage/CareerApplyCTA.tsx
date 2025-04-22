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

  return (
    <section className="text-center max-w-2xl mx-auto space-y-6">
      <p className="text-gray-700 leading-relaxed">
        {instructions}{" "}
        <Link
          href={`mailto:${applyEmail}?subject=${encodeURIComponent(
            emailSubject
          )}`}
          className="text-electric font-semibold hover:underline"
        >
          {applyEmail}
        </Link>
      </p>

      <Link
        href={`mailto:${applyEmail}?subject=${encodeURIComponent(
          emailSubject
        )}`}
        className="inline-block bg-electric text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Apply Now
      </Link>
    </section>
  );
};

export default CareerApplyCTA;
