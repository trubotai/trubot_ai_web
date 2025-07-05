import type { Metadata } from "next";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import PageLayout from "@/app/ui/components/shared/PageLayout";
import BlogPostHeader from "@/app/ui/components/blog/BlogPostHeader";
import ReadingProgress from "@/app/ui/components/blog/ReadingProgress";
import TableOfContents from "@/app/ui/components/blog/TableOfContents";
import BackToTop from "@/app/ui/components/blog/BackToTop";

export async function generateStaticParams() {
  const client = createClient();
  const posts = await client.getAllByType("blog_post");
  return posts.map((post) => ({ uid: post.uid }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ uid: string }>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const post = await client.getByUID("blog_post", uid);

  if (!post) return {};

  const title = post.data.meta_title || post.data.title || "Blog Post";
  const description =
    post.data.meta_description ||
    post.data.excerpt ||
    "Explore this blog post.";
  const imageUrl =
    post.data.meta_image?.url ||
    post.data.cover_image?.url ||
    "/images/default-og.png";
  const imageAlt =
    post.data.meta_image?.alt ||
    post.data.cover_image?.alt ||
    "Blog Post Image";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const Page = async ({ params }: { params: Promise<{ uid: string }> }) => {
  const { uid } = await params;
  const client = createClient();
  const post = await client.getByUID("blog_post", uid);

  if (!post) notFound();

  const currentUrl = `https://trubotai.com/blog/${uid}`;

  return (
    <>
      <ReadingProgress />
      <PageLayout id="blog-post">
        <article className="max-w-5xl mx-auto">
          {/* Blog Post Header */}
          <BlogPostHeader
            title={post.data.title || ""}
            excerpt={post.data.excerpt || ""}
            author={post.data.author || "TruBot AI Team"}
            publishDate={post.data.publish_date || new Date().toISOString()}
            readTime={post.data.estimated_read_time || 5}
            tags={post.data.tags || "AI Automation"}
            coverImage={post.data.cover_image}
            url={currentUrl}
          />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
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
                    heading4: ({ children }) => (
                      <h4 className="text-xl font-heading font-semibold text-navy mt-6 mb-2">
                        {children}
                      </h4>
                    ),
                    paragraph: ({ children }) => (
                      <p className="text-base text-navy/80 font-body leading-relaxed mb-4">
                        {children}
                      </p>
                    ),
                    list: ({ children }) => (
                      <ul className="list-disc list-inside text-navy/80 mb-4 space-y-2">
                        {children}
                      </ul>
                    ),
                    oList: ({ children }) => (
                      <ol className="list-decimal list-inside text-navy/80 mb-4 space-y-2">
                        {children}
                      </ol>
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
                    strong: ({ children }) => (
                      <strong className="font-semibold text-navy">
                        {children}
                      </strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-navy/70">{children}</em>
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
                    image: ({ node }) => (
                      <div className="my-8">
                        <PrismicNextImage
                          field={node}
                          className="w-full rounded-lg shadow-md"
                          alt=""
                        />
                      </div>
                    ),
                    preformatted: ({ children }) => (
                      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                        {children}
                      </pre>
                    ),
                  }}
                />
              </div>

              {/* Table of Contents - Mobile */}
              <div className="lg:hidden mt-8">
                <TableOfContents />
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-sm text-gray-500">
                <p>
                  Published on{" "}
                  {new Date(
                    post.data.publish_date || new Date()
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>By {post.data.author || "TruBot AI Team"}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Share this article:
                </span>
                <div className="flex gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      `${post.data.title} - TruBot AI`
                    )}&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 hover:text-blue-500 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      currentUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      currentUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-blue-100 hover:text-blue-500 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </article>
      </PageLayout>
      <BackToTop />
    </>
  );
};

export const revalidate = 60;

export default Page;
