// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

import { fetchPostBySlug, fetchOtherPosts } from "./utils/api";
import { formatDate } from "./utils/helpers";
import RichTextRenderer from "./components/rich-text-renderer";
import { BlogDetailActions, BlogImage, BlogThumbnail } from "./components/blog-detail-client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  body: string | any[];
  cover?: string;
  createdAt: string;
  updatedAt: string;
}

// ✅ Correct typing for Next.js App Router page props
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 60; // ISR: Rebuild page every 60 seconds

export default async function BlogDetailPage({ params }: Props) {
  // 👈 Await params to resolve the promise
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  let post: BlogPost | null = null;
  let otherPosts: BlogPost[] = [];

  try {
    post = await fetchPostBySlug(slug);
    if (!post) {
      notFound();
    }
    otherPosts = await fetchOtherPosts(slug);
  } catch (error) {
    console.error("Error fetching blog data:", error);
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 sm:py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors duration-200 group p-2 rounded-lg hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8 sm:py-16">
        <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          {/* Article Header */}
          <div className="px-6 md:px-12 pt-8 pb-6 sm:pt-12 sm:pb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <time dateTime={post.createdAt}>
                    {formatDate(post.createdAt)}
                  </time>
                </div>
                {post.updatedAt !== post.createdAt && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>Updated {formatDate(post.updatedAt)}</span>
                  </div>
                )}
              </div>

              <BlogDetailActions title={post.title} />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6 sm:mb-8 tracking-tight">
              {post.title}
            </h1>
          </div>

          {/* Featured Image */}
          {post.cover && (
            <div className="px-6 md:px-12 pb-6 sm:pb-8">
              <div className="relative overflow-hidden rounded-2xl shadow-md">
                <BlogImage
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="px-6 md:px-12 pb-8 sm:pb-12">
            <RichTextRenderer
              content={post.body}
              className="max-w-none text-gray-700 leading-relaxed"
            />
          </div>
        </article>

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <section className="mt-12 sm:mt-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              More Reads
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((otherPost) => (
                <Link
                  key={otherPost.id}
                  href={`/blog/${otherPost.slug}`}
                  className="flex flex-col items-start p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 text-left group"
                >
                  {otherPost.cover && (
                    <BlogThumbnail
                      src={otherPost.cover}
                      alt={otherPost.title}
                      className="w-full h-32 object-cover rounded-lg mb-3 flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="text-blue-600 font-semibold text-lg group-hover:text-blue-700 leading-tight">
                      {otherPost.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatDate(otherPost.createdAt)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Navigation Footer */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Posts
          </Link>
        </div>
      </main>
    </div>
  );
}