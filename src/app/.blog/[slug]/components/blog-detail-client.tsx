// components/blog-detail-client.tsx
"use client";

import { Share2, Bookmark } from "lucide-react";

interface BlogDetailActionsProps {
  title: string;
}

export function BlogDetailActions({ title }: BlogDetailActionsProps) {
  const handleShare = async () => {
    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(window.location.href);
      } catch {
        // fallback
        const textarea = document.createElement("textarea");
        textarea.value = window.location.href;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    }
  };

  const handleBookmark = () => {
    // Add your bookmark logic here
    console.log("Bookmark clicked");
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleShare}
        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        title="Share article"
        type="button"
      >
        <Share2 className="w-5 h-5" />
      </button>
      <button
        onClick={handleBookmark}
        className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
        title="Bookmark article"
        type="button"
      >
        <Bookmark className="w-5 h-5" />
      </button>
    </div>
  );
}

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function BlogImage({ src, alt, className }: BlogImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/800x400/E0E7FF/4338CA?text=Image+Not+Found";
      }}
    />
  );
}

interface BlogThumbnailProps {
  src: string;
  alt: string;
  className?: string;
}

export function BlogThumbnail({ src, alt, className }: BlogThumbnailProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.src =
          "https://placehold.co/300x150/E0E7FF/4338CA?text=Image+Not+Found";
      }}
    />
  );
}