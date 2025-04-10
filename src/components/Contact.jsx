import Heading from "./Heading";
import Section from "./Section";

const Contact = () => {
  return (
    <Section id="contact" className="overflow-hidden">
      <main className="container relative z-2">
        <div className="max-w-4xl mx-auto">
          <Heading
            title="Get in Touch with TruBot AI"
            text="We’re here to help you transform your business with AI."
          />

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
            <div>
              <h2 className="h5 mb-2">Careers</h2>
              <p className="body-2 text-n-1/50">careers@trubotai.com</p>
            </div>
            <div>
              <h2 className="h5 mb-2">Leadership</h2>
              <p className="body-2 text-n-1/50">gopal@trubotai.com</p>
            </div>
            <div>
              <h2 className="h5 mb-2">Sales Inquiries</h2>
              <p className="body-2 text-n-1/50">sales@trubotai.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-16 text-center">
            <p className="h6">Connect with Us</p>

            <p className="text-gray-400 mt-2">
              <a
                href="https://www.linkedin.com/in/gopalakrishnan-k-79474727/"
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Founder’s LinkedIn – Gopalakrishnan K
              </a>
            </p>
          </div>
        </div>
      </main>
    </Section>
  );
};

export default Contact;
