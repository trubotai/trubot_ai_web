import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";

const About = () => {
  return (
    <Section className="overflow-hidden" id="about-us">
      <div className="container relative z-2">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <Heading
            title="About TrubotAI"
            text="Where AI Meets Human Connection."
          />

          {/* Our Story */}
          <section>
            <h2 className="h5 mb-2 text-center">Our Story</h2>
            <p className="ody-2 mb-3 text-n-1/50 text-justify">
              TrubotAI was founded by a visionary leader with over 15 years of
              expertise in data analysis, AI, and machine learning. With a
              strong background in driving innovation in the financial sector,
              our founder previously served as Senior Vice President at CitiBank
              and held key roles as Product Manager & Principal Data Scientist
              at Fidelity. These experiences have fueled TrubotAI’s dedication
              to creating intelligent, customer-focused solutions that tackle
              the inefficiencies of traditional customer support.
            </p>
          </section>

          {/* Our Vision */}
          <section>
            <h2 className="h5 mb-2 text-center">Our Vision</h2>
            <p className="ody-2 mb-3 text-n-1/50 text-justify">
              We envision a future where businesses can effortlessly scale their
              operations while maintaining a personal connection with their
              customers. By harnessing advanced AI technologies, we empower
              organizations to automate interactions, streamline workflows, and
              deliver exceptional customer experiences across multiple
              platforms.
            </p>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="h5 mb-2 text-center">Our Mission</h2>
            <p className="ody-2 mb-3 text-n-1/50 text-justify">
              Our mission is to revolutionize customer support and business
              communication through AI-powered solutions. From AI chatbots and
              voice-enabled bots to AI agents and social media management tools,
              we equip businesses with the tools they need to succeed in a
              competitive market.
            </p>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="h4 text-center mb-2">Why Choose TrubotAI?</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-center">
              <li>
                <strong>Expertise:</strong> Decades of experience in AI, machine
                learning, and data analysis.
              </li>
              <li>
                <strong>Innovation:</strong> Constantly evolving to bring you
                the latest advancements in AI technology.
              </li>
              <li>
                <strong>Customer-Centric:</strong> Solutions designed to enhance
                customer satisfaction and drive business growth.
              </li>
              <li>
                <strong>Scalability:</strong> Tools that grow with your
                business, ensuring long-term success.
              </li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="text-center mt-12">
            <Button href="#contact" white>
              Request a Demo
            </Button>
          </section>
        </div>
      </div>
    </Section>
  );
};

export default About;
