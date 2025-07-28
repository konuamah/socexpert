import { useState, useEffect } from 'react'
import { BlogPost } from '../types/blogs'

export function usePosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('blog-posts')
    if (stored) setPosts(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('blog-posts', JSON.stringify(posts))
  }, [posts])

  const addPost = (newPost: BlogPost) => {
    setPosts((prev) => [newPost, ...prev])
  }

  const updatePost = (slug: string, updatedPost: Partial<BlogPost>) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.slug === slug
          ? {
              ...post,
              ...updatedPost,
              updatedAt: new Date().toISOString(),
            }
          : post
      )
    )
  }

  const deletePost = (slug: string) => {
    setPosts((prev) => prev.filter((p) => p.slug !== slug))
  }

  // Helper function to get post by slug
  const getPostBySlug = (slug: string): BlogPost | undefined => {
    return posts.find(post => post.slug === slug)
  }

  return { posts, addPost, updatePost, deletePost, getPostBySlug }
}