import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import PageLayout from "@/app/ui/components/shared/PageLayout";

export async function generateStaticParams() {
  const client = createClient();
  const posts = await client.getAllByType("blog_post");
  return posts.map((post) => ({ uid: post.uid }));
}
const Page = async ({ params }: { params: Promise<{ uid: string }> }) => {
  const { uid } = await params;
  const client = createClient();
  const post = await client.getByUID("blog_post", uid);

  if (!post) notFound();

  return (
    <PageLayout id="blog-post" maxWidth="narrow" padding="default">
      {post.data.cover_image?.url && (
        <PrismicNextImage
          field={post.data.cover_image}
          className="mb-6 rounded fade-in"
          alt=""
        />
      )}

      <h1 className="text-4xl font-heading font-bold text-navy mb-4 fade-in slide-in-up">
        {post.data.title}
      </h1>

      <p className="text-navy/60 text-sm mb-8 font-body fade-in animation-delay-200">
        {post.data.author}{" "}
        {post.data.publish_date &&
          ` | ${new Date(post.data.publish_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}`}
      </p>

      <div className="prose prose-lg text-navy font-body fade-in slide-in-up animation-delay-300">
        <PrismicRichText
          field={post.data.content}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-4xl font-heading font-bold text-navy mb-6">
                {children}
              </h1>
            ),
            heading2: ({ children }) => (
              <h2 className="text-3xl font-heading font-semibold text-navy mt-10 mb-4">
                {children}
              </h2>
            ),
            heading3: ({ children }) => (
              <h3 className="text-2xl font-heading font-semibold text-navy mt-8 mb-3">
                {children}
              </h3>
            ),
            paragraph: ({ children }) => (
              <p className="text-base text-navy/80 font-body leading-relaxed mb-4">
                {children}
              </p>
            ),
            listItem: ({ children }) => (
              <li className="list-disc list-inside text-navy/70 font-body">
                {children}
              </li>
            ),
            oListItem: ({ children }) => (
              <li className="list-decimal list-inside text-navy/70 font-body">
                {children}
              </li>
            ),
            image: ({ node }) => (
              <PrismicNextImage
                field={node}
                className="mb-6 rounded fade-in"
                alt=""
              />
            ),
            hyperlink: ({ node, children }) => (
              <a
                href={node.data?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric underline hover:text-teal"
              >
                {children}
              </a>
            ),
          }}
        />
      </div>
    </PageLayout>
  );
};

export const revalidate = 60;

export default Page;
