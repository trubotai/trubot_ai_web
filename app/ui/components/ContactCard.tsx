const ContactCard = ({
  label,
  subheading,
  email,
}: {
  label: string;
  subheading: string;
  email: string;
}) => (
  <div
    className="
      animate-fade-slide-up
      bg-white border border-gray-200 rounded-2xl p-6
      transition-transform duration-300 hover:scale-[1.02] hover:shadow-md
      flex flex-col items-center text-center
    "
  >
    <h4 className="text-lg font-bold text-navy mb-2">{label}</h4>

    <p className="text-gray-600 text-sm mb-3">{subheading}</p>

    <address className="not-italic">
      <a
        href={`mailto:${email}`}
        className="text-electric font-semibold hover:underline break-all"
      >
        {email}
      </a>
    </address>
  </div>
);

export default ContactCard;
