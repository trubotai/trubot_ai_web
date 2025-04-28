import PageLayout from "../PageLayout";
import SectionHeader from "../SectionHeader";
import StoryCard from "../StoryCard";

interface Story {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  linkLabel: string;
  linkHref: string;
}

interface SuccessStoriesProps {
  stories: Story[];
  title?: string;
  subtitle?: string;
}

const SuccessStories = ({
  stories,
  title = "Success Stories",
  subtitle = "See how our partners are achieving remarkable growth.",
}: SuccessStoriesProps) => {
  return (
    <PageLayout>
      <SectionHeader title={title} subtitle={subtitle} />

      {/* Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            title={story.title}
            challenge={story.challenge}
            solution={story.solution}
            results={story.results}
            linkLabel={story.linkLabel}
            linkHref={story.linkHref}
            delay={index * 100}
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default SuccessStories;
