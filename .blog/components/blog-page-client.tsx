// components/blog-page-client.tsx
"use client";

import { useState, useMemo } from "react";
import Header from "./header";
import BlogCard from "./blog-card";
import { getExcerpt, formatDate } from "../utils";
import { BlogPost } from "../../types/blogs";

interface BlogPageClientProps {
  initialPosts: BlogPost[];
}

export default function BlogPageClient({ initialPosts }: BlogPageClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Filter posts based on search term
  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return initialPosts;
    
    return initialPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [initialPosts, searchTerm]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="max-w-7xl mx-auto px-6 py-16">
        {filteredPosts.length === 0 ? (
          <section className="text-center py-24">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
            </div>
            <h2 className="text-2xl font-light mb-4">
              {searchTerm ? "No matching blog posts found" : "No blog posts available"}
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              {searchTerm 
                ? "Try adjusting your search terms or browse all posts."
                : "Check back soon for new content and insights."
              }
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
              >
                Clear Search
              </button>
            )}
          </section>
        ) : (
          <section className="grid gap-8 md:gap-12">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                getExcerpt={getExcerpt}
                formatDate={formatDate}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}