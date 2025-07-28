import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../../../types/blogs';

type BlogCardProps = {
  post: BlogPost;
  getExcerpt: (html: string, limit?: number) => string;
  formatDate: (dateString: string) => string;
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
};

export default function BlogCard({
  post,
  getExcerpt,
  formatDate,
  hoveredCard,
  setHoveredCard,
}: BlogCardProps) {
  // Check if cover image exists and is valid
  const hasValidCover = post.cover && post.cover.trim() !== '';

  return (
    <article
      aria-labelledby={`blog-title-${post.id}`}
      tabIndex={0}
      onFocus={() => setHoveredCard(post.id)}
      onBlur={() => setHoveredCard(null)}
      onMouseEnter={() => setHoveredCard(post.id)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`group
        bg-white/20
        backdrop-blur-md
        border border-white/30
        rounded-2xl
        overflow-hidden
        transition-all duration-300 hover:shadow-xl
        focus-within:shadow-xl focus-within:-translate-y-1
        ${hoveredCard === post.id ? 'transform -translate-y-1' : ''}
      `}
    >
      <div className="md:flex">
        {/* Image Section - Only render if valid cover exists */}
        {hasValidCover && (
          <div className="md:w-2/5 relative overflow-hidden">
            <div className="aspect-[4/3] md:aspect-auto md:h-full relative">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className={`${hasValidCover ? 'md:w-3/5' : 'w-full'} p-8 md:p-12 flex flex-col justify-between`}>
          <div>
            {/* Meta Info */}
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time dateTime={post.createdAt}>
                  {formatDate(post.createdAt)}
                </time>
              </div>
              {post.updatedAt !== post.createdAt && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  <span>Updated {formatDate(post.updatedAt)}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h2
              id={`blog-title-${post.id}`}
              className="text-2xl md:text-3xl font-light text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-200"
            >
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
              {getExcerpt(post.body)}
            </p>
          </div>

          {/* Read More */}
          <div className="flex items-center">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group/btn focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label={`Read full article: ${post.title}`}
            >
              Read article
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}