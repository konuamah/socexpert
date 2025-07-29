
// page.tsx (Updated Server Component)
import { Suspense } from "react";
import BlogPageClient from "./components/blog-page-client";
import { BlogPost } from "../../../types/blogs";

// Utility function for formatting blog posts
function transformPosts(data: any[]): BlogPost[] {
  return data
    .filter((item) => item?.attributes || item?.title)
    .map((item) => {
      const data = item.attributes || item;

      // Format body content
      let bodyContent = "";
      const rawBody = data.body || data.content || item.body || item.content || "";

      if (typeof rawBody === "string") {
        bodyContent = rawBody;
      } else if (Array.isArray(rawBody)) {
        bodyContent = rawBody
          .map((block) => {
            if (block.type === "paragraph" && block.children) {
              return block.children.map((child: any) => child.text || "").join("");
            }
            if (block.type === "text") {
              return block.text || "";
            }
            return "";
          })
          .filter((text) => text.trim())
          .join(" ");
      } else if (rawBody && typeof rawBody === "object") {
        bodyContent = rawBody.text || rawBody.content || "";
      }

      // Format cover image
      const coverUrl =
        data.cover?.data?.attributes?.url ||
        data.cover?.url ||
        item.cover?.url ||
        data.cover ||
        item.cover;

      const finalCover =
        typeof coverUrl === "string" && coverUrl.startsWith("/")
          ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${coverUrl}`
          : coverUrl;

      return {
        id: (item.id || item.documentId || "").toString(),
        title: data.title || item.title || "Untitled",
        slug: data.slug || item.slug || "",
        body: bodyContent,
        cover: finalCover,
        createdAt: data.createdAt || item.createdAt || "",
        updatedAt: data.updatedAt || item.updatedAt || "",
      };
    });
}

// Server-side data fetching with ISR
async function fetchPosts(): Promise<BlogPost[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 }, // ✅ Enable ISR every 60s
    }
  );

  if (!res.ok) throw new Error("Failed to fetch blog posts");

  const json = await res.json();
  return transformPosts(json.data);
}

// Loading component
function BlogPageLoading() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center py-24">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    </div>
  );
}

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <Suspense fallback={<BlogPageLoading />}>
      <BlogPageClient initialPosts={posts} />
    </Suspense>
  );
}