"use client"
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from 'lucide-react'

type BlogPost = {
  id: string
  slug: string
  title: string
  content: string
  image?: string
  createdAt: string
  updatedAt: string
}

export default function BlogDetail() {
  const params = useParams()
  const router = useRouter()
  const { slug } = params  // use slug instead of id
  const [post, setPost] = useState<BlogPost | null>(null)
  // Add new state for other posts
const [otherPosts, setOtherPosts] = useState<BlogPost[]>([])

useEffect(() => {
  if (!slug) return

  const stored = localStorage.getItem('blog-posts')
  if (stored) {
    try {
      const posts: BlogPost[] = JSON.parse(stored)
      const found = posts.find(p => p.slug === slug)
      setPost(found || null)
      // Filter out current post and set others
      const others = posts.filter(p => p.slug !== slug)
      setOtherPosts(others)
    } catch (e) {
      console.error('Failed to parse posts', e)
      setPost(null)
      setOtherPosts([])
    }
  }
}, [slug])


  useEffect(() => {
    if (!slug) return

    const stored = localStorage.getItem('blog-posts')
    if (stored) {
      try {
        const posts: BlogPost[] = JSON.parse(stored)
        const found = posts.find(p => p.slug === slug)  // find by slug
        setPost(found || null)
      } catch (e) {
        console.error('Failed to parse posts', e)
        setPost(null)
      }
    }
  }, [slug])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleBack = () => {
    router.back()
  }

  if (!post) {
    return <p>Loading post or post not found...</p>
  }

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className=" border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Blog
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <article className=" rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          {/* Article Header */}
          <div className="px-8 md:px-12 pt-12 pb-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.createdAt}>
                    {formatDate(post.createdAt)}
                  </time>
                </div>
                {post.updatedAt !== post.createdAt && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Updated {formatDate(post.updatedAt)}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    if (navigator.share && post) {
                      navigator.share({
                        title: post.title,
                        url: window.location.href
                      })
                    } else {
                      navigator.clipboard.writeText(window.location.href)
                    }
                  }}
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  title="Share article"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all duration-200"
                  title="Bookmark article"
                >
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-8 tracking-tight">
              {post.title}
            </h1>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="px-8 md:px-12 pb-8">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="px-8 md:px-12 pb-12">
            <div className="max-w-none">
              <style jsx>{`
                .article-content {
                  font-size: 1.125rem;
                  line-height: 1.8;
                  color: #374151;
                }
                .article-content h1,
                .article-content h2,
                .article-content h3,
                .article-content h4,
                .article-content h5,
                .article-content h6 {
                  color: #111827;
                  font-weight: 600;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  line-height: 1.3;
                }
                .article-content h1 { font-size: 2.25rem; }
                .article-content h2 { font-size: 1.875rem; }
                .article-content h3 { font-size: 1.5rem; }
                .article-content h4 { font-size: 1.25rem; }
                .article-content p {
                  margin-bottom: 1.5rem;
                }
                .article-content strong {
                  color: #111827;
                  font-weight: 600;
                }
                .article-content em {
                  color: #6b7280;
                  font-style: italic;
                }
                .article-content a {
                  color: #2563eb;
                  text-decoration: underline;
                  text-underline-offset: 2px;
                }
                .article-content a:hover {
                  color: #1d4ed8;
                }
                .article-content ul,
                .article-content ol {
                  margin-bottom: 1.5rem;
                  padding-left: 1.5rem;
                }
                .article-content li {
                  margin-bottom: 0.5rem;
                }
                .article-content blockquote {
                  border-left: 4px solid #e5e7eb;
                  padding-left: 1rem;
                  margin: 1.5rem 0;
                  color: #6b7280;
                  font-style: italic;
                }
                .article-content code {
                  background-color: #f3f4f6;
                  padding: 0.125rem 0.25rem;
                  border-radius: 0.25rem;
                  font-size: 0.875rem;
                  color: #dc2626;
                }
                .article-content pre {
                  background-color: #f9fafb;
                  padding: 1rem;
                  border-radius: 0.5rem;
                  overflow-x: auto;
                  margin: 1.5rem 0;
                  border: 1px solid #e5e7eb;
                }
                .article-content img {
                  max-width: 100%;
                  height: auto;
                  border-radius: 0.5rem;
                  margin: 1.5rem 0;
                }
              `}</style>
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>

        {/* Other Posts */}
{/* Other Posts */}
{otherPosts.length > 0 && (
  <section className="max-w-4xl mx-auto px-6 py-8">
    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Other Posts</h2>
    <ul className="space-y-4">
      {otherPosts.map(post => (
        <li key={post.id}>
          <button
            onClick={() => router.push(`/blog/${post.slug}`)}
            className="flex items-center gap-4 text-left w-full hover:underline"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
            )}
            <span className="text-blue-600 font-medium">{post.title}</span>
          </button>
        </li>
      ))}
    </ul>
  </section>
)}



        {/* Navigation Footer */}
        <div className="mt-16 text-center">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 hover:transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Posts
          </button>
        </div>
      </main>
    </div>
  )
}