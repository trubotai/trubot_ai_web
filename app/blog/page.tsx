import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import PageLayout from "@/app/ui/components/shared/PageLayout";

export async function generateMetadata() {
  return {
    title: "Blog Articles | TruBot AI",
    description:
      "Explore insights, tutorials, and updates from TruBot AI. Stay ahead with our latest articles on AI, automation, and technology.",
    openGraph: {
      title: "Blog Articles | TruBot AI",
      description:
        "Explore insights, tutorials, and updates from TruBot AI. Stay ahead with our latest articles on AI, automation, and technology.",
      url: "https://trubotai.com/blog",
      siteName: "TruBot AI",
      type: "website",
      images: [
        {
          url: "/images/blog-listing.png",
          width: 1200,
          height: 630,
          alt: "TruBot AI Blog Overview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog Articles | TruBot AI",
      description:
        "Explore insights, tutorials, and updates from TruBot AI. Stay ahead with our latest articles on AI, automation, and technology.",
    },
  };
}

export default async function BlogPage() {
  const client = createClient();
  const posts = await client.getAllByType("blog_post", {
    orderings: [{ field: "my.blog_post.publish_date", direction: "desc" }],
  });

  return (
    <PageLayout id="blog">
      <h1
        id="blog"
        className="text-5xl font-heading font-extrabold text-center text-navy mb-10 fade-in slide-in-up"
      >
        Blog Articles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in slide-in-up">
        {posts.map((post) => (
          <Link key={post.uid} href={`/blog/${post.uid}`} className="group">
            <article className="bg-light rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden hover-raise">
              {post.data.cover_image?.url && (
                <div className="relative h-56 w-full overflow-hidden">
                  <PrismicNextImage
                    field={post.data.cover_image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-heading font-semibold mb-2 text-navy group-hover:text-electric transition-colors duration-300">
                  {post.data.title}
                </h2>

                {post.data.excerpt && (
                  <p className="text-navy/80 text-sm mb-4 font-body">
                    {post.data.excerpt}
                  </p>
                )}

                <div className="text-navy/60 text-xs font-body">
                  {post.data.publish_date
                    ? new Date(post.data.publish_date).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : "No publish date"}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
