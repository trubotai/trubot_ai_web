import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import {
  FaCalendar,
  FaUser,
  FaClock,
  FaTag,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

import type * as prismic from "@prismicio/client";

interface BlogPostHeaderProps {
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: number;
  tags: string;
  coverImage?: prismic.ImageField<never>;
  url: string;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  tags,
  coverImage,
  url,
}) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : url;
  const shareText = `${title} - TruBot AI`;

  const shareLinks = [
    {
      name: "Twitter",
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(shareUrl)}`,
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      color: "hover:text-blue-600",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      color: "hover:text-blue-500",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: `https://wa.me/?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`,
      color: "hover:text-green-500",
    },
  ];

  return (
    <header className="mb-12">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link
              href="/blog"
              className="hover:text-electric transition-colors"
            >
              Blog
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="text-navy">{tags}</span>
          </li>
        </ol>
      </nav>

      {/* Cover Image */}
      {coverImage?.url && (
        <div className="mb-8 rounded-xl overflow-hidden">
          <PrismicNextImage
            field={coverImage}
            alt=""
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6 leading-tight">
        {title}
      </h1>

      {/* Excerpt */}
      {excerpt && (
        <p className="text-xl text-navy/70 mb-8 leading-relaxed max-w-4xl">
          {excerpt}
        </p>
      )}

      {/* Meta Information */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center">
            <FaUser className="mr-2 text-electric" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <FaCalendar className="mr-2 text-electric" />
            <span>
              {new Date(publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-2 text-electric" />
            <span>{readTime} min read</span>
          </div>
          <div className="flex items-center">
            <FaTag className="mr-2 text-electric" />
            <span className="bg-electric/10 text-electric px-3 py-1 rounded-full text-xs font-medium">
              {tags}
            </span>
          </div>
        </div>

        {/* Social Sharing */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 mr-2">Share:</span>
          {shareLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors ${link.color}`}
                aria-label={`Share on ${link.name}`}
                title={`Share on ${link.name}`}
              >
                <Icon className="text-lg" />
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default BlogPostHeader;
