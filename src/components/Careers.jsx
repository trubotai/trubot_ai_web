import { jobPostings } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Careers = () => {
  return (
    <Section id="careers">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Join Our Team at Trubot AI"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {jobPostings.map((job) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${job.backgroundUrl || "/default-bg.jpg"})`,
              }}
              key={job.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{job.title}</h5>
                <p className="body-2 mb-6 text-n-3">{job.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={job.iconUrl || "/default-icon.png"}
                    width={48}
                    height={48}
                    alt={job.location}
                  />
                  <a
                    href={`mailto:apply@trubotai.com?subject=Application for ${job.title}`}
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"
                  >
                    Apply Now
                  </a>
                  <Arrow />
                </div>
              </div>

              {job.light && <GradientLight />}

              <div
                className="absolute inset-0.5"
                style={{ clipPath: "url(#careers)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {job.imageUrl && (
                    <img
                      src={job.imageUrl}
                      width={380}
                      height={362}
                      alt={job.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Careers;
