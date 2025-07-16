"use client"
import { useEffect, useState } from 'react'
import { Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react'

type BlogPost = {
  id: string
  title: string
  slug: string
  content: string
  image?: string
  createdAt: string
  updatedAt: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('blog-posts')
    if (stored) {
      try {
        const parsedPosts = JSON.parse(stored)
        setPosts(parsedPosts)
      } catch (error) {
        console.error('Failed to parse posts from localStorage', error)
        setPosts([])
      }
    }
  }, [])

  // Utility function to strip HTML and truncate
  const getExcerpt = (html: string, limit = 180) => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html
    const text = tempDiv.textContent || tempDiv.innerText || ''
    return text.length > limit ? text.slice(0, limit) + '…' : text
  }

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Insights, stories, and perspectives from our team
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-light text-gray-900 mb-4">
              {posts.length === 0 ? 'No blog posts available' : 'No articles found'}
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              {posts.length === 0 
                ? 'Check back soon for new content and insights.'
                : 'Try adjusting your search terms or browse all articles.'}
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:gap-12">
            {filteredPosts.map((post) => (
          <article
  key={post.id}
  className={`group
    bg-white/20
    backdrop-blur-md
    border border-white/30
    rounded-2xl
    overflow-hidden
    transition-all duration-300 hover:shadow-xl
    ${hoveredCard === post.id ? 'transform -translate-y-1' : ''}
  `}
  onMouseEnter={() => setHoveredCard(post.id)}
  onMouseLeave={() => setHoveredCard(null)}
>
                <div className="md:flex">
                  {/* Image Section */}
                  {post.image && (
                    <div className="md:w-2/5 relative overflow-hidden">
                      <div className="aspect-[4/3] md:aspect-auto md:h-full">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  )}
                  
                  {/* Content Section */}
                  <div className={`${post.image ? 'md:w-3/5' : 'w-full'} p-8 md:p-12 flex flex-col justify-between`}>
                    <div>
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
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

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
                        {getExcerpt(post.content)}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div className="flex items-center">
                      <button 
                        onClick={() => window.location.href = `/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group/btn"
                      >
                        Read article
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}