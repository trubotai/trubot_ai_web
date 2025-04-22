interface CareerApplyCTAProps {
  instructions: string;
  applyEmail: string;
  applyCC: string;
  applyLink: string;
}

const CareerApplyCTA = ({
  instructions,
  applyEmail,
  applyCC,
  applyLink,
}: CareerApplyCTAProps) => {
  return (
    <section className="text-center mt-16">
      <p className="text-gray-700 mb-6">
        {instructions}{" "}
        <a
          href={`mailto:${applyEmail}`}
          className="text-electric font-semibold hover:underline"
        >
          {applyEmail}
        </a>{" "}
        (cc: {applyCC})
      </p>

      <a
        href={applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-electric text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Apply Now
      </a>
    </section>
  );
};

export default CareerApplyCTA;
