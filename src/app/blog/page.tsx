'use client'

import { useEffect, useState } from 'react'

type BlogPost = {
  id: string
  title: string
  content: string
  image?: string // optional image field
  createdAt: string
  updatedAt: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  // Load posts from localStorage on mount
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

  return (
    <main style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <h1>Blog Posts</h1>

      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {posts.map(({ id, title, content, image, createdAt, updatedAt }) => (
            <li
              key={id}
              style={{ borderBottom: '1px solid #ccc', marginBottom: '1.5rem', paddingBottom: '1rem' }}
            >
              <h2>{title}</h2>
              <small>
                Created: {new Date(createdAt).toLocaleString()}
                {updatedAt !== createdAt && ` | Updated: ${new Date(updatedAt).toLocaleString()}`}
              </small>

              {image && (
                <img
                  src={image}
                  alt={`Image for ${title}`}
                  style={{ display: 'block', maxWidth: '100%', margin: '1rem 0', borderRadius: '8px' }}
                />
              )}

              <p style={{ whiteSpace: 'pre-wrap', marginTop: '0.5rem' }}>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
